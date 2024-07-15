<script>

import { store } from '../store';
import italianFlag from '../assets/icons8-italian-flag-48.png';
import britishFlag from '../assets/icons8-british-flag-48.png';
import frenchFlag from '../assets/france.jpeg';
import germanFlag from '../assets/deutsch.jpeg';

    export default {
        name: 'AppCard',
        props: [
            'movie',
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
            backdrop(movie) {
                return movie.backdrop_path ? `${store.imgURL}${movie.backdrop_path}` : '';
            },
            backdropImageUrl() {
                return this.backdrop(this.movie);
            },
            convertToFiveScale(vote) {
                const roundedVote = Math.round(vote);
                return Math.round((roundedVote / 10) * 5);
            },
            generateStars(vote) {
                const starCount = this.convertToFiveScale(vote);
                return Array(starCount).fill(0); // Crea un array con `starCount` elementi
            }
        },
        
    }

</script>

<template>

    <div class="card">
        <img :src="backdropImageUrl()" alt="">
        <span :value="movie.title"><strong>Titolo: </strong>{{ movie.title }}</span>
        <span :value="movie.original_title"><strong>Titolo Originale: </strong>{{ movie.original_title }}</span>
        <div>
            <template v-if="getFlag(movie.original_language)">
                <img class="imgFlag" :src="getFlag(movie.original_language)">
            </template>
            <template v-else>
                <span><strong>Lingua: </strong>{{ movie.original_language }}</span>
            </template>
        </div>
        <div>
            <i v-for="(star, index) in generateStars(movie.vote_average)" :key="index" class="fa-solid fa-star"></i>
        </div>
    </div>
    
</template>

<style lang="scss">

    .card {
        display: flex;
        flex-direction: column;
    }

    .imgFlag {
        margin: 1rem 0;
        width: 40px;
        border-radius: 5px;
    }

</style>