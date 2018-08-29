<template>

  <div class="wrapper">
    <div class="loanColumn">

      <div class="columnTitle">
        <h3>Outstanding Loans</h3>
        <v-btn @click="showLoanForm" class="addBtn">ADD NEW</v-btn>
      </div>

      <div class="loadingBar">
        <ProgressBar v-if="loading" />
      </div>
        <loans :loanInfo="outstandingLoans"/>

    </div> <!-- end loanColumn -->

    <div class="loanColumn">
      <div class="columnTitle">
        <h3>Originated Loans</h3>
        <v-btn @click="showLoanForm" class="addBtn">ADD NEW</v-btn>
      </div>

      <div>
        <ProgressBar v-if="loading" />
      </div>
      <Loans :loanInfo="originatedLoans"/>

    </div> <!-- end loanColumn -->

    <div v-if="showChart" class="chartDiv">
      <Chart :chartInfo="allLoans"/>
    </div>

    <div v-if="loanForm" class="chartDiv">
      <Loan
      v-on:refreshLoanList="fetchAllLoans"
      v-on:closeForm="closeLoanForm"
      />
    </div>

  </div> <!-- end wrapper div -->
</template>

<script>

import Chart from '../components/Chart.vue'
import Loans from '../components/Loans.vue'
import Loan from '../components/Loan.vue'
import ProgressBar from '../components/ProgressBar.vue'
import NavLinks from '../components/NavLinks.vue'

export default {
  name: 'dashboard',
  mounted () {
    this.fetchAllLoans()
  },
  data: () => ({
    valid: false,
    showChart: true,
    loanForm: false,
    loading: true,
    allLoans: [],
    outstandingLoans: [],
    originatedLoans: [],
    nameRules: [
      v => !!v || 'This Field is required'
    ]
  }),
  components: {
    Chart,
    Loans,
    Loan,
    ProgressBar
  },
  methods: {
    showLoanForm () {
      this.showChart = false
      this.loanForm = true
    },
    closeLoanForm: function () {
      this.showChart = true
      this.loanForm = false
    },
    fetchAllLoans () {
      this.$axios.get(`/loans/${localStorage.getItem('userId')}`)
      .then((response) => {
        // hide loading animation
        this.loading = false
        // store unfiltered data
        this.allLoans = response.data
        // filtering out for two different types of loans from the server
        this.originatedLoans = response.data.filter(item => {
          return item.isUserLoan })
        this.outstandingLoans = response.data.filter(item => {
          return item.isUserLoan === false })

      }).catch((e) => {
        console.log('something went wrong!', e)
      })
    }
  }
}
</script>

<style>
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #1c1c1c;
  }
  .loanColumn {
    margin-left: 1em;
    margin-top: 1em;
    width: 400px;
    min-width: 300px;
    height: 98vh;
    overflow: hidden;
    background-color: #484e57;
  }
  .columnTitle {
    display: flex;
    height: 50px;
    background-color: #2c2c2e;
  }
  .columnTitle h3 {
    margin-top: 0.5em;
    margin-left: 0.5em;
  }
  .columnTitle :last-child {
    margin-left: auto;
  }
  .addBtn {
    margin-right: 1em;
  }
  .chartDiv {
    margin-left: 1em;
    margin-top: 1em;
    height: 700px;
    padding: 1em;
    text-align: center;
    background-color: #f5f4f5;
  }
</style>
