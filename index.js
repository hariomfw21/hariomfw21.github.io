// <---------------------------------------Scrool View for Projects ------------------------------------------------->
var i = 0;
var j = 0;
var text1 = "Hariom";
var text2 = "From India.";
var text3 = "I'm a Full-Stack Web Developer.";
var speed = 100;

// Function to start the typing animation
function startTypingAnimation() {
  typeWriter(); // Start the typing animation
}

function typeWriter() {
  if (i < text1.length) {
    document.getElementById("name").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (j < text2.length) {
    document.getElementById("country").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("role").innerHTML += text3.charAt(j - text2.length);
    if (j < text2.length + text3.length) {
      j++;
      setTimeout(typeWriter, speed);
    }
  }
}

// Start the typing animation when the DOM is ready
document.addEventListener("DOMContentLoaded", startTypingAnimation);


// <---------------------------------------Scrool View for Projects ------------------------------------------------->
document
  .querySelectorAll(".project-card .image-container")
  .forEach((imageContainer) => {
    const image = imageContainer.querySelector("img");
    let scrollPosition = 0;
    let scrollDirection = 1; // 1 for scrolling down, -1 for scrolling up
    const scrollSpeed = 3; // Adjust the scroll speed as needed
    let animationId = null;

    function scrollImage() {
      scrollPosition += scrollSpeed * scrollDirection;
      image.style.transform = `translateY(-${scrollPosition}px)`;

      if (
        (scrollDirection === 1 &&
          scrollPosition < image.height - imageContainer.clientHeight) ||
        (scrollDirection === -1 && scrollPosition > 0)
      ) {
        // Continue scrolling until the end or top of the image
        animationId = requestAnimationFrame(scrollImage);
      } else if (animationId) {
        // Stop the animation when it reaches the end or top
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    imageContainer.addEventListener("mouseenter", () => {
      if (!animationId) {
        // Reset scroll position and start scrolling down when the mouse enters the image container
        scrollPosition = 0;
        scrollDirection = 1;
        animationId = requestAnimationFrame(scrollImage);
      }
    });

    imageContainer.addEventListener("mouseleave", () => {
      if (animationId) {
        // Change the scroll direction to scroll up when the mouse leaves the image container
        scrollDirection = -1;
      }
    });
  });

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1bynIb5Nis2QBUMBWgCAEiWLJKfh0Bzbx/view?usp=sharing"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1bynIb5Nis2QBUMBWgCAEiWLJKfh0Bzbx/view?usp=sharing"
  );
});

// <---------------------------------Small Screen Nav ---------------------------------->
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// <--------------------------------------- active tab links -------------------------------->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontain of tabcontains) {
    tabcontain.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
