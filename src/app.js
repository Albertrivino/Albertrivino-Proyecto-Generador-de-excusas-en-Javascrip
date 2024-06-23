/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/tenor.gif";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click", () => {
    document.getElementById("excuse").innerText = mainRandom();
  });

  function mainRandom() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    function randomGenerator(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    return (
      randomGenerator(who) +
      " " +
      randomGenerator(action) +
      " " +
      randomGenerator(what) +
      " " +
      randomGenerator(when)
    );
  }
};
