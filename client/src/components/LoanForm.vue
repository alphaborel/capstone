<template>
  <v-container align-center class="formBox">
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" @submit.prevent="createLoan">
          <h3 class="formTitle">Add a New Loan</h3>
          <v-checkbox
            light
            :label="`Are you the Lender?`"
            v-model="formInfo.isUserLoan"
          ></v-checkbox>
          <v-text-field v-if="formInfo.isUserLoan"
            light
            v-model="formInfo.recipientsName"
            :rules="nameRules"
            label="Recipients Name*"
            required
          ></v-text-field>
         <v-text-field v-if="!formInfo.isUserLoan"
           light
           v-model="formInfo.lenderName"
           :rules="nameRules"
           label="Lender Name*"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.loanNumber"
           :rules="nameRules"
           label="Loan Number*"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.totalAmount"
           :rules="nameRules"
           label="Total Amount*"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.startDate"
           :rules="nameRules"
           label="Start Date*"
           placeholder="Day/Month/Year"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.payoffDate"
           label="Expected Payoff Date"
           placeholder="Day/Month/Year"
         ></v-text-field>
         <v-textarea
          light
          box
          name="Notes"
          label="Notes"
          value=""
          v-model="formInfo.notes"
        ></v-textarea>

         <v-btn light type="submit" :disabled='!valid'>submit</v-btn>
         <v-btn @click="cancelEntry">Cancel</v-btn>

       </v-form>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const theUser = localStorage.getItem('userId')
console.log('userId', theUser)

export default {
  name: 'loanform',
  props: ['loanType'],
  data: vm => ({
    valid: false,
    formInfo: {
      lenderName: '',
      recipientsName: '',
      loanNumber: '',
      totalAmount: '',
      startDate: '',
      payoffDate: '',
      isUserLoan: vm.loanType,
      userId: theUser,
      notes: ''
    },
    nameRules: [
      v => !!v || 'This Field is required'
    ]
  }),
  methods: {
    cancelEntry () {
      this.$emit('closeForm')
    },
    createLoan () {
      this.$axios.post('/loans', this.formInfo)
        .then((response) => {
          this.$emit('closeForm')
          this.$emit('refreshLoanList')
        }).catch((e) => {
          console.log('something went wrong!', e)
        })
    }
  }
}
</script>

<style scoped>
  .formBox {
    width: 400px;
  }
  .formTitle {
    color: black;
  }
</style>
