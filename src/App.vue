<script>
import AppCard from './components/AppCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store'


  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppCard
    },

    data() {
      return {
        store
      }
    },
    
  }

</script>

<template>
  <AppHeader/>
  <main>
    <AppMain/>
  </main>
</template>

<style lang="scss">
@use './style/general.scss'

</style>
