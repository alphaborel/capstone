<template>
  <div class="background">
  <v-container align-center class="formBox">
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" @submit.prevent="updateLoan">
          <h2 class="formTitle">View and Update a Loan</h2>
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

        <v-alert
          v-model="success"
          type="success"
          >
            Update Successful!
        </v-alert>

         <v-btn light type="submit" :disabled='!valid'>Update</v-btn>
         <v-btn @click="cancelEntry">Cancel</v-btn>

       </v-form>
     </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
const theUser = localStorage.getItem('userId')

export default {
  name: 'loanview',
  created () {
      this.$axios.get(`/loan/loan/${this.$route.params.id}`)
      .then((response) => {
        this.formInfo = response.data[0]
      }).catch((e) => {
        console.log('something went wrong!', e)
      })
    },
  data: () => ({
    valid: false,
    success: false,
    formInfo: {
      lenderName: '',
      recipientsName: '',
      loanNumber: '',
      totalAmount: '',
      startDate: '',
      payoffDate: '',
      isUserLoan: '',
      userId: theUser,
      notes: ''
    },
    nameRules: [
      v => !!v || 'This Field is required'
    ]
  }),
  methods: {
    cancelEntry () {
      this.$router.push('/dashboard')
    },
    updateLoan () {
      this.$axios.patch(`/loans/${this.$route.params.id}`, this.formInfo)
      .then((response) => {
        this.updateSuccess()
      }).catch((e) => {
        console.log('something went wrong!', e)
      })
    },
    updateSuccess () {
      this.success = true
      setTimeout(this.successWait, 3000)
    },
    successWait (){
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
  .background {
    background-color: white;
    text-align: center;
    margin: 0 auto;
    width: 600px;
  }
  .formTitle {
    color: black;
  }
</style>
