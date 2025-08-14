"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const navItems = ["Home", "About", "Services", "Contact"];

export default function SmoothNavbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (hovered && containerRef.current) {
      const item = Array.from(containerRef.current.children).find(
        (li) => li.textContent === hovered
      ) as HTMLLIElement;
      if (item) {
        setUnderlineStyle({ left: item.offsetLeft, width: item.offsetWidth });
      }
    } else {
      setUnderlineStyle({ left: 0, width: 0 });
    }
  }, [hovered]);

  return (
    <nav className="relative w-full bg-gray-900 text-white px-6 py-4">
      <ul className="flex gap-6 relative" ref={containerRef}>
        {navItems.map((item) => (
          <li
            key={item}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            className="relative cursor-pointer px-3 py-1 font-medium"
          >
            {item}
          </li>
        ))}

        {/* Sliding underline */}
        <motion.div
          className="absolute bottom-0 h-1 bg-cyan-500 rounded"
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </ul>
    </nav>
  );
}
