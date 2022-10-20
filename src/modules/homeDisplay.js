/* eslint-disable import/prefer-default-export */
export const display = (data) => {
  const mainContainer = document.getElementById('main');
  let count = 1;
  let indexImg;

  const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  mainContainer.innerText = '';
  data.forEach((item) => {
    // console.log(item.name);
    const div = document.createElement('div');
    const myImg = new Image();
    const divNameLikes = document.createElement('div');
    const name = document.createElement('span');
    const likes = document.createElement('button');
    const comment = document.createElement('button');
    const numLikes = item.likes;
    div.classList.add('dFlex', 'homeDivPokemon');
    divNameLikes.classList.add('dFlex', 'divNameLikes');
    /* url image link */
    indexImg = count.toString().padStart(3, '0');
    count += 1;
    myImg.src = `${imgUrl}${indexImg}.png`;
    myImg.classList.add('homeImg');
    likes.innerHTML = `<i class="fa-regular fa-heart rem15"></i> ${numLikes} likes`;
    likes.classList.add('likes');
    name.innerText = item.name.toUpperCase();
    name.classList.add('rem15', 'fw500');
    comment.innerText = 'Comments';
    comment.classList.add('rem15');
    divNameLikes.append(name, likes);
    div.append(myImg, divNameLikes, comment);

    mainContainer.appendChild(div);
  });
};
