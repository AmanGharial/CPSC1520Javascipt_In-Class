//1) Create a function called wrapInBlockQuotes that will take in a single value that wraps the text is an HTML blockquote tag.
function wrapInBlockQuotes(text)
{
    return '<blockquote>' + text + '</blockquotes>';
   
}




//2) Write the Javascript code to get the element with the id of "leadQuote" and, using the function in step 1, wrap the contents of that elements in a blockquote
var tag = document.getElementById('leadQuote'); //or->  var tag = document.querySelector('#leadQuote');

tag.innerHTML = wrapInBlockQuotes(tag.innerHTML);


