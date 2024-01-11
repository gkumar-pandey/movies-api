const express = require("express");
const {
  readAllMovies,
  createMovie,
  readMovieByTitle,
  readMovieByActorName,
  readMoviesByDirectorName,
  readMoviesByGenere,
  updateMovie,
  deleteMovieById,
  getAllMoviesByRating,
  getAllMoviesByReleaseYear,
  addRating,
} = require("../controller/movies.controller");

const movieRouter = express.Router();

movieRouter.get("/", readAllMovies);
movieRouter.get("/:title", readMovieByTitle);
movieRouter.post("/", createMovie);
movieRouter.get("/actor/:actorName", readMovieByActorName);
movieRouter.get("/director/:directorName", readMoviesByDirectorName);
movieRouter.get("/genre/:genreName", readMoviesByGenere);
movieRouter.post("/:movieId", updateMovie);
movieRouter.delete("/:movieId", deleteMovieById);
movieRouter.get("/rating", getAllMoviesByRating);
movieRouter.get("/release-year", getAllMoviesByReleaseYear);
movieRouter.post("/:movieId/rating", addRating);

module.exports = movieRouter;
