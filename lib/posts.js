import fetch from 'node-fetch';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//fetchを使って、apiUrlから全てのブログデータを取得するための関数
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

//idの一覧を取得するための関数
export async function getAllPostsIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//特定のidを使って、データベースからビルド時にデータを取得するための関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}`));
  const post = await res.json();

  return post;
}

