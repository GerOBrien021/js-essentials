let count = 0;

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); 
    checkCountValue();
}


function resetCount() {
    count = 0;
    displayCount(); 
    checkCountValue();
}


function checkCountValue() {
    if (count === 0) {
      alert("The followers count has been reset to zero.");
    } else if (count === 10) {
      alert("Your Instagram post gained 10 followers! Keep it up!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}


function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}



