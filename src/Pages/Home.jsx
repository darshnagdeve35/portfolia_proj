import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="TodoList">TodoList </Link>
      <br />
      <Link to="Calculator"> Calculator</Link>
      <br />
      <Link to="EmojiSearch"> pg3</Link>
      {console.log("hi")}
    </>
  );
}

export default Home;
