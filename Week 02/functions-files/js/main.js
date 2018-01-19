/**
 This is a comment block, enclosed in a slash + asterisk and ending with an asterisk + slash.
 */

 //Demo of calling a function - console is the javascript editor environment in the browser
 //console.log(message);
 console.log('main.js is loaded');

 //The update innerHTML function has two paramerts:
 // -selector - is a string that identifies which DOM element to get or select
 // - newValue -  s string that will be the new value for the selector's .innserHTML
 function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
  }

  function strong(value) {
    //combing string to produce a new string is calle concatenation.
    return '<strong>' + value + '</strong>';
  }

  //inclass
function italics(text)
{
  return '<i>' + text + '</i>';
}

var tag = document.querySelector('span.note');
tag.innerHTML = italics(tag.innerHTML);

