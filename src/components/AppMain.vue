<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';


    export default {
        name: 'AppMain',
        components: {
            AppCard
        },
        data() {
            return {
                store
            }
        }
    }

</script>

<template>
    <div v-for="element in store.movieList.results" class="movieList">
        <AppCard :movie="element"/>
    </div>
</template>

<style lang="scss">

</style>