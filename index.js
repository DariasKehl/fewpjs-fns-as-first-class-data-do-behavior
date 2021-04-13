/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(s) { 
  // The greet function should take one argument,
  // a String which specifies the 24-hour time in the format HH:MM.
  const words = s.split(':');
  const hour24 = parseInt(words[0], 10);
  if(hour24 < 12) { 
    // "Good Morning"
    return "Good Morning";
  }
  else if(hour24 < 17) { 
    //"Good Afternoon"
    return "Good Afternoon";
  }
  else { 
    // "Good Evening"
    return "Good Evening";
  }
}

function displayMessage(s) {

//   The displayMessage function should take one argument, a String.
//   When the function runs it should update the text inside the #greeting 
//   node with the content of the argument.
//   It does not return anything.
  document.getElementById("greeting").innerText = s;

}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
