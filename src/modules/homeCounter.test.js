/**
 * @jest-environment jsdom
 */


import homeCounter from './homeElementsCounter.js';

describe('homeCounter function', () => {

  test('testing  2 home elements', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    div.append(span, span2);
    expect(homeCounter(div)).toBe(2);
  });

  test('testing 0 home elements', () => {
    const div = document.createElement('div');
    expect(homeCounter(div)).toBe(0);
  });
  test('testing 0 home elements', () => {
    const div = document.createElement('div');
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    arr.forEach((item) => {
      const span = document.createElement('span');
      span.classList.add(item);
      div.appendChild(span);
    });
    expect(homeCounter(div)).toBe(13);
  });

});


// const homeCounter = (element) => {
//   const number = element.children.length;
//
//   return number;
// };
//
// export default homeCounter;
