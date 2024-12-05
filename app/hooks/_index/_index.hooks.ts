import { LayoutGroupContext } from "framer-motion";
import { useEffect, useState, useRef } from "react"; 

export const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
}

export const useObserverIndex = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isH2Visible, setIsH2Visible] = useState<boolean>(false);
    const [isH3Visible, setIsH3Visible] = useState<boolean>(false);
    const [isVideoContainerVisible, setIsVideoContainerVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsH2Visible(true);
                setIsH3Visible(true);
                setIsVideoContainerVisible(true);
              } else {
                setIsH2Visible(false);
                setIsH3Visible(false);
                setIsVideoContainerVisible(false);
              }
            });
          },
          { threshold: 0.5 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);

      return { sectionRef, isH2Visible, isH3Visible, isVideoContainerVisible };
}

export const useObserverIndex2 = () => {
    const sectionRef2 = useRef<HTMLDivElement>(null);
    const [isH2Visible2, setIsH2Visible2] = useState<boolean>(false);
    const [isH3Visible2, setIH3Visible2] = useState<boolean>(false);
    const [isVideoContainerVisible2, setIsVideoContainerVisible2] = useState<boolean>(false);

    useEffect(() => {
       const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsH2Visible2(true);
                    setIH3Visible2(true);
                    setIsVideoContainerVisible2(true);
                } else {
                    setIsH2Visible2(false);
                    setIH3Visible2(false);
                    setIsVideoContainerVisible2(false);
                }
            });
        },
        {threshold: 0.5}
       );

       if (sectionRef2.current) {
        observer.observe(sectionRef2.current);
       }

       return () => {
        if (sectionRef2.current) {
            observer.unobserve(sectionRef2.current);
        }
       };            
    }, [])

    return { sectionRef2, isH2Visible2, isH3Visible2, isVideoContainerVisible2 }
}

export const useViewportHeight = () => {
    const [viewportHeight, setViewportHeight] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => setViewportHeight(window.innerHeight);

        window.addEventListener("resize", handleResize);
        setViewportHeight(window.innerHeight);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return { viewportHeight };
}

export const useScrollY = () => {
    const layer1Ref = useRef<HTMLDivElement>(null);
    const layer2Ref = useRef<HTMLDivElement>(null);
    const layer3Ref = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState<Number>(0);

    useEffect(() => {
        let lastScrollY = window.scrollY; // Capture the initial scroll position
        setScrollY(lastScrollY); // Set the initial scroll position in state if needed
        let ticking = false;
    
        // Set initial style for page load
        if (layer2Ref.current) {
          if (lastScrollY >= 0 && lastScrollY < 260) {
            layer2Ref.current.style.position = "relative";
            layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
          }
        }
    
        // Set initial transforms and styles based on lastScrollY for page load
        if (layer1Ref.current) {
          layer1Ref.current.style.transform = `translateY(${lastScrollY * 3}px)`;
        }
    
        if (layer2Ref.current) {
          if (lastScrollY >= 0 && lastScrollY < 260) {
            layer2Ref.current.style.opacity = '0';
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            layer2Ref.current.style.top = "780px";
            layer2Ref.current.style.transform = "translateY(0px)";
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
            layer2Ref.current.style.opacity = '1';
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (lastScrollY >= 260 && lastScrollY < 840) {
            layer2Ref.current.style.opacity = '1';
            // layer2Ref.current.style.position = "fixed";
            // layer2Ref.current.style.top = `${screenWidth >= 1290 ? 780 : screenWidth < 1200 ? 810 : screenWidth < 1070 ? 820 : screenWidth < 650 ? 835 : 845}px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (lastScrollY >= 840) {
            layer2Ref.current.style.opacity = '0';
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          }
        }
    
        if (layer3Ref.current) {
          layer3Ref.current.style.opacity = lastScrollY >= 320 && lastScrollY < 755 ? '1' : '0';
          layer3Ref.current.style.transition = `opacity 0.3s ease-in-out`;
        }
    
        if (navRef.current) {
          navRef.current.style.opacity = lastScrollY >= 260 ? '1' : '0';
          navRef.current.style.transition = `opacity 1s ease-in-out`;
        }
    
        // Scroll event handler to update styles on scroll
        const handleScroll = () => {
          lastScrollY = window.scrollY;
          setScrollY(lastScrollY);
    
          if (!ticking) {
            window.requestAnimationFrame(() => {
              if (layer1Ref.current) {
                layer1Ref.current.style.transform = `translateY(${lastScrollY * 3}px)`;
              }
    
              if (layer2Ref.current) {
                if (lastScrollY >= 0 && lastScrollY < 260) {
                  layer2Ref.current.style.opacity = '0';
                  layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
                  layer2Ref.current.style.top = "780px";
                  layer2Ref.current.style.transform = "translateY(0px)";
                  layer2Ref.current.style.position = "fixed";
                  layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
                  layer2Ref.current.style.opacity = '1';
                  layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
                } else if (lastScrollY > 260 && lastScrollY < 840) {
                  layer2Ref.current.style.opacity = '1';
                  // layer2Ref.current.style.position = "fixed";
                  // layer2Ref.current.style.top = `${screenWidth >= 1290 ? 780 : screenWidth < 1200 ? 810 : screenWidth < 1070 ? 820 : screenWidth < 650 ? 835 : 845}px`;
                  layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
                } else if (lastScrollY >= 840) {
                  layer2Ref.current.style.opacity = '0';
                  layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
                }
              }
    
              if (layer3Ref.current) {
                layer3Ref.current.style.opacity = lastScrollY >= 320 && lastScrollY < 755 ? '1' : '0';
                layer3Ref.current.style.transition = `opacity 0.3s ease-in-out`;
              }
    
              if (navRef.current) {
                navRef.current.style.opacity = lastScrollY >= 260 ? '1' : '0';
                navRef.current.style.transition = `opacity 1s ease-in-out`;
              }
    
              ticking = false;
            });
            ticking = true;
          }
        };
    
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  
      return { scrollY, layer1Ref, layer2Ref, layer3Ref, navRef }
}

