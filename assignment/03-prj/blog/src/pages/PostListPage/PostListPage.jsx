import { Link, useLoaderData } from "react-router-dom";
function PostListPage() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>포스트 리스트</h1>
      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default PostListPage;
