import getComments from './getComments.js';

const popup = document.querySelector('.popup-window');

const displayDetails = async (data, id) => {
  let jump = true;
  const commentArr = await getComments(id);
  if (commentArr.error) {
    jump = false;
  }
  const divCont = document.createElement('div');
  divCont.setAttribute('id', id);
  divCont.className = 'divCont';
  const indexImg = id.toString().padStart(3, '0');
  const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indexImg}.png`;
  popup.innerText = '';
  divCont.innerHTML += '<span class="close-popup">X</span>';
  const div3 = document.createElement('div');
  div3.className = 'popcontainer';
  div3.innerHTML += `<img class="img" src="${img}">`;
  div3.innerHTML += `<p class="name">${data.name.toUpperCase()}</p>`;
  divCont.appendChild(div3);
  popup.appendChild(divCont);

  const div4 = document.createElement('div');
  div4.className = 'popcontainer1';
  div4.innerHTML += `<p class="size">Height: ${data.height} cm</p>`;
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

  const commentsDiv = document.createElement('div');
  if (jump) {
    commentsDiv.className = 'commentsDiv';
    commentsDiv.innerHTML += '<span class="comments">Comments</span>';
    const ulComments = document.createElement('table');
    ulComments.innerHTML += '<tr><th>Creation Date</th><th>UserName</th><th>Comment</th></tr>';
    commentArr.forEach((item) => {
    // console.log(item);
      ulComments.className = 'divComments';
      ulComments.innerHTML += `
    <tr>
    <td>${item.creation_date}</td>
    <td>${item.username}</td>
    <td>${item.comment}</td>
    </tr>
    `;
    });
    commentsDiv.appendChild(ulComments);
  }
  // form
  const formDiv = document.createElement('div');
  formDiv.className = 'formDiv';
  const form = document.createElement('form');
  form.className = 'com-form';
  form.innerHTML += `<h2>Add a comment</h2>
  <input type="text" name="username" placeholder="Your name" required>
  <textarea placeholder="Your insights" name="comment" required minlength="1"></textarea>
  <button type="submit" class="submit">Submit</button>`;
  formDiv.appendChild(form);
  divCont.append(lowerdiv, commentsDiv, formDiv);
  popup.append(divCont);
};

export default displayDetails;
