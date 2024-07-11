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
    <div class="movieList" v-for="element in store.movieList">
        <AppCard :movie="element"/>
    </div>
</template>

<style lang="scss">

    .movieList {
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