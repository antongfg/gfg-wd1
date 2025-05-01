// document.getElementById("title").innerText = "Geeks for Geeks";
document.querySelector("h1").innerText = "Geeks for Geeks";
document.querySelector(".title").innerText = "Geeks for Geeks";

document.querySelector("div").innerHTML = `
<h1>Hey there</h1>
<p>Hello</p>
`;

const h3 = document.createElement("h3");

h3.innerText = "Hi there";

const body = document.querySelector("body");

body.appendChild(h3);

const fruits = ["Mango", "Orange", "Grapes", "Apple"];

const ul = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   const li = document.createElement("li");
//   li.innerText = fruits[i];
//   ul.appendChild(li);
// }

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.innerText = fruit;
  ul.appendChild(li);
});

body.appendChild(ul);

const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg"
);

img.setAttribute("alt", "lakeview");

body.appendChild(img);
