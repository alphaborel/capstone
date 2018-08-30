<template>
  <div>
    <div class="loanCardDiv">
      <div>
        <h2 class="headline">{{Loan.lenderName || Loan.recipientsName}}</h2>
        <p>Total Amount: <b>${{Loan.totalAmount}}</b></p>
        <p class="dateTag">Start Date: <b>{{Loan.startDate}}</b></p></br>

        <v-btn class="infoBtn" small @click="loadIndividualLoan(Loan, $event)">Full Info</v-btn>
      </div>

      <a class="deleteLink" @click="show = !show">
        <i class="material-icons">delete_forever</i>
      </a>
      <span v-show="show">
        <a @click="deleteLoan(Loan, $event)">Really Delete?</a>
      </span>

    </div>
  </div>
</template>

<script>
import EventBus from '../event-bus';

export default {
  name: 'loans',
  data() {
     return {show: false}
  },
  props: {
    Loan: Object
  },
  methods: {
    loadIndividualLoan (e) {
      this.$router.push({name: 'loanview', params: { id: e.id }})
    },
    deleteLoan (e) {
      this.$axios.delete(`/loans/${e.id}`)
        .then((response) => {
          EventBus.$emit('refreshAfterDelete')
        }).catch((e) => {
          console.log('something went wrong!', e)
        })
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
  p {
    font-size: 1em;
    float: left;
    margin-bottom: 0;
  }
  .dateTag {
    margin-left: 15px;
  }
  .infoBtn {
    float: right;
  }

</style>
