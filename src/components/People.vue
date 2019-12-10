<template>
    <div>
        <!-- Remote DB access example -->
        <!-- Could use vue-resource, but using axios instead -->
        <v-btn @click="getPeople">Get People</v-btn>
        <v-list>
          <v-list-item 
          v-for="(person, index) in people" :key="index">
          <v-list-item-content>
               <p> {{person.name}}&nbsp;{{ person.surname }} </p>
               <p> {{ person.gender }}</p>
          </v-list-item-content>  
            <!-- <li v-for="(person,index) in people" :key='index'>
               <p> {{person.surname}},&nbsp;{{ person.name }} </p>
               <p> {{ person.gender }}</p>
               <p> {{index}} </p>
            </li> -->
          </v-list-item>
        </v-list>
    </div>
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