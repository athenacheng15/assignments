function ajax(url) {
  return fetch(url).then((response) => response.json());
}

function render(data) {
  const itemClass = document.querySelectorAll(".cnt-text");

  for (let i = 0; i < data.length; i++) {
    if (itemClass[i].id === `item${i + 1}`) {
      document.querySelector(`#item${i + 1}`).innerHTML = `
      <h1>${data[i].name}</h1>
      <p>${data[i].description}</p>
      <h2>$ ${data[i].price} NTD</h2>
      `;
    }
  }
}

ajax("https://appworks-school.github.io/Remote-Assignment-Data/products").then(
  (data) => render(data)
);
