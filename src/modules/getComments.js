const getComments = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GZc42DTMDGJQZqgfZyNX/comments?item_id=2')
  .then((response) => response.json())
  .then(async (json) => {
    const resPromise = await json;
    return resPromise;
  });

export default getComments;