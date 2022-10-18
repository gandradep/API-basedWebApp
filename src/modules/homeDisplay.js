/* eslint-disable import/prefer-default-export */
export const display = (data) => {
  const mainContainer = document.getElementById('main');
  let count = 1;
  let indexImg;
  const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  mainContainer.innerText = '';
  data.forEach((item) => {
    // console.log(item.name);
    // console.log(item.url);
    const div = document.createElement('div');
    const myImg = new Image();
    indexImg = count.toString().padStart(3, '0');

    count ++;
    console.log(indexImg);
    myImg.src = `${imgUrl}${indexImg}.png`;
    // const name = document.createElement('span');
    // const score = document.createElement('span');
    // name.innerHTML = `${item.user} :`;
    // name.classList.add('bold');
    // score.innerHTML = item.score;
    div.append(myImg);
    // row.appendChild(td);
    mainContainer.appendChild(div);
  });
};
