import { NavLink } from "react-router-dom";

type Props = {
  href: string;
  value: string;
};

const NavItem = ({ href, value }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-red-500 leading-8 border-b border-red-500/70 tracking-wider"
          : "text-gray-400 leading-8 border-b border-transparent tracking-wider"
      }
      to={href}
    >
      {value}
    </NavLink>
  );
};

export default NavItem;
