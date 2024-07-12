<script>

import { store } from '../store';
import italianFlag from '../assets/icons8-italian-flag-48.png';
import britishFlag from '../assets/icons8-british-flag-48.png';
import frenchFlag from '../assets/france.jpeg';
import germanFlag from '../assets/deutsch.jpeg';

    export default {
        name: 'AppCard',
        props: ['movie'],
        data() {
            return {
                store,
                flags: [
                    {
                        'name': 'it',
                        'flag': italianFlag
                    },
                    {
                        'name': 'en',
                        'flag': britishFlag
                    },
                    {
                        'name': 'fr',
                        'flag': frenchFlag
                    },
                    {
                        'name': 'de',
                        'flag': germanFlag
                    },
                ]
            }
        },
        methods: {
            getFlag(language) {
                const flag = this.flags.find(element => element.name === language);
                return flag ? flag.flag : null;
            }
        }
        
    }

</script>

<template>
    <div class="card">
        <span :value="movie.title">{{ movie.title }}</span>
        <span :value="movie.original_title">{{ movie.original_title }}</span>
        <div>
            <template v-if="getFlag(movie.original_language)">
                <img class="imgFlag" :src="getFlag(movie.original_language)">
            </template>
            <template v-else>
                <span>{{ movie.original_language }}</span>
                
            </template>
        </div>
    </div>
</template>

<style lang="scss">

    .card {
        display: flex;
        flex-direction: column;
    }

    .imgFlag {
        margin: 1rem;
        width: 40px;
        border-radius: 5px;
    }

</style>