function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
let city = 'NYC';
!city ==='Pittsburgh';
function ternaryCheckCity(NYC){
  // Write your code here!
  if (city === NYC){
    return "Ok, sounds good.";
  }
  else if(! city){
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
// Function to return a response based on tip amount using switch statement
    switch (tip) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye.";
    }
  }

