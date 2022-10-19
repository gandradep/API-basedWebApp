export const display =(data) => {
  const popup = document.querySelector('.popup-window');
  const img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png';
  popup.innerText = '';
  const div3 = document.createElement('div');
  div3.className = "popcontainer";
  div3.innerHTML += `<img class="img" src="${img}">`
  div3.innerHTML += `<p class="name">${data.name}</p>`
  popup.appendChild(div3);

  const div4 = document.createElement('div');
  div4.className = "popcontainer1";
  div4.innerHTML += `<p class="size">Height: ${data.height} m</p>`
  popup.appendChild(div4);
  div4.innerHTML += `<p class="size">Weight: ${data.weight/10} kgs</p>`
  popup.appendChild(div4);

  const lowerdiv = document.createElement('div')
  lowerdiv.className = "lowerdiv";
  const div2 = document.createElement('div');
  div2.className = "popcontainer2";
  div2.innerHTML += `<h2>Abilities</h2>`
  data.abilities.forEach((item) => {
    const div = document.createElement('ul');
    div.innerHTML += `<li>${item.ability.name}</li>`
    div2.appendChild(div);
    lowerdiv.appendChild(div2);
  });

  const div1 = document.createElement('div');
  div1.className = "popcontainer3";
  div1.innerHTML += `<h2>Types</h2>`
  data.types.forEach((item) => {
    const div = document.createElement('ul');
    div.innerHTML += `<li>${item.type.name}</li>`
    div1.appendChild(div);
    lowerdiv.appendChild(div1);
  });
  popup.appendChild(lowerdiv);

};
