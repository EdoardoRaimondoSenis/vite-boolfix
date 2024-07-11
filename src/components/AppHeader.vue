<script>
import { store } from '../store'

    export default {
        name: 'AppHeader',

        data() {
            return {
                store
            }
        },
        methods: {
            resetInput() {
                store.searchOption = '';
                this.$emit('search')
            }
        }
    }

</script>

<template>
    <header>
        <input v-model="store.searchOption" type="text">
        <button @click.prevent="$emit('search')">Search</button>
        <button @click.prevent="resetInput">Reset</button>
    </header>
</template>

<style lang="scss">

</style>