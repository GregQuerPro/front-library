window.addEventListener('DOMContentLoaded', () => {

    const carousel = document.querySelector('.carousel');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let translate = 0;
    
    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
    //   console.log(currentTranslate);
      
      startPosition = e.clientX - currentTranslate;
      carousel.style.transition = 'none';
    });
    
    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      console.log();
      if (e.clientX - startPosition <= 0) {    
          translate = e.clientX - startPosition;
        carousel.style.transform = `translateX(${translate}px)`;
    }
    });
    
    carousel.addEventListener('mouseup', () => {
      isDragging = false;

      currentTranslate = translate;
      translate = 0
    
    //   carousel.style.transition = 'transform 0.3s ease-in-out';
    //   carousel.style.transform = `translateX(${currentTranslate}px)`;
    });
    
    // carousel.addEventListener('mouseleave', () => {
    //   isDragging = false;
    //   carousel.style.transition = 'transform 0.3s ease-in-out';
    //   carousel.style.transform = `translateX(${currentTranslate}px)`;
    // });
    
})