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
        let searchURL = store.movieURL;
        if (store.searchOption != '') {
          searchURL += `&query=${store.searchOption}`
        }
        
        axios.
            get(searchURL)
            .then(element => {
              store.movieList = element.data.results;
              console.log('Lista film trovati', store.movieList);
            })
            .catch(err => {
              console.log(err);
            })
        },
    },
    created() {
      this.getMovie();
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
@use './style/general.scss';

  main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10% auto;
  }

</style>
