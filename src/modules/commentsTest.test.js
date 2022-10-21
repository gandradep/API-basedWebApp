/**
 * @jest-environment jsdom
 */
import commentsCounter from './coomentsCounter.js';

describe('commentsCounter function', () => {
  test('testing 1 row', () => {
    const table = document.createElement('table');
    const row = document.createElement('tr');
    table.appendChild(row);
    expect(commentsCounter(table)).toBe(0);
  });
  test('testing 2 no rows', () => {
    const table = document.createElement('table');
    expect(commentsCounter(table)).toBe(0);
  });
  test('testing 1 row', () => {
    const table = document.createElement('table');
    const arr = [1, 2, 3, 4, 5];
    arr.forEach((item) => {
      const row = document.createElement('tr');
      row.classList.add(item);
      table.appendChild(row);
    });
    expect(commentsCounter(table)).toBe(4);
  });
});
