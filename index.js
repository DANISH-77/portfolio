const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


var Typed = new Typed("#autotype",{
    strings:["Pitch for you.","Adverse for you.","Preach your purpose."],
    typeSpeed: 60, // Adjust this value to make the typing slower (higher value = slower speed)
    backSpeed: 60, // Adjust this value for the speed when deleting text (higher value = slower speed)
    loop: true
})


// gsap.registerPlugin(ScrollTrigger);

// gsap.timeline({
//     scrollTrigger: {
//       trigger: "#page1",
//       start: "top top",
//       end: '+=60%',
//       scrub: true,
//       pin: true,
//       markers: true
//     }
//   })
//     .to("#page1 #birds", {
//       scale: 2,
//       duration: 0.8,// Adjust the duration as needed
//       ease: "power2.out"
//     })
//     .to("#page1 #image", {
//       scale: 1.8,
//       duration: 0.8, // Adjust the duration as needed
//       ease: "power2.out"
//     }, "<") // Both animations start at the same time
//     .to("#page1 #cloud", {
//       scale: 11,
//       duration: 1,
//       delay: 0.4, // Optional delay before #cloud starts
//       ease: "power2.out"
//     }, "<"); // #cloud starts after the previous animations have started

// ye wala hai
gsap.registerPlugin(ScrollTrigger);

// Page 1 animations
gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      start: "top top",
      end: '+=100%',
      scrub: true,
      pin: true,
      // markers: true
    }
  })
    .to("#page1 #birds", {
      scale: 2,
      duration: 0.8, // Adjust the duration as needed
      ease: "power2.out"
    })
    .to("#page1 #image", {
      scale: 1.8,
      duration: 0.8, // Adjust the duration as needed
      ease: "power2.out"
    }, "<") // Both animations start at the same time
    .to("#page1 #cloud", {
      scale: 11,
      duration: 1,
      delay: 0.4, // Optional delay before #cloud starts
      ease: "power2.out"
    }, "<"); // #cloud starts after the previous animations have started

    // yaha tak hai

    // Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

// Add click event listener to the #work element
document.querySelector("#work").addEventListener("click", function() {
  // Scroll to #page3 smoothly
  gsap.to(window, {
    scrollTo: "#page3",  // Target the element with id 'page3'
    duration: 4,         // Duration of the scroll
    ease: "power2.out"   // Easing function for a smooth scroll
  });
});


 

    
  
    // Shery.textAnimate("nav h1", {
    //     style: 1,
    //     y: 10,
    //     delay: 0.1,
    //     duration: 2,
    //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     multiplier: 0.1,
    //   });


     
var problem1 = document.getElementById('_2');
var paratext1 = document.getElementById('paratext1');

// Add a click event listener to the span
problem1.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext1.textContent = "Users often face difficulty in determining the most affordable ride, as fares fluctuate and differ between apps, requiring them to manually check each one.";
});

var about1 = document.getElementById('_1');
var paratext1 = document.getElementById('paratext1');

// Add a click event listener to the span
about1.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext1.textContent = "Fare-कमpare is an online platform that compares ride-hailing fares across Ola, Rapido, and Uber for different vehicles, including cabs, bike taxis, and autos.";
});

var solution1 = document.getElementById('_3');
var paratext1 = document.getElementById('paratext1');

// Add a click event listener to the span
solution1.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext1.textContent = "By integrating data from multiple sources, Fare-कमpare simplifies the process, providing users with real-time fare comparisons for various ride options in one place";
});

var benefit1 = document.getElementById('_4');
var paratext1 = document.getElementById('paratext1');

// Add a click event listener to the span
benefit1.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext1.textContent = " The platform helps users save both time and money, as they can quickly identify and select the most economical ride, avoiding the hassle of checking multiple apps";
});

var problem2 = document.getElementById('_22');
var paratext2 = document.getElementById('paratext2');

// Add a click event listener to the span
problem2.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext2.textContent = " Building separate codebases for iOS and Android apps increases complexity, time, and cost. Developers face challenges in managing platform-specific native code and ensuring smooth integration across devices.";
});

var about2 = document.getElementById('_11');
var paratext2 = document.getElementById('paratext2');

// Add a click event listener to the span
about2.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext2.textContent = "Expo is an open-source platform for building cross-platform native apps using React. It provides a set of tools and services that simplify app development for iOS, Android, and the web from a single codebase.";
});

var solution2 = document.getElementById('_33');
var paratext2 = document.getElementById('paratext2');

// Add a click event listener to the span
solution2.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext2.textContent = "Expo enables developers to build apps for iOS, Android, and web using React Native, without requiring native code. It includes built-in APIs and tools, offering seamless functionality across all platforms.";
});

var benefit2 = document.getElementById('_44');
var paratext2 = document.getElementById('paratext2');

// Add a click event listener to the span
benefit2.addEventListener('click', function() {
    // Change the content of the paragraph when span #3 is clicked
    paratext2.textContent = "Expo offers cross-platform development, access to native features without native code, faster over-the-air updates, and a streamlined developer workflow, all of which enhance app creation efficiency.";
});
      
// yaha se #page ka shuru

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}
      