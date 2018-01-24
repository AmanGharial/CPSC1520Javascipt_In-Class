var urlTemplate = 'http://placehold.it/:size/:color/:background/';
var urlQueryStringTemplate = "?text="


var textInput = document.querySelector('input[name=placeholderText]');

console.log(textInput);

function onPlaceholderTextChange(evt)
{
    //The .target of the evt is the object that "experienced" the event
    console.log(evt.target.value); //.value is an attribute


    var imgElement = document.querySelector('img');
    var src = imgElement.src;
    var indexOfEqualSign = src.indexOf('=');
    var newSrc = src.substring(0, indexOfEqualSign);
    console.log(newSrc);
    newSrc = newSrc + '=' + evt.target.value;
    imgElement.src=newSrc;

}
//wrap up my event handler
textInput.addEventListener('change',onPlaceholderTextChange);





// mini-lesson on string manipulation:

//  split string into an array
//  join from array into a string
//  includes / endswith / startsWith
//  match - regular expressions
//  indexof / lastIndexOf
//  replace
//  character access
//  comparing - equals, greater/lesser
//  slice
//  toString
//  trim