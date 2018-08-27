<template>
  <v-container align-center class="formBox">
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" @submit.prevent="createLoan">
          <h3 class="formTitle">Add a New Loan</h3>
         <v-text-field
           light
           v-model="formInfo.lenderName"
           :rules="nameRules"
           label="Lender Name"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.loanNumber"
           :rules="nameRules"
           label="Loan Number"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.totalAmount"
           :rules="nameRules"
           label="Total Amount"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.startDate"
           :rules="nameRules"
           label="Start Date"
           placeholder="Day/Month/Year"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="formInfo.payoffDate"
           :rules="nameRules"
           label="Expected Payoff Date"
           placeholder="Day/Month/Year"
         ></v-text-field>

         <v-btn type="submit">submit</v-btn>
         <v-btn @click="cancelEntry">Cancel</v-btn>

       </v-form>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'loan',
  data: () => ({
    valid: false,
    formInfo: {
      lenderName: '',
      loanNumber: '',
      totalAmount: '',
      startDate: '',
      payoffDate: '',
      userId: ''
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
        console.log(response)
      }).catch((e) => {
        console.log('something went wrong!', e)
      })
    }
  }
}
</script>

<style>

  .formBox {
    width: 400px;
  }
  .formTitle {
    color: black;
  }
</style>
