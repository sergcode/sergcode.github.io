$(document).ready(function() {
    var owl = $('.owl-carousel');
    var arrow = '<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.289998 0.709999C-0.100002 1.1 -0.100002 1.73 0.289998 2.12L4.17 6L0.289998 9.88C-0.100002 10.27 -0.100002 10.9 0.289998 11.29C0.679998 11.68 1.31 11.68 1.7 11.29L6.29 6.7C6.68 6.31 6.68 5.68 6.29 5.29L1.7 0.699999C1.32 0.319999 0.679998 0.319999 0.289998 0.709999Z" fill="#1A1A1A"/></svg>';
    var prev = '<span aria-label="Previous">' + arrow + '</span>';
    var next = '<span aria-label="Next">' + arrow + '</span>';

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

// $(document).ready(function() {
//     var owl = $('.owl-carousel');
//     owl.owlCarousel({
//         margin: 10,
//         nav: true,
//         loop: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 5
//             }
//         }
//     });
// });
