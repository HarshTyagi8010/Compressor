// const work = document.querySelector(".work");
// const slider = document.querySelector(".slider");
// const firstCardWidth = slider.querySelector(".card").offsetWidth;
// const sliderChildrens = [...slider.children];
// const dots = document.querySelectorAll(".dot");

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);

// sliderChildrens.slice(-cardPerView).reverse().forEach(card => {
//     slider.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// sliderChildrens.slice(0, cardPerView).forEach(card => {
//     slider.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// slider.classList.add("no-transition");
// slider.scrollLeft = slider.offsetWidth;
// slider.classList.remove("no-transition");

// const dragStart = (e) => {
//     isDragging = true;
//     slider.classList.add("dragging");

//     startX = e.pageX;
//     startScrollLeft = slider.scrollLeft;
// }

// const dragging = (e) => {
//     if (!isDragging) return;

//     slider.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     slider.classList.remove("dragging");
// }

// const updateDots = () => {

//     let currentIndex = Math.round(slider.scrollLeft / firstCardWidth) % (sliderChildrens.length / 3);

//     if (currentIndex === 0) {
//         let changeTo = null;
//         let x_card = Math.round(slider.scrollLeft / firstCardWidth);

//         if (x_card > 9) {
//             x_card = x_card % 9;
//         }

//         changeTo = x_card / 3;

//         dots.forEach((dot, index) => {
//             if (index === changeTo - 1) {
//                 dot.classList.add("red-dot");
//                 dot.classList.remove("black-dot");
//             } else {
//                 dot.classList.add("black-dot");
//                 dot.classList.remove("red-dot");
//             }
//         });
//     }
// }

// const infiniteScroll = () => {

//     if (slider.scrollLeft === 0) {
//         slider.classList.add("no-transition");
//         slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
//         slider.classList.remove("no-transition");
//     }

//     else if (Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
//         slider.classList.add("no-transition");
//         slider.scrollLeft = slider.offsetWidth;
//         slider.classList.remove("no-transition");
//     }

//     updateDots();

//     clearTimeout(timeoutId);
//     if (!work.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if (window.innerWidth < 800 || !isAutoPlay) return;

//     timeoutId = setTimeout(() => {
//         slider.scrollLeft += firstCardWidth;
//         updateDots();
//     }, 2500);
// }

// updateDots();

// autoPlay();

// slider.addEventListener("mousedown", dragStart);
// slider.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// slider.addEventListener("scroll", infiniteScroll);
// work.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// work.addEventListener("mouseleave", autoPlay);


// // ----------------------form-----------------------


// document.addEventListener('DOMContentLoaded', function () {
//     const formGroups = document.querySelectorAll('.form-group');

//     formGroups.forEach(formGroup => {
//         const input = formGroup.querySelector('input');

//         input.addEventListener('blur', function () {
//             const inputValue = this.value.trim();
//             const label = formGroup.querySelector('label');


//             if (inputValue !== '') {
//                 label.classList.add('filled');
//             } else {
//                 label.classList.remove('filled');
//             }
//         });
//     });


//     const closeFormBtn = document.getElementById('closeFormBtn');
//     const formContainer = document.getElementById('contactFormContainer');
//     const header = document.getElementById('header');

//     closeFormBtn.addEventListener('click', function () {
//         formContainer.style.opacity = 0;
//         formContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
//         setTimeout(() => {
//             formContainer.style.display = 'none';
//         }, 800);

//         header.style.opacity = 1;
//         header.style.filter = 'none';
//         document.body.classList.remove('no-scroll');
//     });

//     document.getElementById('showFormBtn').addEventListener('click', function () {
//         formContainer.style.display = 'block';
//         // Trigger the transition by updating opacity and scale
//         setTimeout(() => {
//             formContainer.style.opacity = 1;
//             formContainer.style.transform = 'translate(-50%, -50%) scale(1)';
//         }, 0);

//         header.style.opacity = 0.5;
//         header.style.filter = 'blur(5px)';
//         document.body.classList.add('no-scroll');
//     });

//     document.getElementById('contactForm').addEventListener('submit', function (event) {
//         event.preventDefault();

//         const form = event.target;
//         const formData = new FormData(form);

//         fetch("https://getform.io/f/bwngwera", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 "Accept": "application/json",
//             },
//         })
//             .then(response => {
//                 if (response.ok) {
//                     alert('Form submitted successfully!');
//                     form.reset();

//                     formContainer.style.opacity = 0;
//                     formContainer.style.transform = 'translate(-50%, -50%) scale(0)';
//                     setTimeout(() => {
//                         formContainer.style.display = 'none';
//                     }, 800);

//                     header.style.opacity = 1;
//                     header.style.filter = 'none';
//                     document.body.classList.remove('no-scroll');
//                 } else {
//                     alert('Form submission failed. Please try again.');
//                 }
//             })
//             .catch(() => {
//                 alert('An error occurred. Please try again.');
//             });
//     });
// });



// function changeImage(imagePath) {
//     document.getElementById('mainImage').src = imagePath;
// }

// function selectElement(element) {

//     var elements = document.querySelectorAll('.about-photos');
//     elements.forEach(function (el) {
//         el.classList.remove('selected');
//     });

//     element.classList.add('selected');
// }

// document.querySelectorAll('.about-photos').forEach(function (el) {
//     el.addEventListener('click', function () {
//         selectElement(el);
//     });
// });

// const contentArray = [
//     {
//         imagePath: 'Assets/images/image@2x.png',
//         title: 'Genderless Kei - Japan\'s Hot',
//         description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of'
//     },
//     {
//         imagePath: 'Assets/images/image.png',
//         title: 'Better Strategy & Quality',
//         description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of'
//     },
//     {
//         imagePath: 'Assets/images/image@2x.png',
//         title: 'Genderless Kei - Japan\'s Hot',
//         description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of'
//     }
// ];

// let currentIndex = 0;

// function changeImageAndContent() {
//     const mainImage = document.getElementById('mainImage');
//     const aboutPhotos = document.querySelectorAll('.about-photos');

//     mainImage.src = contentArray[currentIndex].imagePath;

//     aboutPhotos.forEach((el, index) => {
//         if (index === currentIndex) {
//             el.classList.add('selected');
//         } else {
//             el.classList.remove('selected');
//         }
//     });

//     currentIndex = (currentIndex + 1) % contentArray.length;
// }

// setInterval(changeImageAndContent, 3000);

// document.querySelectorAll('.about-photos').forEach((el, index) => {
//     el.addEventListener('click', function () {
//         currentIndex = index;
//         changeImageAndContent();
//     });
// });

// window.onload = function () {
//     changeImageAndContent();
// };



/*------------- update changes --------------------*/





// const work = document.querySelector(".work");
// const slider = document.querySelector(".slider");
// const firstCardWidth = slider.querySelector(".card").offsetWidth;
// const sliderChildrens = [...slider.children];
// const dots = document.querySelectorAll(".dot");
// const formGroups = document.querySelectorAll(".form-group");
// const closeFormBtn = document.getElementById("closeFormBtn");
// const formContainer = document.getElementById("contactFormContainer");
// const header = document.getElementById("header");
// const showFormBtn = document.getElementById("showFormBtn");
// const contactForm = document.getElementById("contactForm");

// // Variables
// let isDragging = false;
// let isAutoPlay = true;
// let startX;
// let startScrollLeft;
// let timeoutId;
// let cardPerView;
// let currentIndex = 0;
// let contentArray = [
//   {
//     imagePath: "Assets/images/image@2x.png",
//     title: "Genderless Kei - Japan's Hot",
//     description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
//   },
//   {
//     imagePath: "Assets/images/image.png",
//     title: "Better Strategy & Quality",
//     description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
//   },
//   {
//     imagePath: "Assets/images/image@2x.png",
//     title: "Genderless Kei - Japan's Hot",
//     description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
//   },
// ];

// // Functions

// // Calculate cards per view dynamically
// function calculateCardsPerView() {
//   cardPerView = Math.round(slider.offsetWidth / firstCardWidth);
// }

// // Duplicate cards for infinite scrolling
// function duplicateCards() {
//   sliderChildrens.slice(-cardPerView).reverse().forEach((card) => {
//     slider.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

//   sliderChildrens.slice(0, cardPerView).forEach((card) => {
//     slider.insertAdjacentHTML("beforeend", card.outerHTML);
//   });
// }

// // Add no-transition class to slider
// function addNoTransitionClass() {
//   slider.classList.add("no-transition");
//   slider.scrollLeft = slider.offsetWidth;
//   slider.classList.remove("no-transition");
// }

// // Drag start event
// function dragStart(e) {
//   isDragging = true;
//   slider.classList.add("dragging");

//   startX = e.pageX;
//   startScrollLeft = slider.scrollLeft;
// }

// // Dragging event
// function dragging(e) {
//   if (!isDragging) return;

//   slider.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// // Drag stop event
// function dragStop() {
//   isDragging = false;
//   slider.classList.remove("dragging");
// }

// // Update dots based on current scroll position
// function updateDots() {
//   let currentIndex = Math.round(slider.scrollLeft / firstCardWidth) % (sliderChildrens.length / 3);

//   if (currentIndex === 0) {
//     let changeTo = null;
//     let x_card = Math.round(slider.scrollLeft / firstCardWidth);

//     if (x_card > 9) {
//       x_card = x_card % 9;
//     }

//     changeTo = x_card / 3;

//     dots.forEach((dot, index) => {
//       if (index === changeTo - 1) {
//         dot.classList.add("red-dot");
//         dot.classList.remove("black-dot");
//       } else {
//         dot.classList.add("black-dot");
//         dot.classList.remove("red-dot");
//       }
//     });
//   }
// }

// // Infinite scroll functionality
// function infiniteScroll() {
//   if (slider.scrollLeft === 0) {
//     slider.classList.add("no-transition");
//     slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
//     slider.classList.remove("no-transition");
//   } else if (Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
//     slider.classList.add("no-transition");
//     slider.scrollLeft = slider.offsetWidth;
//     slider.classList.remove("no-transition");
//   }

//   updateDots();

//   clearTimeout(timeoutId);
//   if (!work.matches(":hover")) autoPlay();
// }

// // Auto-play slider
// function autoPlay() {
//   if (window.innerWidth < 800 || !isAutoPlay) return;

//   timeoutId = setTimeout(() => {
//     slider.scrollLeft += firstCardWidth; // Adjust scroll position to the next card
//     infiniteScroll(); // Call infinite scroll to handle boundary conditions (start/end)
//   }, 3000); // Change to your desired auto-play interval in milliseconds
// }

// // Initialize slider and autoplay
// function initSlider() {
//   calculateCardsPerView();
//   duplicateCards();
//   autoPlay(); // Start the auto-play on initialization

//   // Event listeners for dragging
//   slider.addEventListener("mousedown", dragStart);
//   slider.addEventListener("mousemove", dragging);
//   slider.addEventListener("mouseup", dragStop);
//   slider.addEventListener("mouseleave", dragStop);

//   // Event listener for hover stop
//   work.addEventListener("mouseenter", () => {
//     isAutoPlay = false;
//     clearTimeout(timeoutId);
//   });

//   work.addEventListener("mouseleave", () => {
//     isAutoPlay = true;
//     autoPlay();
//   });

//   // Event listener for dots click
//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       let targetScrollLeft = index * firstCardWidth * 3; // Each dot corresponds to 3 cards
//       slider.scrollLeft = targetScrollLeft;
//       updateDots();
//     });
//   });
// }

// // Initialize form handling
// function toggleFormVisibility() {
//   formContainer.classList.toggle("visible");
// }

// showFormBtn.addEventListener("click", toggleFormVisibility);
// closeFormBtn.addEventListener("click", toggleFormVisibility);

// // Initialize
// initSlider();




/---------------------second update ---------------/

// ----- Slider and Infinite Scroll ----- //

const work = document.querySelector(".work");
const slider = document.querySelector(".slider");
const firstCardWidth = slider.querySelector(".card").offsetWidth;
const sliderChildrens = [...slider.children];
const dots = document.querySelectorAll(".dot");

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);

// Duplicate cards for infinite scroll
sliderChildrens.slice(-cardPerView).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
});

sliderChildrens.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML);
});

slider.classList.add("no-transition");
slider.scrollLeft = slider.offsetWidth;
slider.classList.remove("no-transition");

// Drag start event
const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
};

// Dragging event
const dragging = (e) => {
    if (!isDragging) return;
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
};

// Drag stop event
const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
};

// Update dots based on current scroll position
const updateDots = () => {
    let currentIndex = Math.round(slider.scrollLeft / firstCardWidth) % (sliderChildrens.length / 3);

    if (currentIndex === 0) {
        let changeTo = null;
        let x_card = Math.round(slider.scrollLeft / firstCardWidth);
        if (x_card > 9) {
            x_card = x_card % 9;
        }
        changeTo = x_card / 3;

        dots.forEach((dot, index) => {
            if (index === changeTo - 1) {
                dot.classList.add("red-dot");
                dot.classList.remove("black-dot");
            } else {
                dot.classList.add("black-dot");
                dot.classList.remove("red-dot");
            }
        });
    }
};

// Infinite scroll functionality
const infiniteScroll = () => {
    if (slider.scrollLeft === 0) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
        slider.classList.remove("no-transition");
    } else if (Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no-transition");
    }
    updateDots();

    clearTimeout(timeoutId);
    if (!work.matches(":hover")) autoPlay();
};

// Auto-play slider
const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;

    timeoutId = setTimeout(() => {
        slider.scrollLeft += firstCardWidth;
        updateDots();
    }, 2500);
};

// Initialize
updateDots();
autoPlay();

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
slider.addEventListener("scroll", infiniteScroll);
work.addEventListener("mouseenter", () => clearTimeout(timeoutId));
work.addEventListener("mouseleave", autoPlay);


// ----- Form Handling ----- //

document.addEventListener('DOMContentLoaded', function () {
    const formGroups = document.querySelectorAll('.form-group');

    formGroups.forEach(formGroup => {
        const input = formGroup.querySelector('input');

        input.addEventListener('blur', function () {
            const inputValue = this.value.trim();
            const label = formGroup.querySelector('label');
            if (inputValue !== '') {
                label.classList.add('filled');
            } else {
                label.classList.remove('filled');
            }
        });
    });

    const closeFormBtn = document.getElementById('closeFormBtn');
    const formContainer = document.getElementById('contactFormContainer');
    const header = document.getElementById('header');

    closeFormBtn.addEventListener('click', function () {
        formContainer.style.opacity = 0;
        formContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            formContainer.style.display = 'none';
        }, 800);

        header.style.opacity = 1;
        header.style.filter = 'none';
        document.body.classList.remove('no-scroll');
    });

    document.getElementById('showFormBtn').addEventListener('click', function () {
        formContainer.style.display = 'block';
        setTimeout(() => {
            formContainer.style.opacity = 1;
            formContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 0);

        header.style.opacity = 0.5;
        header.style.filter = 'blur(5px)';
        document.body.classList.add('no-scroll');
    });

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        fetch("https://getform.io/f/bwngwera", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
            .then(response => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    form.reset();
                    formContainer.style.opacity = 0;
                    formContainer.style.transform = 'translate(-50%, -50%) scale(0)';
                    setTimeout(() => {
                        formContainer.style.display = 'none';
                    }, 800);
                    header.style.opacity = 1;
                    header.style.filter = 'none';
                    document.body.classList.remove('no-scroll');
                } else {
                    alert('Form submission failed. Please try again.');
                }
            })
            .catch(() => {
                alert('An error occurred. Please try again.');
            });
    });
});


// ----- Image Change and Content Display ----- //

const contentArray = [
    {
        imagePath: 'Assets/images/image@2x.png',
        title: 'Genderless Kei - Japan\'s Hot',
        description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of'
    },
    {
        imagePath: 'Assets/images/image.png',
        title: 'Better Strategy & Quality',
        description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of'
    },
    {
        imagePath: 'Assets/images/image@2x.png',
        title: 'Genderless Kei - Japan\'s Hot',
        description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of'
    }
];

let currentIndex = 0;

function changeImageAndContent() {
    const mainImage = document.getElementById('mainImage');
    const aboutPhotos = document.querySelectorAll('.about-photos');

    mainImage.src = contentArray[currentIndex].imagePath;

    aboutPhotos.forEach((el, index) => {
        if (index === currentIndex) {
            el.classList.add('selected');
        } else {
            el.classList.remove('selected');
        }
    });

    currentIndex = (currentIndex + 1) % contentArray.length;
}

setInterval(changeImageAndContent, 3000);

document.querySelectorAll('.about-photos').forEach((el, index) => {
    el.addEventListener('click', function () {
        currentIndex = index;
        changeImageAndContent();
    });
});

window.onload = function () {
    changeImageAndContent();
};


