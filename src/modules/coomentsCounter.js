const commentsCounter = (element) => {
  let counter = 0;
  if (element.children.length > 0) {
    counter = element.children.length - 1;
  }
  return counter;
};
export default commentsCounter;