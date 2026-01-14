import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight, Menu, X, Rocket } from "lucide-react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { tools } from "../data/tools";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = () => {
      if (toolsOpen) setToolsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toolsOpen]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 mt-4 right-0 z-50 px-2 lg:px-10"
    >
      <nav className="max-w-5xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between h-16 px-4">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">
              <img src={logo} alt="Resumon" className="w-30 rounded-lg object-contain" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            <motion.div
              className="relative"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.button
                whileHover={{ y: -1 }}
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 text-sm text-[#24272E] hover:text-[#149369]"
              >
                Tools {toolsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </motion.button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-8 left-0 bg-white rounded-lg shadow-lg border py-2 w-50"
                  >
                    {tools.map((tool, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(tool.path);
                          setToolsOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition"
                      >
                        {tool.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {["Pricing", "Templates", "Support"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-[#24272E] hover:text-[#149369]"
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex"
          >
            <button
              onClick={() => navigate("/")}
              className="flex gap-1 items-center bg-[#EB904A] text-white cursor-pointer px-4 py-2.5 rounded-lg text-sm hover:bg-[#d67f3d]"
            >
              Coming Soon <Rocket className="w-4 h-4 ml-1" />
            </button>
          </motion.div>

          {/* Mobile Toggle */}
          <div className="sm:hidden">
            <button onClick={() => setMenu(!menu)}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-14 right-4 bg-white rounded-lg shadow-md flex flex-col w-40 py-2 px-2 sm:hidden"
          >
            {["Pricing", "Templates", "Support"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  navigate(`/${item.toLowerCase()}`);
                  setMenu(false);
                }}
                className="text-left text-sm px-2 py-1 hover:bg-gray-100 rounded-md"
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => navigate("/get-started")}
              className="mt-2 bg-[#FDE7D9] text-[#EB904A] px-3 py-2 rounded-lg text-sm"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
