<script>
import { store } from '../store.js';
import AppCardSeries from './AppCardSeries.vue';
import AppCardMovies from './AppCardMovies.vue';


    export default {
        name: 'AppMain',
        components: {
            AppCardMovies,
            AppCardSeries
        },
        data() {
            return {
                store
            }
        }
    }

</script>

<template>
    <div class="resultList" v-for="element in store.movieList">
        <AppCardMovies :movie="element"/>
    </div>
    <div class="resultList" v-for="element in store.seriesList">
        <AppCardSeries :series="element"/>
    </div>
</template>

<style lang="scss">

    .resultList {
        display: flex;
        justify-content: center;
        width: calc(100% / 4 - 4rem);
        height: 25rem;
        margin: 1rem 2rem;
        text-align: center;
        background-color: bisque;
        border-radius: 20px;
        box-shadow: 5px 5px lightcoral;
    }

</style>