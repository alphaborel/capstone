<template>

  <div class="wrapper">
    <div class="loanColumn">
      <div class="columnTitle">
        <h3>Money Loaned Out</h3>
        <v-btn class="addBtn">ADD NEW</v-btn>
      </div>
    </div>
    <div class="loanColumn">
      <div class="columnTitle">
        <h3>Money Owed</h3>
        <router-link :to="{name: 'loan' }">
          <v-btn class="addBtn">ADD NEW</v-btn>
        </router-link>

      </div>
      <Loans :loanInfo="loans" />
    </div>

    <div class="chartDiv">
      <Chart :loanInfo="loans"/>
    </div>

    <!-- form experiment -->
    <v-form ref="form" v-model="valid" @submit.prevent="createLoan">
     <v-text-field
       v-model="loan.lenderName"
       :rules="nameRules"
       label="Lender Name"
       required
     ></v-text-field>
     <v-btn
       :disabled="!valid"
       type="submit"
     >
       submit
     </v-btn>
   </v-form>

  </div> <!-- end wrapper div -->
</template>

<script>

import Chart from '../components/Chart.vue'
import Loans from '../components/Loans.vue'

export default {
  name: 'dashboard',
  mounted () {

  },
  data: () => ({
    valid: false,
    loan: {
      lenderName: '',
      totalAmount: '99',
      startDate: '5675',
      payoffDate: '657'
    },
    nameRules: [
      v => !!v || 'Name is required'
    ]
  }),
  components: {
    Chart,
    Loans
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
