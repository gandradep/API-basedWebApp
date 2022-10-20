export const postLike = (id) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GZc42DTMDGJQZqgfZyNX/likes',
  {
    method: 'POST',
    body:JSON.stringify ({
    item_id: id,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  .then((response) => response.text());
