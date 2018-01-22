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
