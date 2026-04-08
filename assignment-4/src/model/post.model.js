let posts = [
  { id: 1, title: "First Post", content: "Hello World" }
];

export const getPosts = () => posts;

export const getPostById = (id) => {
  return posts.find(p => p.id == id);
};

export const createPost = (title, content) => {
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
};