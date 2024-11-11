import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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

export default function Index() {
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const navRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;
    if (typeof window !== "undefined") {
      lastScrollY = window.scrollY; // Initial value at page load

      // Update the value on scroll
      window.addEventListener("scroll", () => {
        lastScrollY = window.scrollY;
        console.log("Top of viewport Y position:", lastScrollY);
      });
    }
    let ticking = false;

    const handleScroll = () => {
      setScrollY(lastScrollY);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (layer1Ref.current) {
            layer1Ref.current.style.transform = `translateY(${lastScrollY * 3}px)`;
          }

          if (layer2Ref.current && lastScrollY <= 0) {
            layer2Ref.current.style.opacity = 0;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY > 0 && lastScrollY < 260) {
            layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
            layer2Ref.current.style.opacity = 1;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY <= 260) {
            layer2Ref.current.style.transform = `translateY(${lastScrollY * -3}px)`;
          } else if (layer2Ref.current && lastScrollY > 260 && lastScrollY < 1200 && screenWidth < 330) {
            layer2Ref.current.style.opacity = 100;
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.top = `855px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY > 260 && lastScrollY < 1200 && screenWidth < 435) {
            layer2Ref.current.style.opacity = 100;
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.top = `845px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY > 260 && lastScrollY < 1200 && screenWidth < 650) {
            layer2Ref.current.style.opacity = 100;
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.top = `835px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY > 260 && lastScrollY < 1200 && screenWidth < 1070) {
            layer2Ref.current.style.opacity = 100;
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.top = `820px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY > 260 && lastScrollY < 1200 && screenWidth < 1290) {
            layer2Ref.current.style.opacity = 100;
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.top = `810px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY > 260 && lastScrollY < 1200 && screenWidth >= 1290) {
            layer2Ref.current.style.opacity = 100;
            layer2Ref.current.style.position = "fixed";
            layer2Ref.current.style.top = `780px`;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          } else if (layer2Ref.current && lastScrollY >= 1200) {
            layer2Ref.current.style.opacity = 0;
            layer2Ref.current.style.transition = `opacity 0.6s ease-in-out`;
          }

          if (navRef.current && lastScrollY < 260) {
            navRef.current.style.opacity = 0;
          } else if (navRef.current && lastScrollY >= 260) {
            navRef.current.style.opacity = 1;
            navRef.current.style.transition = `opacity 1s ease-in-out`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Set initial width in case of rehydration or client-side only
    setScreenWidth(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
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
        <nav ref={navRef} className="fixed top-0 left-0 w-full opacity-0">
          <ul className="flex justify-center items-center w-fit px-8 mx-auto gap-8 text-white pt-8 text-sans font-medium border-b border-white pb-4">
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
          <p>scrolling: {scrollY}</p>
          <p>screenWidth: {screenWidth}</p>
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
        <div className={`z-0 h-[1400px] w-full relative transition-transform duration-75 ease-in-out opacity-100 flex justify-center items-end`}>
          <h1
            ref={layer2Ref}
            className={`font-bold p-0 m-0 text-center relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] justify-center items-center ${
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
            }}
          >
            Vivienda Nova
          </h1>
        </div>
      </div>
      <div className="bg-black h-[20000px]"></div>
    </div>
  );
}
