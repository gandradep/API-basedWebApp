export const display =(data) => {
  const popup = document.querySelector('.popup-window');
  popup.innerText = '';
  data.forEach((item) => {
    console.log(item.height);
    //console.log(item.ability.url);
    const div = document.createElement('div');
    div.innerHTML += `<p>${item.ability.name}</p>`
    popup.appendChild(div);
  });
};
