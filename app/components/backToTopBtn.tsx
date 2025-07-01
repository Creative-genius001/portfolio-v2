import { useEffect, useState } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (  
        <FaCircleArrowUp onClick={scrollToTop} className='float-bounce z-[1000] text-[#0a0a0a] float-btn md:text-[2.5rem] fixed md:bottom-12 md:right-20 hover:text-gray-800 transition-all duration-300'/> 
    )
  );
}
