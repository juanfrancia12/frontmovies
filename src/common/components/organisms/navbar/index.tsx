import NavItem from "@atoms/nav-item"
import { NAVBAR_ITEMS } from "@constants/header.constant"
import { useState } from "react"

const NavBar = (): JSX.Element => {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className="md:flex justify-between items-center">
      {showNav ? (
        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden block w-10 h-10 p-2 cursor-pointer bg-black/40 rounded-full text-center font-bold"
        >
          -
        </button>
      ) : (
        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden block w-10 h-10 p-2 cursor-pointer bg-black/40 rounded-full text-center font-bold"
        >
          +
        </button>
      )}

      <ul
        className={`${
          showNav ? "left-0" : "-left-full"
        } container px-2 py-8 fixed top-20 left-0 right-0 bottom-0 flex flex-col items-center gap-8 bg-gray-700 transition-[left] md:static md:w-auto md:flex-row md:bg-transparent font-bold`}
      >
        {NAVBAR_ITEMS.map(({ id, value, href }) => {
          return <NavItem key={id} value={value} href={href} />
        })}
        {/* <hr className="h-7 w-[1px] bg-gray-400/70" /> */}
        {/* <span className="hidden md:flex p-2 bg-blue-500/50">ICON</span> */}
        {/* <span className="hidden md:flex p-2 bg-blue-500/50">ICON</span> */}
      </ul>
    </nav>
  )
}

export default NavBar

/****
md:space-x-7 md:items-center md:bg-transparent bg-opacity-90 w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-[left]

*/

/****
md:static fixed top-20 left-0 right-0 bottom-0 flex flex-col md:flex-row md:space-x-7 md:items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-[left]

*/

/*
  <nav className="md:flex justify-between items-center">
      <div className="flex items-center justify-between">
        <span className="md:hidden flex">8</span>

        {showNav ? (
          <div
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          >
            -
          </div>
        ) : (
          <div
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          >
            +
          </div>
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 top-20 flex flex-col md:flex-row md:space-x-7 md:items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-[left]"
        }
      >
        {NAVBAR_ITEMS.map(({ id, value, href }) => {
          return <NavItem key={id} value={value} href={href} />;
        })}
        <span className="hidden md:flex">CAR</span>
      </ul>
    </nav>
*/
