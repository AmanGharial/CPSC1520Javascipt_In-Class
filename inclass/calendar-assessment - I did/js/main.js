/* ****************************
 * A bunch of code is alreay given
 * to help set up the calendar.
 * You need to complete the section
 * that sets the days in the calendar.
 * ************************* */
// Array of all the month names
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];

// Setting up the calendar
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var firstDay = 1;

// Displaying the current
var calendarTitle = monthNames[currentMonth] + ' ' + currentYear;
document.querySelector('.calendar header h1').innerHTML = calendarTitle;

// Set up a calendar for the Sunday of the first week of the month.
// 	a) first day of month
var calendar = new Date(currentYear, currentMonth, firstDay);
//  b) new date offsetting by the day of the week
var dayOfWeek = calendar.getDay();
calendar = new Date(currentYear, currentMonth, firstDay - dayOfWeek)

var days = document.querySelectorAll('.day-grid li');

var index;

// BEGIN STUDENT CODE HERE....

//      Loop through the days and set the .innerHTML
//	to be the date of the calendar variable.
var num= calendar.getDate();
           for(var index=0; index < days.length; index++)
           {
              console.log(index);
              console.log('in loop');
              var newmonth = new Date(currentYear, currentMonth, firstDay);
              var oldMonthelastday = new Date(currentYear, currentMonth, firstDay-1).getDate();
             // if(new Date(currentYear, currentMonth).getMonth() == new Date(currentYear, currentMonth).getMonth()-1)
              {
                  if(num>oldMonthelastday)              
                {
                  if(new Date(currentYear, currentMonth).getMonth() != new Date(currentYear, currentMonth).getMonth()-1)
                  {
                    //num=num;
                    num=1;
                    
                    
                  }
                  else
                  {
                  //num=1;
                  num=num;
                  }
                }
              }
              
              days[index].innerHTML=num;
              num=num+1;
              //calendar.getDate() = calendar.getDate()+1;
           }
// for(index=1; index<=6;index++)
// {
//   calendar+=
// }




//      If the calendar's month is less than the
//	current month, assign the 'month-prev' css class.

//      If the calendar's month is greater than the
//	current month, assign the 'month-next' css class.

//      Use the getTomorrow() function to change the
//  calendar variable to the next day.

// ... end of Student Code

function getTomorrow(currentDate) {
	return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
}

