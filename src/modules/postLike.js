export const addComment = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GZc42DTMDGJQZqgfZyNX/comments',
  {
    method: 'POST',
    body:JSON.stringify ({
    item_id: '2',
    username: 'Jane',
    comment: 'commentJane',
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  .then((response) => response.text())
  .then((data) => console.log(data));
