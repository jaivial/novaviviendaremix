// app/components/_index/IndexContainer.tsx
import { useEffect, useState, useRef } from "react";
import { useScrollToTop, useObserverIndex, useObserverIndex2, useViewportHeight, useScrollY } from "~/hooks/_index/_index.hooks";
import ServiciosList from "~/components/ServiciosList";
import { useScreenWidth } from "~/ScreenWidthProvider";
import IndexComponents2 from "~/components/IndexComponent2";
import IndexComponent3 from "~/components/IndexComponent3";
import IndexComponent4 from "~/components/IndexComponent4";
import IndexComponent5 from "~/components/IndexComponent5";
import Section1 from "./Section1";
import Section2 from "./Section2";

const IndexContainer: React.FC = () => {
  useScrollToTop();
  const { sectionRef, isH2Visible, isH3Visible, isVideoContainerVisible } = useObserverIndex();
  const { sectionRef2, isH2Visible2, isH3Visible2, isVideoContainerVisible2 } = useObserverIndex2();
  const { viewportHeight } = useViewportHeight();
  const { screenWidth } = useScreenWidth();
  const { scrollY, layer1Ref, layer2Ref, layer3Ref, navRef } = useScrollY();

  return (
    <div className="bg-black">
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
        <nav ref={navRef} className={`fixed top-0 left-0 right-0 ${screenWidth < 450 ? "w-[95%] px-0 flex flex-row justify-center items-center" : "w-fit px-16"} mx-auto mt-3 rounded-xl py-auto z-[99] backdrop-blur-sm bg-gray-950 bg-opacity-50 opacity-0 flex flex-col justify-center items-center border-[0.9px] border-gray-400 border-opacity-50`}>
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
          <p className="opacity-0">scrolling: {String(scrollY)}</p>
          <p className="opacity-0">screenWidth: {screenWidth}</p>
          <p className="opacity-0">screenWidth: {screenWidth}</p>
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
                      maxWidth: "145%",
                      width: "145%",
                      transform: "translateX(-30px)",
                    }
                  : screenWidth < 330
                  ? {
                      maxWidth: "140%",
                      width: "140%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 350
                  ? {
                      maxWidth: "135%",
                      width: "135%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 370
                  ? {
                      maxWidth: "130%",
                      width: "130%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 385
                  ? {
                      maxWidth: "130%",
                      width: "130%",
                      transform: "translateX(-20px)",
                    }
                  : screenWidth < 400
                  ? {
                      maxWidth: "120%",
                      width: "120%",
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
      <Section1 sectionRef={sectionRef} screenWidth={screenWidth} isH2Visible={isH2Visible} isH3Visible={isH3Visible} isVideoContainerVisible={isVideoContainerVisible} />
      {/* Section 2 */}
      <Section2 sectionRef2={sectionRef2} screenWidth={screenWidth} isH2Visible2={isH2Visible2} isH3Visible2={isH3Visible2} isVideoContainerVisible2={isVideoContainerVisible2} />
      <ServiciosList />
      <IndexComponents2 />
      <IndexComponent3 />
      <IndexComponent4 />
      <IndexComponent5 />
    </div>
  );
};

export default IndexContainer;
