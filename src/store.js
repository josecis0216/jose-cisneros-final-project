import Vue from "vue";
import Vuex from "vuex";

<<<<<<< HEAD
import service from "@/services/services.js";
=======
import service from '@/services/services.js'
>>>>>>> 78b1632a68c944e57523c573fd31a65effa4e539

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    dataIsRecived: false
  },
  mutations: {
    UPDATE_WEATHER(state) {
      service
        .getWeather()
        .then(response => {
          state.weather = response.data.data[0];
          state.dataIsRecived = true;
          console.log(response);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  },
  actions: {
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    }
  }
})
