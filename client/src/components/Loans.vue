
<template>
  <div>
    <Loan v-for="(Loan, index) in loanInfo" v-bind:key="Loan.Id" :Loan="Loan"/>
  </div>
</template>

<script>
import Loan from './Loan.vue'

export default {
  components: {
    Loan
  },
  name: 'loans',
  data () {
  return {
     loan:[{ show:false}, { show:false}, { show:false}, { show:false}]
    }
  },
  props: {
    loanInfo: Array
  },
  methods: {
    loadIndividualLoan (e) {
      this.$router.push({name: 'loanview', params: { id: e.id }})
    },
    deleteLoan (e) {
      this.$axios.delete(`/loans/${e.id}`)
        .then((response) => {
          this.$emit('refreshAfterDelete')
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
