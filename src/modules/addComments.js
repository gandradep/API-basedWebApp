const addComment = (user, message, id) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GZc42DTMDGJQZqgfZyNX/comments',
  {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: message,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  .then((response) => response.text());

export default addComment;
