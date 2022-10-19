export const display =(data) => {
  const popup = document.querySelector('.popup-window');
  const img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png';
  popup.innerText = '';
  const div3 = document.createElement('div');
  div3.innerHTML += `<img src="${img}">`
  div3.innerHTML += `<h2>Name:</h2><p>${data.name}</p>`
  popup.appendChild(div3);
  div3.innerHTML += `<p>Height: ${data.height} m</p>`
  popup.appendChild(div3);

  div3.innerHTML += `<p>Weight: ${data.weight/10} kgs</p>`
  popup.appendChild(div3);

  const div2 = document.createElement('div');
  div2.innerHTML += `<h2>Abilities:</h2>`
  popup.appendChild(div2);
  data.abilities.forEach((item) => {
    const div = document.createElement('ul');
    div.innerHTML += `<li>${item.ability.name}</li>`
    popup.appendChild(div);
  });

  const div1 = document.createElement('div');
  div1.innerHTML += `<h2>Types:</h2>`
  popup.appendChild(div1);
  data.types.forEach((item) => {
    const div = document.createElement('ul');
    div.innerHTML += `<li>${item.type.name}</li>`
    popup.appendChild(div);
  });
  

};
