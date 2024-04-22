import { useEffect, useRef, useState } from "react";

const useDynamicHeight = () => {
  const [minHeight, setMinHeight] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateMinHeight = () => {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const footerHeight = document.querySelector("footer")?.offsetHeight || 0;
      const availableHeight =
        window.innerHeight - navbarHeight - heroHeight - footerHeight;
      setMinHeight(availableHeight);
    };

    // Recalculate minimum height when the window is resized
    const handleResize = () => calculateMinHeight();
    window.addEventListener("resize", handleResize);

    // Initial calculation when the component mounts
    calculateMinHeight();

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { minHeight, heroRef };
};

export default useDynamicHeight;
