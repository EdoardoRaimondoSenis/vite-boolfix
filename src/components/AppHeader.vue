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
            },
            handleEnterKey() {
                this.$emit('search');
            },
        }
    }

</script>

<template>
    <header>
        <h1>BoolFlix</h1>
        <div>
            <input @keydown.enter.prevent="handleEnterKey" v-model="store.searchOption" type="text" placeholder="Scrivi un film o Serie TV">
            <button @click.prevent="$emit('search')">Search</button>
            <button @click.prevent="resetInput">Reset</button>
        </div>
    </header>
</template>

<style lang="scss">

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 6rem;
        background-color: black;
        margin-bottom: 1rem;

        h1 {
            padding: 1rem 3rem;
            font-size: 40px;
            color: red;
        }

        div {
            padding: 0 3rem;

            input {
                padding: 0 3rem;
                margin: 0 1rem;
                height: 2rem;
            }

            button {
                margin: 0 0.2rem;
                padding: 0.5rem;
                border-style: none;
                border-radius: 5px;

            }
        }

    }

</style>