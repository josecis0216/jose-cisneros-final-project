<!--<script>
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
</script>-->

<template>
  <v-app>
    <v-container>
        <!-- Remote DB access example -->
        <!-- Could use vue-resource, but using axios instead -->
        <v-spacer></v-spacer>
        <v-btn @click="getPeople">Get People</v-btn>
        <v-spacer></v-spacer>
        <ul>
            <li v-for="(person,index) in people" :key='index'>
               <p> {{person.surname}},&nbsp;{{ person.name }} </p>
               <p> {{ person.gender }}</p>
               <p> {{index}} </p>
            </li>
        </ul>
    </v-container>
  </v-app>
</template>

<script>
// use axios to fetch people data
import axios from 'axios'
export default {
    data() {
        return {
            people: [],
        }
    },
    methods: {
        getPeople() {
            //use pagination for multiple data calls
            axios.get('https://uinames.com/api/?amount=25&region=United States')
            .then(response => {
                //"e" means entry
               
               //this is unique to firebase
                // const objectsToArray = Object.entries(allCoursesObj).map(e => 
                // Object.assign(e[1], {key: e[0]}))
                //Don't normally need to do this if your server returns normal JSON
                // console.log(objectsToArray)
                this.people = response.data
            })
            .catch(error => console.error(error))
            .finally(()=>{
                // console.log(this.courses)
            })
        }
    }
}
</script>
