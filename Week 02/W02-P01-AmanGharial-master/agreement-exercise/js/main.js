/*

	1)Create varialbles to hold the receiving party's name, disclosing party's name, and the date

	2)Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	3)Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/

//1
var receivingName;
var disclosingName;
var date;

//2
receivingName = prompt('What is the nme of receiving n=party');
disclosingName = prompt('What is the nme of disclosing n=party');
date = prompt('What date is this for? [month, day, year ]');

//3
document.querySelector('.parties .disclosing-party').innerHTML = disclosingName;
document.querySelector('.parties .receiving-party').innerHTML = receivingName;
document.querySelector('.date').innerHTML = date;

document.querySelector('.signature .disclosing-party').innerHTML = disclosingName;
document.querySelector('.signature .receiving-party').innerHTML = receivingName;


