<template>
  <v-app>
      <app-header></app-header>
      <hr>
      <v-row justify="space-around">
        <v-col cols="6">
          <v-form>
            <h1>Login</h1>
            <v-text-field label="Username" v-model="user.username" required></v-text-field>
            <v-text-field label ="Email" v-model="user.email" required></v-text-field>
            <v-btn @click="submit">Submit</v-btn>
            <v-btn @click="fetchData">Get Data</v-btn>
          </v-form>
        </v-col>
      </v-row>
      {{ weatherData }}
      <app-footer></app-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  data: () => ({
        user: {
          username: '',
          email: '',
        },
        weatherData: null,
  }),
  methods: {
    submit() {
      //console.log(this.user);
      this.$http.post('https://vuejs-http-ecf72.firebaseio.com/data.json', this.user)
      .then(response => {
          console.log(reponse);
        }, error => {
          console.log(error);
        });
    },
    fetchData() {
      this.$http.get('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=fb4dcfe319d28532cdcfa9ef08fc9b1a')
      .then(response => {
        return response.json();
      })
      .then(response => (this.weatherData = response))
    }
  }
}
</script>

<style scoped>
  body {
    margin: 0 25 0 25;
  }
</style>
