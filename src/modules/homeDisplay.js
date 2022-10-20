/* eslint-disable import/prefer-default-export */
export const display = (data, heart) => {
  const mainContainer = document.getElementById('main');
  let count = 1;
  let indexImg;

  mainContainer.innerText = '';
  data.forEach((item) => {

    const div = document.createElement('div');
    const myImg = new Image();
    const divNameLikes = document.createElement('div');
    const name = document.createElement('span');
    const likes = document.createElement('span');
    const heartIcon = document.createElement('i');
    const comment = document.createElement('button');
    const numLikes = item.likes;
    div.classList.add('dFlex', 'homeDivPokemon');
    div.setAttribute('id', item.id);
    divNameLikes.classList.add('dFlex', 'divNameLikes');
    /* url image link */
    indexImg = count.toString().padStart(3, '0');
    myImg.src = item.imgSrc;
    myImg.classList.add('homeImg');

    if(item.clicked) {
      heartIcon.classList.add('fa-solid', 'fa-heart', 'rem15');
    } else {
      heartIcon.classList.add('fa-regular', 'fa-heart', 'rem15');
    }
    likes.innerText = `${numLikes} likes`;
    likes.classList.add('likes');
    likes.appendChild(heartIcon);
    name.innerText = item.name.toUpperCase();
    name.classList.add('rem15', 'fw500');
    comment.innerText = 'Comments';
    comment.classList.add('rem15');
    divNameLikes.append(name, likes);
    div.append(myImg, divNameLikes, comment);

    mainContainer.appendChild(div);
    count += 1;
  });
};
