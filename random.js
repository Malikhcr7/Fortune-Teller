function  getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; 
}

function plug() {
    var randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.getElementById("demo").innerHTML = randomNumber.toString();
    var prediction;
    
    if (randomNumber >= 1 && randomNumber < 20 ) {
        prediction = "A beautiful, smart, and loving person will be coming into your life.";
      } else if (randomNumber >= 20 && randomNumber < 40) {
        prediction = "A dubious friend may be an enemy in camouflage.";
      } else if (randomNumber >= 40 && randomNumber < 60 ) {
        prediction = "A golden egg of opportunity falls into your lap this month.";
      } else if (randomNumber >= 60 && randomNumber < 70) {
        prediction = "A good time to finish up old tasks.";
      } else if (randomNumber >= 70 && randomNumber < 80) {
        prediction = "A lifetime friend shall soon be made.";
      } else if (randomNumber >= 80 && randomNumber <100) {
        prediction = "A pleasant surprise is waiting for you.";
      } 
      document.getElementById("result").innerHTML = prediction;
}

