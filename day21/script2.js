let heading = document.querySelector(".heading");

console.log(heading);
/*
1. innerText
2. textContent
3. innerHtml
*/
console.log(heading.innerText);

// heading.innerText = "<u>Mihir</u>";
heading.innerHTML = "<u>Mihir</u>";

const h2 = document.querySelector("h2");

h2.innerText = `${h2.innerText} US`;

const content = document.querySelector(".content");

content.innerHTML =
  "<span style='color:red; font-size:32px;'>Mihir</span> is a <b><i>kid</i></b>";
