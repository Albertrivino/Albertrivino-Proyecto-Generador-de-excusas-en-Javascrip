/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/tenor.gif";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //con este interconecto el "p = id="excuse"" y el boton de refresh//
  document.querySelector(".btn").addEventListener("click", () => {
    //querySelecetor se conecta con cualquier elemento del html//
    document.getElementById("excuse").innerText = MainRandom(); // El geyElementById se conecta con un ID declarado en Html (se borra el numeral en JS)//
  });

  function MainRandom() {
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
    function RandomGenerator(list) {
      return list[Math.floor(Math.random() * list.length)];
    }
    // let whoRandom = RandomGenerator(who);
    // let actionRandom = RandomGenerator(action);
    // let whatRandom = RandomGenerator(what);
    // let whenRandom = RandomGenerator(when);

    // console.log(whoRandom);
    return (
      RandomGenerator(who) +
      " " +
      RandomGenerator(action) +
      " " +
      RandomGenerator(what) +
      " " +
      RandomGenerator(when)

      // who[whoRandom] + //me construye el resultado entre who y whoRandom//
      // " " +
      // action[actionRandom] +
      // " " +
      // what[whatRandom] +
      // " " +
      // when[whenRandom]
    );
  }
};
