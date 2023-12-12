document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        const sr = ScrollReveal({
            duration: 1000, // Animation duration in milliseconds
            origin: 'bottom', // Origin of the animation
            distance: '30px', // Distance the element moves in the animation
            easing: 'ease-in-out', // Easing function
            reset: true // Reset the animation on each reveal
        });
    
        // Add the animation to the element with the 'animated-element' class
        sr.reveal('.fade-up-hero');
        
    }, 2000);

    const lf = ScrollReveal({
        duration: 1000, // Animation duration in milliseconds
        origin: 'left', // Origin of the animation
        distance: '30px', // Distance the element moves in the animation
        easing: 'ease-in-out', // Easing function
        reset: true // Reset the animation on each reveal
    });

    // Add the animation to the element with the 'animated-element' class
    lf.reveal('.fade-left');


    const rf = ScrollReveal({
        duration: 1000, // Animation duration in milliseconds
        origin: 'right', // Origin of the animation
        distance: '30px', // Distance the element moves in the animation
        easing: 'ease-in-out', // Easing function
        reset: true // Reset the animation on each reveal
    });

    // Add the animation to the element with the 'animated-element' class
    rf.reveal('.fade-right');

    const tp = ScrollReveal({
        duration: 1000, // Animation duration in milliseconds
        origin: 'top', // Origin of the animation
        distance: '30px', // Distance the element moves in the animation
        easing: 'ease-in-out', // Easing function
        reset: true // Reset the animation on each reveal
    });

    // Add the animation to the element with the 'animated-element' class
    tp.reveal('.fade-top');

    const bt = ScrollReveal({
        duration: 1000, // Animation duration in milliseconds
        origin: 'bottom', // Origin of the animation
        distance: '30px', // Distance the element moves in the animation
        easing: 'ease-in-out', // Easing function
        reset: true // Reset the animation on each reveal
    });

    // Add the animation to the element with the 'animated-element' class
    bt.reveal('.fade-bottom');
   
});
