// When a gallery thumbnail size button is clicked, the corresponding size class

// should be added to the div.thumbnails element.  This will apply the corresponding

// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,

// the clicked button should be made active (i.e. add the active class).

/*
var liSm = document.querySelector('.thumbnails-sm');
var liMd = document.querySelector('.thumbnails-md');
var liLg = document.querySelector('.thumbnails-lg');

Or following one line
*/
var ulContainer = document.querySelector('ul.thumbnail-sizes');

function thumbnailSizehandler(evt)
{
   var target = evt.target; //avt.target is the object the events happened on
   var thumbnails = document.querySelector('div.thumbnails');
    
   if(target.classList.contains('active') != true)
   {
       // console.log(target); //just to see what things we clicked on (in console)
       // console.log('need to switch the selected size');  //In console when we press Medium and small then only it prints msg in console, not for Large coz its already active
       //Following two lines are for - Updated the active class
       document.querySelector('li.active').classList.remove('active');
       target.classList.add('active');

       //determine which button or <li> was clicked
       if(target.classList.contains('thumbnails-sm'))
       {
           console.log('switch the size to "sm"');
           thumbnails.classList.remove('md');
           thumbnails.classList.remove('lg');
           thumbnails.classList.add('sm');

       }
       else if(target.classList.contains('thumbnails-md'))
       {
           console.log('switch the size to "md"');
           thumbnails.classList.remove('sm');
           thumbnails.classList.remove('lg');
           thumbnails.classList.add('md');
       }
       else
       {
        console.log('switch the size to "lg"');
        thumbnails.classList.remove('md');
           thumbnails.classList.remove('sm');
           thumbnails.classList.add('lg');
       }
   }

   

}
/*
liSm.addEventListener('click',thumbnailSizehandler);
liMd.addEventListener('click',thumbnailSizehandler);
liLg.addEventListener('click',thumbnailSizehandler);
Or following one line
*/
ulContainer.addEventListener('click',thumbnailSizehandler);