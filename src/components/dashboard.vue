<template>
  <div>
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
    <div>
      <dashboarduniversity v-for="data in universities "
                          :Url= "data.Url"
                          :Name= "data.Name"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import university from '../components/University.vue'
  import { actionTypes as universtiyActionTypes } from '../Store/modules/dashboardModule.js'

  export default {
    data () {
      return {
        email: ''
      }
    },
    created()  {
       this.loadUniversity()
    },
    components: {
      'dashboarduniversity' : university
    },
    methods: {
      loadUniversity () {
        let self = this
        self.$store.dispatch(universtiyActionTypes.LOAD_UNIVERSITY)
      }
    },
    computed: {
      universities () {
        return this.$store.getters.universityItems
      }
    }
  }
</script>

<style scoped>
  div {
    display: inline-block;
  }
</style>