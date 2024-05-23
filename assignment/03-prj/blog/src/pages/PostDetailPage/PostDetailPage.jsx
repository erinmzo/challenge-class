import { useLoaderData } from "react-router-dom";
function PostDetailPage() {
  const post = useLoaderData();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetailPage;
