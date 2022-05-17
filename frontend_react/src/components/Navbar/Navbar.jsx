import React, { useState } from "react";
import { HimenuALT4, hIx } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div>
              
            </motion.div>
          )
        
        }
      </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import "./Navbar.scss";
// import { images } from "../../constants";
// function Navbar() {
//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} />
//       </div>
//       <ul className="app__navbar-links">
//         {["Home", "About", "contact", "skills", "work"].map((obj) => (
//           <li className="app__flex p-text" key={obj}>
//             <div />
//             <a href={`#${obj}`}>{obj}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
