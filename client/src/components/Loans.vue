<template>
  <div>
    <div
    class="loanCardDiv"
    v-for="Loan in loanInfo" v-bind:key="Loan.Id">
        <div>
          <h2 class="headline">{{Loan.lenderName || Loan.recipientsName}}</h2>
          <p>${{Loan.totalAmount.toFixed(2)}}</p>
          <v-btn class="infoBtn" small @click="loadIndividualLoan(Loan, $event)">Full Info</v-btn>
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
      this.$router.push({name: 'loan', params: { id: e.id }})
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
    position: relative;
  }
  h2 {
    border: 1px solid black;
  }
  p {
    font-size: 1.5em;
    width: 100px;
    border: 1px solid black;
    float: left;
  }
  .infoBtn {
    float: right;
  }

</style>
