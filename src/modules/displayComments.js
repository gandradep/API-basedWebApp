import getComments from './getComments.js';

const displayComments = async () => {
  const commentArr = await getComments();
  const divCont = document.createElement('ul');
  commentArr.forEach((item) => {  
  divCont.className = 'divComments';  
  divCont.innerHTML += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;;
  return divCont;
  });
  
};
export default displayComments;