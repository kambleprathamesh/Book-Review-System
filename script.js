document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const review = document.getElementById('review').value;

        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `
            <h3>${title} by ${author}</h3>
            <p>${review}</p>
        `;

        reviewList.appendChild(reviewItem);

        // Clear the form
        reviewForm.reset();
    });
});
