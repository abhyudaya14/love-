const text =
  "I want to share something that's been on my mind. Every passing day without you feels like a piece of me is missing. Your smile, your warmth, your presence—these are the things I find myself longing for more than ever. Life seems a little less vibrant without you by my side. There's a void in my heart that only your love can fill. Since the day we met, you've brought so much joy into my life. From our first conversations to the moments we spend together, each memory is treasured in my heart. Every laugh shared and every glance exchanged has only deepened my affection for you. Though our time together has been relatively";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
