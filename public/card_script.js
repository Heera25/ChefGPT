const swipper=document.querySelector('.swipper');
const like=document.querySelector('#like');
const dislike=document.querySelector('#dislike');



function fetchPostImageURLs() {
  return dbRef(database,'posts').once('value').then((snapshot) => {
      const posts = snapshot.val();
      const imageURLs = [];
      if (posts) {
          Object.values(posts).forEach((post) => {
              if (post.imageUrl) {
                  imageURLs.push(post.imageUrl);
              }
          });
      }
      return imageURLs;
  });
}

fetchPostImageURLs().then((imageURLs) => {
  // Now imageURLs contains the URLs fetched from Firebase Realtime Database for each post
  // Update the urls array with imageURLs
  urls.splice(0, urls.length, ...imageURLs);

  // Initialize swiper with cards using the updated URLs
  for (let i = 0; i < 5; i++) {
      appendNewCard();
  }
});

/*const urls =[
    'https://source.unsplash.com/random/1000x1000?food',
    'https://source.unsplash.com/random/1000x1000?rice',
    'https://source.unsplash.com/random/1000x1000?noodles',
    'https://source.unsplash.com/random/1000x1000?cake',
    'https://source.unsplash.com/random/1000x1000?pan',
];
let cardCount=0;

let currentImageUrl = ''; // Variable to store the current image URL

const detailImage = document.getElementById('detail-image'); // Get the detail image element

// Function to append a new card to the swiper
// Modify appendNewCard function to calculate and set fixed rotation angle
let previousRotationAngle = 0; // Variable to store the previous rotation angle*/




function appendNewCard() {
    const card = new Card({
      imageUrl: urls[cardCount % 5],
      onDismiss: appendNewCard,
      onLike: () => {
        like.style.animationPlayState = 'running';
        like.classList.toggle('trigger');
      },
      onDislike: () => {
        dislike.style.animationPlayState = 'running';
        dislike.classList.toggle('trigger');
      },
      onCardOpen: (imageUrl) => {
        detailImage.src = imageUrl; // Update detail image source when a card is opened
      }
    });
    
    swipper.append(card.element);
    cardCount++;
  
    const cards = swipper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
      card.style.setProperty('--i', index);
    });
    
  }
  const detailBlock = document.querySelector('.detail');

  // Variable to store the URL of the last swiped right image
  let lastSwipedRightImageUrl = '';
  
  //Function to handle card swipe event
  //Function to handle card swipe event
// Function to handle card swipe event
function handleCardDismissal(direction, imageUrl) {
    // Update lastSwipedRightImageUrl with the URL of the swiped right image
    lastSwipedRightImageUrl = direction === 1 ? imageUrl : lastSwipedRightImageUrl;

    // Show detail block only if a card is swiped to the right (liked)
    if (direction === 1) {
        detailBlock.style.display = 'block';
                setTimeout(function() {
                    detailBlock.style.opacity = '1';
                }, 100);
        detailImage.src = imageUrl;
    } else {
        // Hide detail block only if the imageUrl is not equal to the lastSwipedRightImageUrl
        if (imageUrl !== lastSwipedRightImageUrl) {
            //detailBlock.style.display = 'none';
        }
    }
}


  

//Function to handle card swipe event
function handleCardSwipe() {
    // Get the currently visible card in the swiper
    const visibleCard = document.querySelector('.card:not(.dismissing)');
    if (visibleCard) {
        // Get the image URL of the visible card
        const imageUrl = visibleCard.querySelector('img').src;
        // Update the lastSwipedRightImageUrl with the image URL of the visible card
        
        // Update the detail image with the image URL of the last swiped right image
        //detailImage.src = imageUrl;
    }
}






// Initialize swiper with initial cards
for (let i = 0; i < 5; i++) {
    appendNewCard();
}

// Listen for card swipe event
swipper.addEventListener('transitionend', (event) => {
    const card = event.target;
    if (card.classList.contains('card') && card.classList.contains('dismissing')) {
        // Get the direction of card dismissal
        const direction = card.style.transform.includes('rotate(90deg)') ? 1 : -1;
        // Get the image URL of the swiped card
        const imageUrl = card.querySelector('img').src;
        // Handle card dismissal
        handleCardSwipe();
        //detailImage.src=imageUrl;
        handleCardDismissal(direction, imageUrl);
    }
});



// Listen for card swipe event
swipper.addEventListener('transitionend', handleCardSwipe);

