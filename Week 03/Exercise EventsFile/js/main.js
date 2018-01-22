// 1. select the target element
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');
    evt.preventDefault();
   }

// 3. add event listener
featureLink.addEventListener('click', featureLinkHandler);


