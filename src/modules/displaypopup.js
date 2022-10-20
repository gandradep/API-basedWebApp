import getComments from './getComments.js';
const popup = document.querySelector('.popup-window');

const displayDetails = async (data) => {
  const commentArr = await getComments();
  const divCont = document.createElement('div');
  divCont.className = 'divCont';
  const img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png';
  popup.innerText = '';
  divCont.innerHTML += '<span id="close-popup">X</span>';
  const div3 = document.createElement('div');
  div3.className = 'popcontainer';
  div3.innerHTML += `<img class="img" src="${img}">`;
  div3.innerHTML += `<p class="name">${data.name.toUpperCase()}</p>`;
  divCont.appendChild(div3);
  popup.appendChild(divCont);

  const div4 = document.createElement('div');
  div4.className = 'popcontainer1';
  div4.innerHTML += `<p class="size">Height: ${data.height} m</p>`;
  popup.appendChild(div4);
  div4.innerHTML += `<p class="size">Weight: ${data.weight / 10} kgs</p>`;
  divCont.appendChild(div4);
  popup.appendChild(divCont);

  const lowerdiv = document.createElement('div');
  lowerdiv.className = 'lowerdiv';
  const div2 = document.createElement('div');
  div2.className = 'popcontainer2';
  div2.innerHTML += '<h2>Abilities</h2>';
  data.abilities.forEach((item) => {
    const div = document.createElement('ul');
    div.innerHTML += `<li>${item.ability.name}</li>`;
    div2.appendChild(div);
    lowerdiv.appendChild(div2);
  });

  const div1 = document.createElement('div');
  div1.className = 'popcontainer3';
  div1.innerHTML += '<h2>Types</h2>';
  data.types.forEach((item) => {
    const div = document.createElement('ul');
    div.innerHTML += `<li>${item.type.name}</li>`;
    div1.appendChild(div);
    lowerdiv.appendChild(div1);
  });
/* creating comments */
  const ulComments = document.createElement('ul');
  commentArr.forEach((item) => {
    console.log(item);
  ulComments.className = 'divComments';
  ulComments.innerHTML += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;;
  });

  divCont.append(lowerdiv, ulComments);
  popup.append(divCont);

};

export default displayDetails;
