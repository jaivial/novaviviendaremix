import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ServiciosList from "~/components/ServiciosList";
import { useScreenWidth } from "~/ScreenWidthProvider";
import styles from "~/styles/index.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "Nova Vivienda" },
    { name: "description", content: "Bienvenido a Nova Vivienda" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "keywords",
      content:
        "Nova Vivienda, CRM inmobiliario, gestión inmobiliaria, software inmobiliario, inmobiliaria en Valencia, CRM para inmobiliarias, gestión de propiedades, sistema de CRM, software para inmobiliarias, herramientas para inmobiliarias, gestión de clientes, agencia inmobiliaria, venta de propiedades, alquiler de propiedades, CRM para ventas, software de gestión inmobiliaria, bienes raíces en Valencia, administración de propiedades, propiedades en venta, propiedades en alquiler, software de bienes raíces, Valencia inmobiliaria, administración inmobiliaria, captación de propiedades, CRM para agentes inmobiliarios, gestión de leads inmobiliarios, marketing inmobiliario, CRM para ventas inmobiliarias, alquiler de inmuebles, venta de inmuebles, administración de alquileres, automatización inmobiliaria, CRM de bienes raíces, marketing digital para inmobiliarias, captación de clientes inmobiliarios, gestión de contactos inmobiliarios, CRM para empresas inmobiliarias, propiedades en Valencia, CRM con integración de WhatsApp, seguimiento de clientes inmobiliarios, plataforma inmobiliaria, gestión de viviendas, software para gestión de inmuebles, inmobiliarias en Valencia, asesoría inmobiliaria, CRM con gestión de clientes, administración de inmuebles, sistema de gestión inmobiliaria, CRM para alquileres, tecnología inmobiliaria, software de administración inmobiliaria",
    },
  ];
};
const Index: React.FC = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const { screenWidth } = useScreenWidth();
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isH3Visible, setIsH3Visible] = useState(false);
  const [isH2Visible2, setIsH2Visible2] = useState(false);
  const [isH3Visible2, setIsH3Visible2] = useState(false);
  const [isVideoContainerVisible, setIsVideoContainerVisible] = useState(false);
  const [isVideoContainerVisible2, setIsVideoContainerVisible2] = useState(false);
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const navRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsH2Visible2(true);
            setIsH3Visible2(true);
            setIsVideoContainerVisible2(true);
          } else {
            setIsH2Visible2(false);
            setIsH3Visible2(false);
            setIsVideoContainerVisible2(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setViewportHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);
    setViewportHeight(window.innerHeight); // Set initial height

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        layer2Ref.current.style.opacity = 0;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
        layer2Ref.current.style.top = "780px";
        layer2Ref.current.style.transform = "translateY(0px)";
        layer2Ref.current.style.position = "fixed";
        layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
        layer2Ref.current.style.opacity = 1;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
      } else if (lastScrollY >= 260 && lastScrollY < 840) {
        layer2Ref.current.style.opacity = 1;
        // layer2Ref.current.style.position = "fixed";
        // layer2Ref.current.style.top = `${screenWidth >= 1290 ? 780 : screenWidth < 1200 ? 810 : screenWidth < 1070 ? 820 : screenWidth < 650 ? 835 : 845}px`;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
      } else if (lastScrollY >= 840) {
        layer2Ref.current.style.opacity = 0;
        layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
      }
    }

    if (layer3Ref.current) {
      layer3Ref.current.style.opacity = lastScrollY >= 320 && lastScrollY < 755 ? 1 : 0;
      layer3Ref.current.style.transition = `opacity 0.3s ease-in-out`;
    }

    if (navRef.current) {
      navRef.current.style.opacity = lastScrollY >= 260 ? 1 : 0;
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
              layer2Ref.current.style.opacity = 0;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
              layer2Ref.current.style.top = "780px";
              layer2Ref.current.style.transform = "translateY(0px)";
              layer2Ref.current.style.position = "fixed";
              layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
              layer2Ref.current.style.opacity = 1;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            } else if (lastScrollY > 260 && lastScrollY < 840) {
              layer2Ref.current.style.opacity = 1;
              // layer2Ref.current.style.position = "fixed";
              // layer2Ref.current.style.top = `${screenWidth >= 1290 ? 780 : screenWidth < 1200 ? 810 : screenWidth < 1070 ? 820 : screenWidth < 650 ? 835 : 845}px`;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            } else if (lastScrollY >= 840) {
              layer2Ref.current.style.opacity = 0;
              layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
            }
          }

          if (layer3Ref.current) {
            layer3Ref.current.style.opacity = lastScrollY >= 320 && lastScrollY < 755 ? 1 : 0;
            layer3Ref.current.style.transition = `opacity 0.3s ease-in-out`;
          }

          if (navRef.current) {
            navRef.current.style.opacity = lastScrollY >= 260 ? 1 : 0;
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

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    // Function to update scroll position
    const updateScrollPosition = () => {
      setScrollTop(window.scrollY || document.documentElement.scrollTop);
    };

    // Check the initial scroll position on mount
    updateScrollPosition();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollPosition);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/blackbg4edit2.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "1700px",
        }}
      >
        <nav ref={navRef} className="fixed top-0 left-0 right-0 px-16 w-fit mx-auto mt-3 rounded-xl py-auto z-[99] backdrop-blur-sm bg-gray-950 bg-opacity-50 opacity-0 flex flex-col justify-center items-center border-[0.9px] border-gray-400 border-opacity-50">
          <ul className="flex justify-center items-center w-fit px-8 mx-auto gap-8 text-gray-200 pt-4 text-sans font-medium pb-4 z-[99]">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Precios</a>
            </li>
            <li>
              <a href="/contact">Servicios</a>
            </li>
          </ul>
        </nav>
        <div className="fixed top-0 left-0 z-50">
          <p className="opacity-0">scrolling: {scrollY}</p>
          <p className="opacity-0">screenWidth: {screenWidth}</p>
          <p className="opacity-0">scrollTop: {scrollTop}</p>
        </div>
        <div
          ref={layer1Ref}
          className={`layer1 z-10`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            transform: "translateY(0px)", // Initial transform to avoid bouncing
            transition: "transform 0.1s ease-out", // Optional smoothness in movement
            ...(screenWidth < 1300
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "center",
                }
              : {}),
          }}
        >
          {screenWidth < 450 ? (
            <img
              src="/background2.png"
              alt="Background"
              style={{
                height: "auto",
                margin: "0",
                ...(screenWidth < 300
                  ? {
                      maxWidth: "215%",
                      width: "215%",
                      transform: "translateX(-30px)",
                    }
                  : screenWidth < 330
                  ? {
                      maxWidth: "200%",
                      width: "200%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 350
                  ? {
                      maxWidth: "200%",
                      width: "200%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 370
                  ? {
                      maxWidth: "200%",
                      width: "200%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 385
                  ? {
                      maxWidth: "200%",
                      width: "200%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 400
                  ? {
                      maxWidth: "190%",
                      width: "190%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 450
                  ? {
                      maxWidth: "150%",
                      width: "150%",
                      transform: "translateX(-20px)",
                    }
                  : {
                      maxWidth: "180%",
                      width: "180%",
                    }),
              }}
            />
          ) : (
            <img
              src="/background.png"
              alt="Background"
              style={{
                transition: "transform 0.5s ease-in-out",
                height: "auto",
                margin: "0",
                ...(screenWidth < 550
                  ? {
                      maxWidth: "200%",
                      width: "200%",
                      transform: "translateX(-30px)",
                    }
                  : screenWidth < 650
                  ? {
                      maxWidth: "180%",
                      width: "180%",
                    }
                  : screenWidth < 750
                  ? {
                      maxWidth: "160%",
                      width: "160%",
                    }
                  : screenWidth < 930
                  ? {
                      maxWidth: "140%",
                      width: "140%",
                    }
                  : {
                      maxWidth: "100%",
                      width: "100%",
                    }),
              }}
            />
          )}
        </div>

        <h1
          ref={layer2Ref}
          className={`font-bold p-0 mx-auto w-full text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] justify-center items-center ${
            screenWidth < 330
              ? "text-[2.5rem]"
              : screenWidth < 380
              ? "text-[3rem]"
              : screenWidth < 435
              ? "text-[3.5rem]"
              : screenWidth < 489
              ? "text-[4rem]"
              : screenWidth < 540
              ? "text-[4.5rem]"
              : screenWidth < 595
              ? "text-[5rem]"
              : screenWidth < 650
              ? "text-[5.5rem]"
              : screenWidth < 810
              ? "text-[6rem]"
              : screenWidth < 810
              ? "text-[7rem]"
              : screenWidth < 860
              ? "text-[7.5rem]"
              : screenWidth < 1070
              ? "text-[8rem]"
              : screenWidth < 1290
              ? "text-[10rem]"
              : screenWidth < 1490
              ? "text-[12rem]"
              : screenWidth < 1600
              ? "text-[14rem]"
              : "text-[15rem]"
          }`}
          style={{
            background: "linear-gradient(170deg, #f9fafb, #e5e7eb, #9ca3af, #6b7280)",
            color: "transparent",
            WebkitBackgroundClip: "text",
            transition: "all 0.5s ease-in-out",
            opacity: 1,
            textAlign: "center",
            marginTop: screenWidth < 330 ? "120px" : screenWidth < 380 ? "100px" : screenWidth < 435 ? "80px" : screenWidth < 1290 ? "50px" : "0",
          }}
        >
          Vivienda Nova
        </h1>

        <div
          ref={layer3Ref}
          className={`fixed left-[50%] translate-x-[-50%] z-[0]  opacity-0 ${
            screenWidth < 435 ? "w-[90%] top-[63%] translate-y-[-50%]" : screenWidth < 450 ? "w-[90%] top-[63%] translate-y-[-50%]" : screenWidth < 500 ? "w-[90%] top-[63%] translate-y-[-50%]" : screenWidth < 600 ? "w-[95%] top-[50%] translate-y-[-50%]" : screenWidth < 760 ? "w-[95%] top-[250px]" : screenWidth < 800 ? "top-[250px] w-[740px] " : "top-[330px] w-[780px]"
          }`}
        >
          <h2 className={`font-sans text-gray-50 font-semibold ${screenWidth < 430 ? "text-2xl" : "text-3xl"} text-center z-[5]`}>Una nueva forma de vender</h2>
          <img
            src={`${screenWidth < 500 ? "/iphone15v1.png" : "/imacMockup.png"}`}
            alt="imacMockup"
            style={{
              height: "auto",
              margin: "0 auto",
              ...(screenWidth < 360 && viewportHeight < 705
                ? { width: "75%", marginBottom: "30px" }
                : screenWidth < 390 && viewportHeight < 705
                ? { width: "70%", marginBottom: "30px" }
                : screenWidth < 430 && viewportHeight < 705
                ? { width: "65%", marginBottom: "30px" }
                : screenWidth < 500 && viewportHeight < 705
                ? { width: "52%" }
                : screenWidth < 360 && viewportHeight < 755
                ? { width: "75%", marginBottom: "50px" }
                : screenWidth < 390 && viewportHeight < 755
                ? { width: "75%", marginBottom: "50px" }
                : screenWidth < 430 && viewportHeight < 755
                ? { width: "75%", marginBottom: "50px" }
                : screenWidth < 500 && viewportHeight < 755
                ? { width: "58%", marginBottom: "50px" }
                : screenWidth < 360 && viewportHeight < 780
                ? { width: "80%", marginBottom: "60px" }
                : screenWidth < 390 && viewportHeight < 780
                ? { width: "80%", marginBottom: "60px" }
                : screenWidth < 430 && viewportHeight < 780
                ? { width: "76%", marginBottom: "60px" }
                : screenWidth < 500 && viewportHeight < 780
                ? { width: "65%", marginBottom: "60px" }
                : screenWidth < 360 && viewportHeight < 810
                ? { width: "85%", marginBottom: "80px" }
                : screenWidth < 390 && viewportHeight < 810
                ? { width: "85%", marginBottom: "80px" }
                : screenWidth < 430 && viewportHeight < 810
                ? { width: "80%", marginBottom: "65px" }
                : screenWidth < 500 && viewportHeight < 810
                ? { width: "68%", marginBottom: "50px" }
                : screenWidth < 360 && viewportHeight >= 810
                ? { width: "85%", marginBottom: "100px" }
                : screenWidth < 390 && viewportHeight >= 810
                ? { width: "85%", marginBottom: "100px" }
                : screenWidth < 430 && viewportHeight >= 810
                ? { width: "70%", marginBottom: "100px" }
                : screenWidth < 500 && viewportHeight >= 810
                ? { width: "70%", marginBottom: "100px" }
                : { width: "100%" }),
            }}
          />
        </div>
      </div>
      {/* Section 1 */}
      <div ref={sectionRef} className={`bg-black h-auto flex flex-col justify-start items-center gap-1 indexinfocontainer1 pb-20 transition-opacity duration-[1500ms] ease-in-out`}>
        <h2 className={`${isH2Visible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-50 font-sans ${screenWidth < 400 ? "text-3xl" : "text-4xl"} font-bold text-center`}>Controla tus inmuebles.</h2>
        <h3 className={`${isH3Visible ? "opacity-70" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center`}>Visualiza los datos.</h3>
        <div className={`bg-gray-700 h-auto relative z-10 ${screenWidth < 1280 ? "w-[95%]" : " w-[1200px]"} rounded-3xl border border-gray-800 bg-opacity-0 mt-4 ${isVideoContainerVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out`}>
          <div className="relative z-[10] w-full h-full">
            <video autoPlay loop muted playsInline className="w-full z-10 h-full object-cover p-2 rounded-3xl opacity-100">
              <source src="/video1.webm" type="video/webm" className="border border-gray-600 " />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute top-1/2 left-1/2 w-[103%] h-[103%] bg-white opacity-30 rounded-3xl blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        </div>
        <p className={`${isVideoContainerVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-400 font-sans font-medium pt-4 ${screenWidth < 400 ? "text-lg" : "text-xl"}  ${screenWidth <= 1000 ? "w-[90%]" : screenWidth <= 1500 ? "w-1/2" : "w-1/3"} text-center`}>
          <strong className="text-white">Busca tus inmuebles.</strong> Filtra las propiedades y analiza qué está ocurriendo en tu estrategia de venta.
        </p>
      </div>

      {/* Section 2 */}
      <div ref={sectionRef2} className={`h-auto flex flex-col justify-start items-center gap-1 indexinfocontainer1 ${screenWidth < 600 ? "pb-8" : "pb-20"} transition-opacity duration-[1500ms] ease-in-out`}>
        <div className={`h-auto relative z-10 ${screenWidth < 1280 ? "w-[95%]" : "w-[95%]"} rounded-3xl ${isVideoContainerVisible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out flex ${screenWidth < 600 ? "flex-col-reverse justify-center items-center mt-0" : "flex-row justify-between mt-10"} `}>
          <div className={`h-auto flex flex-col justify-center items-center ${screenWidth < 600 ? "w-full" : "w-1/2"} gap-4`}>
            <div className={`h-fit flex flex-col justify-center gap-4 ${screenWidth < 600 ? "items-center" : "items-start"}`}>
              <h2 className={`${isH2Visible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-50 font-sans font-bold ${screenWidth < 600 ? "text-center text-3xl pt-4" : "text-4xl"}`}>No es cómo vendes.</h2>
              <h3 className={`${isH3Visible2 ? "opacity-70" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-300 font-sans font-bold ${screenWidth < 600 ? "text-center text-2xl px-3" : "text-3xl"}`}>Es cómo organizas tu estrategia.</h3>
              <button className={`${isH3Visible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-950 bg-gray-100 p-2 px-3 font-sans text-lg font-medium rounded-xl`}>Empieza ya</button>
            </div>
          </div>
          <div className={`relative z-[10] h-full ${screenWidth < 600 ? "w-full" : "w-1/2"}`}>
            <div className="absolute top-1/2 left-1/2 w-[103%] h-[103%] bg-white opacity-30 rounded-3xl blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="relative z-[10]">
              <video autoPlay loop muted playsInline className="w-full z-10 h-full object-cover p-2 rounded-3xl opacity-100">
                <source src="/video2.webm" type="video/webm" className="border border-gray-600 " />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <ServiciosList />
    </div>
  );
};

export default Index;
