<script>

import { store } from '../store';

    export default {
        name: 'AppCard',
        props: ['movie'],
        data() {
            return {
                store
            }
        }
    }

</script>

<template>
    <div>
        <span v-for="element in movie.movieList" :value="element.title">{{ element.title }}</span>
        <span v-for="element in movie.movieList" :value="element.original_title">{{ element.original_title }}</span>
        <span v-for="element in movie.movieList" :value="element.original_language">{{ element.original_language }}</span>
    </div>
</template>

<style lang="scss">

</style>