
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target;
      setHovering(
        !!target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      );
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  return (
    <>
      {/* Outer cyber ring */}
      <div
        className={`custom-cursor-ring ${hovering ? "cursor-hover" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: position.x,
          top: position.y,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
