import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const getResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480 + 1);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 800 + 1);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 480 + 1);
    setIsTablet(window.innerWidth < 800 + 1);
  };

  useEffect(() => {
    const debouncedHandler = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedHandler);

    return () => window.removeEventListener("resize", debouncedHandler);
  }, []);

  return { isMobile, isTablet };
};

export default getResponsive;
