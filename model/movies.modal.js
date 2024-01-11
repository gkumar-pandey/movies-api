const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    releaseYear: {
      type: String,
      required: true,
    },
    genre: [
      {
        type: String,
        enum: [
          "Action",
          "Drama",
          "Comedy",
          "Romance",
          "Thriller",
          "Fantasy",
          "Sci-Fi",
          "Horror",
          "Sports",
          "Musical",
          "Other",
        ],
      },
    ],
    director: {
      type: String,
      required: true,
    },
    actors: [{ type: String }],
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "India",
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
    plot: {
      type: String,
    },
    awards: {
      type: String,
    },
    postUrl: {
      type: String,
    },
    trailerUrl: {
      type: String,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
      },
    ],
  },
  { timestamp: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
