<template>
  <div>
    <div
    class="loanCardDiv"
    v-for="Loan in loanInfo" v-bind:key="Loan.Id">
        <div>
          <h2 class="headline">{{Loan.lenderName}}</h2>
          <p>{{Loan.totalAmount}}</p>
          <a @click="loadIndividualLoan(Loan, $event)">Full Info</a>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'loans',
  props: {
    loanInfo: Array
  },
  methods: {
    loadIndividualLoan (e) {
      this.router.push({name: 'loan', params: { id: e.id }})
    }
  }
}

</script>

<style scoped>
  .loanCardDiv {
    height: 100px;
    margin: 10px;
    padding: 5px;
    color: black;
    background-color: #f5f4f5;
  }

</style>
