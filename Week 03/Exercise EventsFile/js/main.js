// 1. select the target element
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function featureLinkHandler(evt) {   
    var featureImage = document.querySelector('img.feature');

    //featureImage.src = featureLink.href;   OR the below one 
    featureImage.src = evt.target.href;


    featureImage.classList.remove('hidden');
    evt.preventDefault();
   }

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











// 3. add event listener
featureLink.addEventListener('click', featureLinkHandler);


