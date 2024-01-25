const express = require("express");
const {
  getAllMovies,
  createMovie,
  getAllMoviesByGenre,
  updateMovie,
  deleteMovieById,
  getAllMoviesByRating,
  getAllMoviesByReleaseYear,
  addReviewAndRating,
  getMovieByTitle,
  getAllMoviesByActorName,
  getMoviesByDirectorName,
} = require("../../../controller/movies.controller");
const authVerification = require("../../../middleware/authVerify");
const { get } = require("mongoose");

const movieRouter = express.Router();

// Public routes
movieRouter.get("/", getAllMovies);
movieRouter.get("/rating", getAllMoviesByRating);
movieRouter.get("/:title", getMovieByTitle);
movieRouter.get("/actor/:actorName", getAllMoviesByActorName);
movieRouter.get("/director/:directorName", getMoviesByDirectorName);
movieRouter.get("/genre/:genreName", getAllMoviesByGenre);
movieRouter.get("/release-year", getAllMoviesByReleaseYear);

// Private routes
movieRouter.post("/", authVerification, createMovie);
movieRouter.post("/:movieId", updateMovie);
movieRouter.delete("/:movieId", deleteMovieById);
movieRouter.post("/:movieId/rating", addReviewAndRating);

module.exports = movieRouter;
