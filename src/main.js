const thumbnails = document.querySelectorAll('.thumbnails');
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const mainImage = document.querySelector('.starbucks');
        const mainImageSource = thumbnail.attributes.id.value;
        mainImage.src = `./src/assets/${mainImageSource}.png`;
        
        const circle = document.querySelector('.circle');
        const circleColor = thumbnail.getAttribute('data-color');
        circle.style.background = circleColor;

        const spanText = document.querySelector('span');
        const spanTextColor = thumbnail.getAttribute('data-color');
        spanText.style.color = spanTextColor;

    })
})