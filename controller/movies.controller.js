const Movie = require("../model/movies.modal");
const { getAverageRating } = require("../utils");

/**
 * @route GET /api/v1/movies
 * @description Get all movies
 * @param {Object} req - Express request object (not used in this function).
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    if (!allMovies || allMovies.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "No movies found." });
    }
    res.status(200).json({ success: true, movies: allMovies });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error: err });
    throw err;
  }
};

/**
 * @route GET /api/v1/movies/:title
 * @description Get a movie by title
 * @param {Object} req - Express request object containing the movie title in params.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getMovieByTitle = async (req, res) => {
  const movieTitle = req.params.title;
  try {
    const movie = await Movie.findOne({
      title: { $regex: new RegExp(movieTitle, "i") },
    });
    if (!movie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found." });
    }
    res.status(200).json({ success: true, movie });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
    throw error;
  }
};

/**
 * @route GET /api/v1/movies/actor/:actorName
 * @description Retrieve all movies by actor name
 * @param {Object} req - Express request object containing the actor name in params.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllMoviesByActorName = async (req, res) => {
  const { actorName } = req.params;
  try {
    const moviesOfActor = await Movie.find({ actors: actorName });
    if (!moviesOfActor || moviesOfActor.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Movies not found." });
    }
    res.status(200).json({ success: true, movies: moviesOfActor });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route GET /api/v1/movies/director/:directorName
 * @description retrieve all movies by director name
 * @param {Object} req Express request object contains director name in params.
 * @param {Object} res Express response object contains array of movie or error message
 * @returns {Void}
 */
const getMoviesByDirectorName = async (req, res) => {
  const { directorName } = req.params;
  try {
    const movies = await Movie.find({
      director: { $regex: new RegExp(directorName, "i") },
    });

    if (!movies || movies.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Movies not found." });
    }
    res.status(200).json({ success: true, movies: movies });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/movies
 * @description Create a new movie
 * @param {Object} req - Express request object containing the movie details in the body.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const createMovie = async (req, res) => {
  const movie = req.body;
  try {
    const newMovie = new Movie({
      ...movie,
    });
    const savedMovie = await newMovie.save();
    if (!savedMovie) {
      return res
        .status(404)
        .json({ message: "Movie not saved", success: false });
    }

    res.status(201).json({
      success: true,
      message: "Movie saved successfully.",
      movie: savedMovie,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route GET /api/v1/movies/genre/:genreName
 * @description Get all movies by genre
 * @param {Object} req - Express request object containing the genre name in params.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllMoviesByGenre = async (req, res) => {
  const { genreName } = req.params;
  try {
    const movies = await Movie.find({
      genre: { $regex: new RegExp(genreName, "i") },
    });

    if (!movies || movies.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Movies not found." });
    }

    res.status(200).json({ success: true, movies: movies });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/movies/:movieId
 * @description Update a movie by ID
 * @param {Object} req - Express request object containing the movie ID in params and update data in body.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const updateMovie = async (req, res) => {
  const updateData = req.body;
  const { movieId } = req.params;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, updateData, {
      new: true,
    });

    if (!updateData) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not updated." });
    }
    res.status(200).json({
      success: true,
      movie: updatedMovie,
      message: "Movie updated successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

/**
 * @route DELETE /api/v1/movies/:movieId
 * @description Delete a movie by ID
 * @param {Object} req - Express request object containing the movie ID in params.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const deleteMovieById = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movies = await Movie.findByIdAndDelete(movieId);
    if (!movies) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    res.status(200).json({
      message: "Movie deleted successfully",
      success: true,
      movies: movies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

/**
 * @route GET /api/v1/movies/rating
 * @description Get all movies sorted by rating in descending order
 * @param {Object} req - Express request object (not used in this function).
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllMoviesByRating = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ rating: -1 });

    if (!movies) {
      return res
        .status(404)
        .json({ success: false, message: "Movies not found" });
    }
    res.status(200).json({ movies: movies, success: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
    throw error;
  }
};

/**
 * @route GET /api/v1/movies/release-year
 * @description Get all movies sorted by release year in ascending order
 * @param {Object} req - Express request object (not used in this function).
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllMoviesByReleaseYear = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ releaseYear: 1 });
    if (!movies) {
      return res
        .status(404)
        .json({ message: "Movies not found", success: false });
    }
    res.status(200).json({ success: true, movies: movies });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/movies/:movieId/reviews
 * @description Add a review and update rating for a movie
 * @param {Object} req - Express request object containing movie ID in params, and review details in body.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const addReviewAndRating = async (req, res) => {
  const { movieId } = req.params;
  const { rating, userId, reviewText } = req.body;
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res
        .status(404)
        .json({ message: "Movie not found", success: false });
    }
    const newReview = {
      user: userId,
      rating,
      text: review,
    };
    // Add review to the review array and save
    movie.reviews.push(newReview);
    const averageRating = getAverageRating(movie.reviews);
    movie.rating = averageRating;
    await movie.save();
    const updatedMovie = await Movie.findById(userId).populate({
      path: "reviews",
      populate: {
        path: "userId",
        select: "username profilePicture",
      },
    });

    res.status(200).json({
      success: true,
      message: "Review and rating added",
      movie: updatedMovie,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieByTitle,
  getAllMoviesByActorName,
  getMoviesByDirectorName,
  getAllMoviesByGenre,
  updateMovie,
  deleteMovieById,
  getAllMoviesByRating,
  getAllMoviesByReleaseYear,
  addReviewAndRating,
};
