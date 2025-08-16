
window.addEventListener("load", function () {
  setTimeout(() => {
    const loader = document.querySelector(".page-loader");
    if (loader) {
      loader.style.transition = "opacity 0.5s ease";
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 500);
});

document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent bubbling
      const parent = btn.closest('.select-menu');

      // Close all other open dropdowns
      document.querySelectorAll('.select-menu').forEach(menu => {
        if (menu !== parent) menu.classList.remove('open');
      });

      // Toggle this one
      parent.classList.toggle('open');
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.select-menu').forEach(menu => {
      menu.classList.remove('open');
    });
  });



  $(document).ready(function(){
    $('.photo-gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      infinite: true,
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const GEMINI_API_KEY = 'AIzaSyAbIzVhvwT8jaTBAH9wjDn8XnWkHl8ENkk'; // 🔒 Replace with real key

    const generateBtn = document.querySelector('.generate-btn');
    const userInput = document.querySelector('.inputGenerate input');

    // Optional output display
    const outputDiv = document.createElement('div');
    outputDiv.id = 'responseOutput';
    outputDiv.style.color = '#fff';
    outputDiv.style.marginTop = '20px';
    document.querySelector('.inputGenerate').after(outputDiv);

    generateBtn.addEventListener('click', async (e) => {
      e.preventDefault(); // prevent default <a href="#">
      const prompt = userInput.value.trim();

      if (!prompt) {
        outputDiv.textContent = 'Please enter a prompt.';
        return;
      }

      outputDiv.textContent = 'Generating...';

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [{ text: prompt }]
                }
              ]
            })
          }
        );

        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        outputDiv.textContent = text || 'No response from Gemini.';
      } catch (err) {
        console.error(err);
        outputDiv.textContent = 'Failed to generate content.';
      }
    });
  });
 $(document).ready(function(){
    $('.wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 600,
    });
  });

  
  

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollUpBtn");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
