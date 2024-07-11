<script>

import AppCard from './components/AppCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js'
import axios from 'axios';


  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppCard
    },

    methods: {
      getMovie() {
        let searchURL = store.apiURL
        if (store.searchOption != '') {
          searchURL += `&query=${store.searchOption}`
        }
        axios.
            get(searchURL)
            .then(element => {
              console.log(element.data);
              store.movieList = element.data;
            })
            .catch(err => {
              console.log(err);
            })
        }
    }

  }

</script>

<template>
  <AppHeader @search="getMovie"/>
  <main>
    <AppMain/>
  </main>
</template>

<style lang="scss">
@use './style/general.scss'

</style>
