import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <Link to="/">홈페이지</Link>
      <br />
      <Link to="/post">포스트 목록 페이지</Link>
      <br />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
