// 1. select the target element
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function featureLinkHandler(evt) {    //evt parameter is an object representing the event as it passed to our method.
    //featureImage will reference an img tag
    var featureImage = document.querySelector('img.feature');

    //featureImage.src = featureLink.href;   OR the below one 
    featureImage.src = evt.target.href;
    //featureImage.alt = featureLink.title
    featureImage.alt = evt.target.title;

    //All elements have a collection of class names that we can access.
    featureImage.classList.remove('hidden');
    //stop the normal event from happening
    evt.preventDefault();
   }


// 3. add event listener
featureLink.addEventListener('click', featureLinkHandler);








//OR 
// function showImage(evt)
// {
//     //console.log('Show image fuction called');
//     //console.log(linkElement);
//     // a) Ge a reference to the <img class="feature"> element
//     var imgElement = document.querySelector('img.feature');
//     // b) Remove the 'hidden ' class from the element.
//     imgElement.classList.remove('hidden');
//     // c) Get the href from the <a class="feature link">
//     var imgSrc = LinkElement.href;
    
//     imgElement.src = imgSrc;
//     imgElement.alt = LinkElement.title;
//     var captionParagraph = document.querySelector('p.feature.title');
//     captionParagraph.innerHTML = LinkElement.title;
//     console.log(imgSrc);

//     evt.preventDefault();

// }













