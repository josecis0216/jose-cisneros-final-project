<template>
    <v-container class="formInput">
    <v-row>
      <v-col cols="6">
        <h2>Contact Us</h2>
        <p>Use the form to get in contact with us about updates.</p>
      </v-col>
      <v-col cols="6" justify-center>
        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>



        <v-btn
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>
      </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        v => /^[a-zA-Z]+$/.test(v) || 'Name must contain letters not numbers', 
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
  .formInput {
    margin-top: 50px;
  }
</style>>


