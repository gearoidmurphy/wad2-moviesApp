class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.WatchList = [];

    }

    add(movie) {
        this.favoriteMovies.push(movie);
    }

    addWatchList(movie) {
        this.WatchList.push(movie);
    }

    getAll() {
        return this.favoriteMovies;
    }
}

export default new StubAPI();