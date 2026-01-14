import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Menu, X, MessageCircle } from "lucide-react";
import BookingModal from "../Booking/BookingModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const navigate = useNavigate();


  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Book Service", href: "#Book Service", isCTA: true },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <div className="bg-white/80 backdrop-blur-md border border-white/80 px-8 py-4 rounded-full flex items-center justify-between shadow-lg">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer leading-tight"
        >
          <div className="text-2xl font-black tracking-tighter text-slate-900">
            FIXIFY
          </div>

          <div className="text-1xl font-medium text-slate-500 tracking-wide">
            At your service
          </div>
        </motion.div>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.isCTA
                  ? "bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition"
                  : "text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              }
            >
              {link.name}
            </a>
          ))}
        </div>


        {/* Social Icons & CTA */}
        <div className="hidden md:flex items-center gap-5 pl-5 border-l border-slate-200">

          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={18} className="text-slate-400 hover:text-pink-500" />
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={18} className="text-slate-400 hover:text-blue-600" />
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={18} className="text-slate-400 hover:text-sky-500" />
          </a>

          <a
            href="https://wa.me/919130804848?text=Hello%20Fixify,%20I%20need%20a%20service"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle
              size={18}
              className="text-slate-400 hover:text-green-500 cursor-pointer"
            />
          </a>

          <BookingModal open={openBooking} onClose={() => setOpenBooking(false)} />
        </div>


        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-2xl shadow-lg py-4 px-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                link.isCTA
                  ? "block text-center mt-3 bg-slate-900 text-white py-2 rounded-full font-semibold hover:bg-slate-800"
                  : "block py-2 text-slate-700 font-medium hover:text-blue-600"
              }
            >
              {link.name}
            </a>
          ))}
          {/* Mobile Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={20} />
            </a>
            <a
              href="https://wa.me/919130804848?text=Hello%20Fixify,%20I%20need%20a%20service"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle
                size={18}
                className="text-slate-400 hover:text-green-500 cursor-pointer"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
