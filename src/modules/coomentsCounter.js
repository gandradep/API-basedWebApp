const commentsCounter = (element) => {
	const counter = 0;
	if(element){
		counter = element.children.length-1;
		
		console.log(counter);
	}
	return counter;
};
export default commentsCounter;