import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const toggleState = useSelector((store) => store.app.isMenuOpen);

  //Early Return Pattern or can use ternary operator pattern
  if (!toggleState) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Games</li>
        <li>Study</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Games</li>
        <li>Study</li>
      </ul>
    </div>
  );
};

export default Sidebar;
