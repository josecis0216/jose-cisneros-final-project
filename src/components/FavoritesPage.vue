<!--<template>
  <v-app>
    <h2>Favorites</h2>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" sm="6">
        <v-select
          v-model="e6"
          :items="states"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          hint="Pick your favorite states"
          persistent-hint
        ></v-select>
        <v-btn @click="showArray">Show Array</v-btn>
      </v-col>
      </v-row>
    </v-container>
    <div v-for="(fav, n) in favs" v-bind:key="fav">
      <p>
        <span class="fav">{{ fav }}</span>
        <button @click="removeFav(n)">Remove</button>
      </p>
    </div>

    <p>
      <input v-model="newFav">
      <button @click="addFav">Add a Favorite</button>
    </p>
  </v-app>
</template>-->
<template>
    <div>
      <h1>Welcome :  {{ userName }}  </h1>
     <v-row>
       <v-col col="3" v-for="(favorite, index) in favoritesList[0][0]" v-bind:key="index">
       
         <v-card class="mx-auto card" max-width="300" outlinded :elevation="14" >
           <div class="spacing"></div>
            <v-img class="image" v-bind:src="`./assets/images/${favorite.image}`" > </v-img>    
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="textStyle" :title="title" >{{ favorite.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card-text :description="description"> {{ favorite.description }}  </v-card-text>
          <v-card-subtitle :dateCreated="dateCreated">   Date created: {{ favorite.dateCreated }} </v-card-subtitle>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </v-card>
      </v-col>
    </v-row>
  <v-form v-on:submit.prevent="getResult(userDate)" class="formDate">
    <input type="hidden" v-model="userDate" minlength="10" maxlength="10" >               
    <v-btn type="submit" class="submitBtn" color="white black--text" >Favorite Date</v-btn>
  </v-form>
  <v-card class="mx-auto" max-width="400">                    
    <v-img class="white--text align-end" v-bind:src="url">
      <v-card-title class="title">{{ title }} </v-card-title>
    </v-img>
      <v-card-title> Your favorite date: {{ date }} </v-card-title>
      <v-card-text class="text--primary"> {{ explanation }} </v-card-text>
  </v-card>
  <div class="spacer"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   props: ['favorite'],
   computed:{
       userDate(){
           return this.$store.getters.userDate
       },
       userName(){
           return this.$store.getters.userName
       },
        favoritesList(){
            return this.$store.getters.favoritesList
        }
   },
   data: () =>{
   return{
       city: '',
       name: '',
       explanation: '',
       url: '',
       title: '',
       dateCreated:'',
       description:'',
       favorites: favoritesList[0][0]
    }
   },
   methods: {
        getResult(city) {
            return axios.get('https://api.weatherbit.io/v2.0/current?city=Kiev,UA&units=I&key=7ee1a2cccf514c62a5e63c60139464c0').then
            (response =>{
                this.explanation = response.data.explanation
                this.city = response.data.city
                this.url = response.data.url
                this.title = response.data.title
                console.log(response)
            
            }).catch(error => console.log(error))
        },
    } 
}
</script>

 <!--<script>

  export default {
    data: () => ({
    favs: [],
    newFav: null,
    e6: [],
    e7: [],
    states: [
      'Alabama', 'Alaska', 'American Samoa', 'Arizona',
      'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'District of Columbia', 'Federated States of Micronesia',
      'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
      'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada',
      'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
      'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
      'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
    ],
  }),
  mounted() {
    if (localStorage.getItem('favs')) {
      try {
        this.favs = JSON.parse(localStorage.getItem('favs'));
      } catch(e) {
        localStorage.removeItem('favs');
      }
    }
  },
  methods: {
    showArray() {
      console.log(e6);
    },
    addFav() {
      // ensure they actually typed something
      if (!this.newFav) {
        return;
      }

      this.favs.push(this.newFav);
      this.newFav = '';
      this.saveFavs();
    },
    removeFav(x) {
      this.favs.splice(x, 1);
      this.saveFavs();
    },
    saveFavs() {
      const parsed = JSON.stringify(this.favs);
      localStorage.setItem('favs', parsed);
    },
  }
}

</script>-->