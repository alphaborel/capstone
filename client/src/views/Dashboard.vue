<template>

  <div class="wrapper">
    <div class="loanColumn">
      <div class="columnTitle">
        <h3>Outstanding Loans</h3>
          <v-btn @click="showLoanForm" class="addBtn">ADD NEW</v-btn>
      </div>
    </div>

    <div class="loanColumn">
      <div class="columnTitle">
        <h3>Originated Loans</h3>
          <v-btn @click="showLoanForm" class="addBtn">ADD NEW</v-btn>
      </div>
      <Loans />
    </div>

    <div v-if="showChart" class="chartDiv">
      <Chart />
    </div>

    <div v-if="loanForm" class="chartDiv">
      <Loan v-on:closeForm="closeLoanForm"/>
    </div>

  </div> <!-- end wrapper div -->
</template>

<script>

import Chart from '../components/Chart.vue'
import Loans from '../components/Loans.vue'
import Loan from '../components/Loan.vue'

export default {
  name: 'dashboard',
  mounted () {

  },
  data: () => ({
    valid: false,
    showChart: true,
    loanForm: false,
    loan: {
      lenderName: '',
      totalAmount: '',
      startDate: '',
      payoffDate: ''
    },
    nameRules: [
      v => !!v || 'Name is required'
    ]
  }),
  components: {
    Chart,
    Loans,
    Loan
  },
  methods: {
    showLoanForm () {
      this.showChart = false
      this.loanForm = true
    },
    closeLoanForm: function () {
      this.showChart = true
      this.loanForm = false
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
    height: 425px;
    padding: 1em;
    text-align: center;
    background-color: #f5f4f5;
  }

</style>
