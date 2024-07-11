import { reactive } from "vue";


export const store = reactive({
    movieList: [],
    apiURL: "https://api.themoviedb.org/3/movie/550?api_key=aa82b41ac075f78fad4dd2e24fa5ce20",
    searchOption: '',
});