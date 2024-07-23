document.addEventListener('DOMContentLoaded', function() {
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let backButton = document.getElementById('back');
    let seeMoreButtons = document.querySelectorAll('.seeMore');
    let carousel = document.querySelector(".carousel");
    let listHtml = document.querySelector(".carousel .list");

    nextButton.onclick = function() {
        showSlider('next');
    }

    prevButton.onclick = function() {
        showSlider('prev');
    }

    const showSlider = (type) => {
        let items = document.querySelectorAll(".carousel .list .item");
        if (type === 'next') {
            listHtml.appendChild(items[0]); // Move the first item to the end
            carousel.classList.add('next'); 
        } else if (type === 'prev') {
            listHtml.insertBefore(items[items.length - 1], items[0]); // Move the last item to the beginning
            carousel.classList.add('prev');
        }
        // Remove animation classes after the animation is done
        setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, 1000); // Adjust the timeout to match the animation duration
    }
});
