<template>
  <div>
    <v-card class="cardStyling">
      <div v-if="this.$store.state.dataIsRecived" class="weather-widget">
        <p class="weather-widget__city">{{ weather.city_name }}</p>
        <h2 class="weather-widget__temp">{{ weather.temp }}<span>°F</span></h2>
        <p class="weather-widget__status">{{ weather.weather.description }}</p>
        <p class="weather-widget__status">{{ weather.clouds }}</p>
      </div>
      <div v-else class="weather-widget">
        <img src="spinner.svg" alt="">
      </div>
    </v-card>
    {{ weather2.city_name }}
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: function () {
      return {
        info: null,
        weather2: []
      }
    },
    computed: {
      weather() {
        return this.$store.state.weather
      },
      created() {
      this.$store.dispatch("updateWeather");
    }
  },
  created () {
    axios
      .get('https://api.weatherbit.io/v2.0/current?city=Kiev,UA&units=I&key=7ee1a2cccf514c62a5e63c60139464c0')
      .then(response => {this.weather2 = response.data})
  }
}
</script>

<style lang="scss" scoped>
  .cardStyling {
    margin-top: 50px;
  }
  .weather-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #429EA6;
  }

  .weather-widget__city {
    font-size: 20px;
    margin: 0;
  }

  .weather-widget__temp {
    display: flex;
    align-items: flex-start;
    color: #16F4D0;
    font-size: 200px;
    font-weight: 200;
    margin: 0;

    span {
      font-size: 30px;
      font-weight: 400;
      margin-top: 35px;
    }
  }

  .weather-widget__status {
    font-size: 20px;
    margin: 0;
  }
</style>
