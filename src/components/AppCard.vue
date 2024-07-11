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
    <div class="card">
        <span :value="movie.title">{{ movie.title }}</span>
        <span :value="movie.original_title">{{ movie.original_title }}</span>
        <span :value="movie.original_language">{{ movie.original_language }}</span>
    </div>
</template>

<style lang="scss">

    .card {
        display: flex;
        flex-direction: column;
    }

</style>