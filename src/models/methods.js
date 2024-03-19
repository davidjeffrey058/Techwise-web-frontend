function rating(totalRating, numOfReviews) {
    if (numOfReviews === 0) return 0.0;
    return (totalRating / (numOfReviews * 5)) * 5;
}

export default rating;