import { reactive } from "vue";


export const store = reactive({
    movieList: [],
    movieURL: "https://api.themoviedb.org/3/search/movie?api_key=aa82b41ac075f78fad4dd2e24fa5ce20",
    seriesList: [],
    seriesURL: "https://api.themoviedb.org/3/search/tv?api_key=aa82b41ac075f78fad4dd2e24fa5ce20",
    searchOption: '',
});