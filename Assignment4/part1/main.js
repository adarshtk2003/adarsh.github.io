// Name: Adarsh Thekkekulathingal Kuriyachan
// File: main.js
// Date: 20 March, 2024
// Description: Creating a stroy generator using html and javascript. The different aspects of java
//              script are used in this.


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX;
const insertY;
const insertZ;
