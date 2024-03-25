import PropTypes from "prop-types";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Custom_nav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="text-white p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
            open === true ? 
            <RxCross1></RxCross1>
             : <RiMenu2Line></RiMenu2Line>
        }
      </div>
      <ul className={`md:flex absolute md:static bg-slate-500 p-6 ${open ? '': 'hidden'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Custom_nav;
