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


