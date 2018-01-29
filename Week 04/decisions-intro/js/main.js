// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');

	// remove the hidden class IF it is present,
	// otherwise, add it back!
	
	
	/*if(desc.classList.contains('hidden'))	
	{
		desc.classList.remove('hidden');
		
	}
	else
	{
		desc.classList.add('hidden');
	
	}*/

	//same result using string function-- desc.classList.contains('hidden')
	/*if()	
	{
		desc.classList.remove('hidden');
		
	}
	else
	{
		desc.classList.add('hidden');
	
	}*/

	
	// achieve the same result using using string functions
	
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);


//An anonymous function is a function that does not have a name
//anonymous function are often used when you want to create a "one-of" function that is being passed into another method/function

 document.querySelector('img.feature').addEventListener('click', function()
 {
 	var desc = document.querySelector('p.feature.description');
 	if(desc.classList.contains('hidden'))	
 	{
		desc.classList.remove('hidden');
		
 	}
 	else
 	{
 		desc.classList.add('hidden');
	
 	}
 })