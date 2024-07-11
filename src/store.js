import { reactive } from "vue";


export const store = reactive({
    movieList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=aa82b41ac075f78fad4dd2e24fa5ce20",
    movieLanguages: [],
    apiLanguages: "https://api.themoviedb.org/3/configuration/languages?api_key=aa82b41ac075f78fad4dd2e24fa5ce20",
    apiMovie: '',
    searchOption: '',
});