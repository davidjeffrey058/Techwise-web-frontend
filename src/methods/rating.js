
const rating = (totalRating, numOfReviews) => {
    if (numOfReviews === 0) return 0.0;
    return (totalRating / numOfReviews).toFixed(2);
}

export default rating;






