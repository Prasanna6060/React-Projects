import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Navigation = () => {
  return (
    <nav className="flex justify-around p-4 items-center">
    <div className="nav-container">
      <input
        className="search-input outline-none"
        type="text"
        // onChange={handleInputChange}
        // value={query}
        placeholder="Enter your search shoes."
      />
    </div>
    <div className="profile-container flex gap-3">
      <a href="#">
        <FiHeart className="nav-icons" />
      </a>
      <a href="">
        <AiOutlineShoppingCart className="nav-icons" />
      </a>
      <a href="">
        <AiOutlineUserAdd className="nav-icons" />
      </a>
    </div>
  </nav>
  )
}

export default Navigation;