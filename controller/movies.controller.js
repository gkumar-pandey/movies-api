const Movie = require("../model/movies.modal");

// send all movies
const readAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    if (allMovies) {
      res.status(200).json({ data: { movies: allMovies } });
    } else {
      res.status(404).json({ error: "Movies not found" });
    }
  } catch (err) {
    throw err;
  }
};

// send movie by title
const readMovieByTitle = async (req, res) => {
  const movieTitle = req.params.title;

  try {
    const movie = await Movie.findOne({ title: movieTitle });
    if (movie) {
      res.status(200).json({ data: { movie: movie } });
    } else {
      res.status(404).json({ error: "Movie not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

// Read movie by actor name
const readMovieByActorName = async (req, res) => {
  const actorName = req.params.actorName;
  try {
    const moviesOfActor = await Movie.find({ actors: actorName });
    if (moviesOfActor) {
      res.status(201).json({ data: { movies: moviesOfActor } });
    } else {
      res.status(404).json({ error: "Movies not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server Error!" });
    throw error;
  }
};

// Read movies by director name
const readMoviesByDirectorName = async (req, res) => {
  const directorName = req.params.direacorName;
  try {
    const movies = await Movie.find({ director: directorName });
    if (movies) {
      res.status(201).json({ data: { movies: movies } });
    } else {
      res.status(404).json({ error: "Movies not found!" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error!",
    });
    throw error;
  }
};

// create a movie
const createMovie = async (req, res) => {
  const movie = req.body;
  try {
    const newMovie = new Movie({
      ...movie,
    });
    const savedMovie = await newMovie.save();
    if (savedMovie) {
      res.status(201).json({ data: { movies: savedMovie } });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    throw err;
  }
};

// Read movies by genre
const readMoviesByGenere = async (req, res) => {
  const genreName = req.params.genreName;
  try {
    const movies = await Movie.find({ genre: genreName });
    if (movies) {
      res.status(200).json({ data: { movies: movies } });
    } else {
      res.status(404).json({ error: "Movies not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// update movie by id
const updateMovie = async (req, res) => {
  const updateDetails = req.body;
  const movieId = req.params.movieId;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, updateDetails, {
      new: true,
    });
    if (updatedMovie) {
      res.status().json({ data: { movie: updateMovie } });
    } else {
      res.status(404).json({ error: "Movie not find" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

// delete movie by id
const deleteMovieById = async (req, res) => {
  const movieId = req.params.movieId;
  try {
    const movies = await Movie.findByIdAndDelete(movieId);
    if (movies) {
      res
        .status(200)
        .json({ data: { movies: movies }, message: "Movie deleted" });
    } else {
      res.status(404).json({ error: "Movie not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

// get all movies by rating
const getAllMoviesByRating = async (req, res) => {
  const movieId = req.params.movieId;
  try {
    const movies = await Movie.find({}).sort({ rating: -1 });
    res.status(200).json({ data: { movies: movies } });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

// get all movies by release year
const getAllMoviesByReleaseYear = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ releaseYear: 1 });
    res.status(200).json({ data: { movies: movies } });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

module.exports = {
  readMovieByTitle,
  createMovie,
  readAllMovies,
  readMovieByActorName,
  readMoviesByDirectorName,
  readMoviesByGenere,
  updateMovie,
  deleteMovieById,
  getAllMoviesByRating,
  getAllMoviesByReleaseYear,
};
