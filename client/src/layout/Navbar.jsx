export default function Navbar() {
  return (
    <nav className=" bg-primary ">
      <div className="container navbar flex justify-between ">
        <a href="#" className="font-PlayfairDisplay hidden md:block">
          Arinata <span className="font-Pinyon px-1">And</span> Sulastriani
        </a>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Our Story</a>
            </li>
            <li>
              <a>Event Sechedule</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a>Comment</a>
            </li>
          </ul>
        </div>

        <ul className="hidden md:flex ">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Event Sechedule</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Comment</a>
          </li>
        </ul>
        <a
          href="#"
          className="font-PlayfairDisplay md:hidden italic text-white"
        >
          Arinata <span className="font-Pinyon px-1">&</span> Sulastriani
        </a>
      </div>
    </nav>
  );
}
