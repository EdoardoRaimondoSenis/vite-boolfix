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
    <div class="resultList" v-for="element in store.movieList">
        <AppCard :movie="element"/>
    </div>
    <div class="resultList" v-for="element in store.seriesList">
        <AppCard :series="element"/>
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