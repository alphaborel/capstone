<template>
  <v-container align-center>
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" @submit.prevent="createLoan">
         <v-text-field
           light
           v-model="lenderName"
           :rules="nameRules"
           label="Lender Name"
           required
         ></v-text-field>
         <v-text-field
           light
           v-model="totalAmount"
           :rules="nameRules"
           label="Total Amount"
           required
         ></v-text-field>
         <v-btn
           :disabled="!valid"
           type="submit">
           submit
         </v-btn>
         <v-btn @click="cancelEntry">Cancel</v-btn>
       </v-form>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'loan',
  mounted () {

  },
  data: () => ({
    valid: false,
    lenderName: '',
    totalAmount: '',
    startDate: '',
    payoffDate: '',
    nameRules: [
      v => !!v || 'Name is required'
    ]
  }),
  // component form methods
  methods: {
    cancelEntry () {
      this.$emit('closeForm')
    }
  }
}
</script>
