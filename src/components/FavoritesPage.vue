<template>
  <div>
    <v-container>
      <h2>Favorites</h2>
      <v-row align="center">
        <v-col cols="12" sm="6">
        <v-select
          v-model.lazy="favs"
          :items="states"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          hint="Pick your favorite states"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="6">
    <div v-for="(fav, n) in favs" v-bind:key="n">
      <p>
        <span class="fav">{{ fav }}  </span>
        <v-btn @click="removeFav(n)">Remove</v-btn>
      </p>
    </div>
    <!-- <div v-for="fav in favs" v-bind:key="fav">
      <v-btn @click="getData(fav)">Get Favorite data</v-btn>
    </div> -->
    </v-col>
    </v-row>
    </v-container>
    <!-- <p>
      <input v-model="favs">
    </p> -->
    <div 
      v-for="(weather, n) in info" v-bind:key="n"
      class="weather"
    >
    {{ weather.temp }}  
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
    info: null,
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
      axios
      .get('https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=7ee1a2cccf514c62a5e63c60139464c0')
      .then(response => {
        this.info = response.data
      })
    if (localStorage.getItem('favs')) {
      try {
        this.favs = JSON.parse(localStorage.getItem('favs'));
      } catch(e) {
        localStorage.removeItem('favs');
      }
    }
  },
  methods: {
    // getData(fav) {
    //   axios
    //   .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=7ee1a2cccf514c62a5e63c60139464c0`)
    // },
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
    }
  }
}
</script>

