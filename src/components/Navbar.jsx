import React, { Component, useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleNavigate = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="navbar py-7 px-5 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Vito's Porto
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        } `}
      >
        <li>
          <a
            href="#beranda"
            onClick={handleNavigate}
            className="sm:text-lg text-base font-medium"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            onClick={handleNavigate}
            className="sm:text-lg text-base font-medium"
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            onClick={handleNavigate}
            className="sm:text-lg text-base font-medium"
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            onClick={handleNavigate}
            className="sm:text-lg text-base font-medium"
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};
