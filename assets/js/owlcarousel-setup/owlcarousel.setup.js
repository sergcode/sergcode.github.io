$(document).ready(function() {
    var owl = $('.owl-carousel');
    var arrowPrev = '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.28999 11.2887C6.67999 10.8987 6.67999 10.2687 6.28999 9.87874L2.40999 5.99874L6.28999 2.11874C6.67999 1.72874 6.67999 1.09874 6.28999 0.708741C5.89999 0.318741 5.26999 0.318741 4.87999 0.708741L0.289989 5.29874C-0.100011 5.68874 -0.100011 6.31874 0.289989 6.70874L4.87999 11.2987C5.25999 11.6787 5.89999 11.6787 6.28999 11.2887Z" fill="#1A1A1A"/></svg>';
    var arrowNext = '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.289998 0.709999C-0.100002 1.1 -0.100002 1.73 0.289998 2.12L4.17 6L0.289998 9.88C-0.100002 10.27 -0.100002 10.9 0.289998 11.29C0.679998 11.68 1.31 11.68 1.7 11.29L6.29 6.7C6.68 6.31 6.68 5.68 6.29 5.29L1.7 0.699999C1.32 0.319999 0.679998 0.319999 0.289998 0.709999Z" fill="#1A1A1A"/></svg>';
    var prev = '<span aria-label="Previous">' + arrowPrev + '</span>';
    var next = '<span aria-label="Next">' + arrowNext + '</span>';

    owl.owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: [prev, next],
        margin: 24,
        mouseDrag: false,
        smartSpeed: 1000,
        touchDrag: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            640: {
                items: 3
            },
            1045: {
                items: 4
            }
        }
    });
});
