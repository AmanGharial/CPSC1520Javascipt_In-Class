// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureCLick()
{
    console.log('img.feature was clicked..');
    //Now Grab the HTMLElement with a .feature and a .description class
    var desc = document.querySelector('.feature.description');
    //All HTMLElement object have .classList property that is a collection of class names
    desc.classList.remove('hidden'); //in main.css we have a class called hidden
}

// 3. add event listener
featureImage.addEventListener('click',handleFeatureCLick);


//Second example:
// 1. select the target element ( we are selecting the image with the  class of “feature”.)
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function handleFeatureLinkClick(evt)
{
    console.log('a.feature.link was clicked');
    //set the image src to the anchor's href value
    featureImage.src = featureLink.href;

    //make the image visible
    featureImage.classList.remove('hidden');

    //dont want to load the image in the page
    evt.preventDefault();
}

// 3. add event listener
featureLink.addEventListener('click',handleFeatureLinkClick);
