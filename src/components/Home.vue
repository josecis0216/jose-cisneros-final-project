<template>
  <v-app>
      <h2>Choose a position</h2>
      <app-header></app-header>
      <hr>
      <div class="form-group">
        <label>Username</label>
        <input class="form-control" type="text" v-model="user.username">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="text" v-model="user.email">
      </div>
      <button class="btn btn-primary" @click="submit">Submit</button>
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
        }
  }),
  methods: {
    submit() {
      console.log(this.user);
      this.$http.post('https://vuejs-http-ecf72.firebaseio.com/data.json',this.user)
      .then(response => {
          console.log(reponse);
        }, error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
  body {
    margin: 0 25 0 25;
  }
</style>
