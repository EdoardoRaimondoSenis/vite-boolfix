<script>

import { store } from '../store';
import italianFlag from '../assets/icons8-italian-flag-48.png';
import britishFlag from '../assets/icons8-british-flag-48.png';
import frenchFlag from '../assets/france.jpeg';
import germanFlag from '../assets/deutsch.jpeg';

    export default {
        name: 'AppCard',
        props: [
            'series'
        ],
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
            },
            backdrop(series) {
                return series.backdrop_path ? `${store.imgURL}${series.backdrop_path}` : '';
            },
            backdropImageUrl() {
                return this.backdrop(this.series);
            }
        }
        
    }

</script>

<template>

    <div class="card">
        <img :src="backdropImageUrl()" alt="">
        <span :value="series.title">{{ series.title }}</span>
        <span :value="series.original_name">{{ series.original_name }}</span>
        <div>
            <template v-if="getFlag(series.original_language)">
                <img class="imgFlag" :src="getFlag(series.original_language)">
            </template>
            <template v-else>
                <span>{{ series.original_language }}</span>
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