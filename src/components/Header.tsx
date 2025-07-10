
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "home" && location.pathname === "/") return true;
    return location.pathname === path;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <img 
                src="/lovable-uploads/cd6d1f49-3050-4b8d-8157-8753bebd372a.png" 
                alt="Journa Professional Corporation" 
                className="h-8"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", action: () => scrollToSection("home"), path: "/" },
              { name: "Services", to: "/services", path: "/services" },
              { name: "About", to: "/about", path: "/about" },
              { name: "Contact", to: "/contact", path: "/contact" }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className={`transition-colors relative ${
                      isActive(item.path) 
                        ? "text-primary font-semibold" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className={`transition-colors relative ${
                      isActive(item.path) 
                        ? "text-primary font-semibold" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-border mt-2 pt-4 pb-4 overflow-hidden"
            >
              <nav className="flex flex-col space-y-4">
                {[
                  { name: "Home", action: () => scrollToSection("home"), path: "/" },
                  { name: "Services", to: "/services", path: "/services" },
                  { name: "About", to: "/about", path: "/about" },
                  { name: "Contact", to: "/contact", path: "/contact" }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.to ? (
                      <Link
                        to={item.to}
                        className={`transition-colors text-left ${
                          isActive(item.path) 
                            ? "text-primary font-semibold" 
                            : "text-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className={`transition-colors text-left ${
                          isActive(item.path) 
                            ? "text-primary font-semibold" 
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
