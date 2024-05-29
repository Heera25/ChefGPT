var TrendingSlider = new Swiper('.trending-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    const sidebarItems = document.querySelectorAll(".sidebar-item");

    sidebarItems.forEach(item => {
        item.addEventListener("click", function() {
            const selectedTab = this.textContent.trim().toLowerCase();
            
            // Toggle visibility based on the selected tab
            if (selectedTab === "settings") {
                showSettings(); // Show settings section
            } else {
                hideSettings(); // Hide settings section for other sidebar items
            }

            if (selectedTab === "home") {
                showHome(); // Show home section
            } else {
                hideHome(); // Hide home section for other sidebar items
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const sidebarItems = document.querySelectorAll(".sidebar-item");

  sidebarItems.forEach(item => {
      item.addEventListener("click", function() {
          const selectedTab = this.textContent.trim().toLowerCase();
          
          // Toggle visibility based on the selected tab
          if (selectedTab === "home") {
              showHome(); // Show home section
          } else {
              hideHome(); // Hide home section for other sidebar items
          }
      });
  });
});

function showHome() {
  document.getElementById("trending").style.display = "block";
}

function hideHome() {
  document.getElementById("trending").style.display = "none";
}


function showSettings() {
    document.getElementById("settings").style.display = "block";
}

function hideSettings() {
    document.getElementById("settings").style.display = "none";
}

function showHome() {
    document.getElementById("trending").style.display = "block";
}

function hideHome() {
    document.getElementById("trending").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const homeButton = document.querySelector(".sidebar-item:nth-child(1)"); // Assuming "Home" is the first sidebar item
  const testimonialsSection = document.getElementById("testimonials");

  homeButton.addEventListener("click", function() {
    showTestimonials(); // Show testimonials when "Home" is clicked
  });

  const sidebarItems = document.querySelectorAll(".sidebar-item:not(:first-child)"); // Exclude the "Home" button

  sidebarItems.forEach(item => {
      item.addEventListener("click", function() {
          hideTestimonials(); // Hide testimonials when any sidebar item other than "Home" is clicked
      });
  });
});

function showTestimonials() {
  document.getElementById("testimonials").style.display = "block";
}

function hideTestimonials() {
  document.getElementById("testimonials").style.display = "none";
}

/* Toggle class to show testimonials section */
function toggleTestimonials() {
  const wrapper = document.querySelector('.wrapper');
  wrapper.classList.toggle('show-testimonials');
}


// Add scroll event listener
window.addEventListener('scroll', function() {
  var trendingSection = document.getElementById('trending');
  var testimonialsSection = document.getElementById('testimonials');
  var bottomOfTrending = trendingSection.getBoundingClientRect().bottom;

  // Define the threshold for triggering the transition
  var threshold = window.innerHeight * 0.8; // Adjust this value as needed

  // Check if bottom of trending section is within the threshold
  if (bottomOfTrending <= threshold) {
    testimonialsSection.style.opacity = 1;
    testimonialsSection.style.pointerEvents = 'auto';
  } else {
    testimonialsSection.style.opacity = 0;
    testimonialsSection.style.pointerEvents = 'none';
  }
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show back-to-top button when scrolling down
window.addEventListener('scroll', function() {
  var button = document.querySelector('.back-to-top');
  if (window.scrollY > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

window.addEventListener('scroll', function() {
  var testimonialsSection = document.getElementById('testimonials');
  var aboutUsSection = document.getElementById('about-us');
  var bottomOfTestimonials = testimonialsSection.getBoundingClientRect().bottom;

  // Calculate the distance from the top of the testimonials section

  // Define the point where the about us section should start appearing
  var transitionPoint = window.innerHeight * 0.8; // Adjust as needed

  if (bottomOfTestimonials <= transitionPoint) {
    aboutUsSection.style.opacity = 1;
    aboutUsSection.style.pointerEvents = 'auto'; 
  } else {
    aboutUsSection.style.opacity = 0;
    aboutUsSection.style.pointerEvents = 'none'; // Make it not clickable
  }
});


function searchRecipes() {
  // Get the search input value
  var searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
  
  // Get all the recipe names (you may need to adjust this selector based on your actual HTML structure)
  var recipeNames = document.querySelectorAll('.food-name');

  // Loop through each recipe name to check for a match with the search query
  recipeNames.forEach(function(recipeName) {
    var recipeNameText = recipeName.textContent.trim().toLowerCase();
    
    // If the recipe name contains the search query, show the corresponding recipe
    if (recipeNameText.includes(searchQuery)) {
      recipeName.closest('.trending-slide').style.display = "block";
    } else {
      recipeName.closest('.trending-slide').style.display = "none";
    }
  });
}


function saveSettings() {
  // Get values from input fields
  var profilePicture = document.getElementById("profile-picture").files[0];
  var displayName = document.getElementById("display-name").value;
  var username = document.getElementById("username").value;
  var newPassword = document.getElementById("new-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Implement saving functionality here (e.g., using local storage or sending data to a backend server)
  // You can use FormData to send the data to a server via AJAX

  // Example of saving data to local storage
  localStorage.setItem("profilePicture", profilePicture); // Save profile picture
  localStorage.setItem("displayName", displayName); // Save display name
  localStorage.setItem("username", username); // Save username

  // Optionally, clear password fields after saving
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";

  if (newPassword !== confirmPassword) {
    alert("New password and confirm password do not match. Please enter the correct password");
    return; // Exit the function if passwords don't match
}

  alert("Settings saved successfully!");
}

// Get reference to the file input and image elements
// Get reference to the file input and image elements
// var profilePictureInput = document.getElementById("profile-picture");
// var profileImage = document.getElementById("profile-picture-preview"); // Update to use correct ID
// var displayNameInput = document.getElementById("display-name");
// var sidebarProfilePicture = document.getElementById("sidebar-profile-picture");
// var sidebarDisplayName = document.getElementById("sidebar-display-name");

// // Add event listener to the file input
// profilePictureInput.addEventListener("change", function() {
//   console.log("File selected");
//   if (profilePictureInput.files && profilePictureInput.files[0]) {
//       console.log("Reading file...");
//       var reader = new FileReader();
//       reader.onload = function(e) {
//           console.log("File read successfully");
//           profileImage.src = e.target.result;
//       };
//       reader.readAsDataURL(profilePictureInput.files[0]);
//   }
// });

// displayNameInput.addEventListener("input", function() {
//   sidebarDisplayName.textContent = displayNameInput.value;
// });


function saveSettings() {
  // Get values from input fields
  var profilePicture = document.getElementById("profile-picture").files[0];
  var displayName = document.getElementById("display-name").value;
  var username = document.getElementById("username").value;
  var newPassword = document.getElementById("new-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Implement saving functionality here (e.g., using local storage or sending data to a backend server)
  // You can use FormData to send the data to a server via AJAX

  // Example of saving data to local storage
  localStorage.setItem("profilePicture", profilePicture); // Save profile picture
  localStorage.setItem("displayName", displayName); // Save display name
  localStorage.setItem("username", username); // Save username

  // Optionally, clear password fields after saving
  document.getElementById("new-password").value = "";
  document.getElementById("confirm-password").value = "";

  if (newPassword !== confirmPassword) {
    alert("New password and confirm password do not match. Please enter the correct password");
    return; // Exit the function if passwords don't match
  }

  // Update sidebar elements with new values
  updateSidebar(profilePicture, displayName);
  
  alert("Settings saved successfully!");
}

function updateSidebar(profilePicture, displayName) {
  // Update profile picture on sidebar
  var sidebarProfilePicture = document.getElementById("sidebar-profile-picture");
  if (profilePicture) {
    var reader = new FileReader();
    reader.onload = function(e) {
      sidebarProfilePicture.src = e.target.result;
    };
    reader.readAsDataURL(profilePicture);
  }
  
  // Update display name on sidebar
  var sidebarDisplayName = document.getElementById("sidebar-display-name");
  sidebarDisplayName.textContent = displayName;

  // Update profile picture on settings page
  var profilePicturePreview = document.getElementById("profile-picture-preview");
  if (profilePicture) {
    var reader = new FileReader();
    reader.onload = function(e) {
      profilePicturePreview.src = e.target.result;
    };
    reader.readAsDataURL(profilePicture);
  }
}
