import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const backgroundAiImageRef = useRef<HTMLDivElement>(null);
  const titleChangeRef = useRef<HTMLHeadingElement>(null);
  const titleContainerRef = useRef<HTMLHeadingElement>(null);
  const frenchflairRef = useRef<HTMLDivElement>(null);
  const paymenowRef = useRef<HTMLDivElement>(null);
  const musicaRef = useRef<HTMLDivElement>(null);
  const opquastRef = useRef<HTMLDivElement>(null);

  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .set(titleContainerRef.current, { x: "-50%", y: "-50%" })
        .set(titleChangeRef.current, { fontSize: "10vh", lineHeight: "15vh" })
        .set(frenchflairRef.current, { x: "-100%", opacity: 0 })
        .set(paymenowRef.current, { x: "100%", opacity: 0 })
        .set(musicaRef.current, { x: "-100%", opacity: 0 })
        .set(opquastRef.current, {
          x: "-50%",
          y: "-50%",
          z: -1000,
          rotateZ: "12deg",
          rotateY: "-38deg",
          rotateX: "28deg",
          opacity: 0,
        })
        .fromTo(
          backgroundAiImageRef.current,
          {
            opacity: 0.8,
            clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0 50%)",
          },
          {
            duration: 2,
            delay: 0.1,
            ease: "expo.inOut",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
          }
        )
        .add("experiences", ">")
        .to(
          titleChangeRef.current,
          {
            duration: 0.5,
            ease: "expo.inOut",
            top: "-100%",
          },
          "experiences"
        )
        .to(
          backgroundAiImageRef.current,
          {
            duration: 4,
            ease: "ease.out",
            opacity: 0,
          },
          "experiences+=1"
        )
        .to(
          titleContainerRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            top: "0",
            left: "0",
            x: "30",
            y: "0",
          },
          "experiences+=1"
        )
        .to(
          titleChangeRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            fontSize: "5vh",
          },
          "experiences+=1"
        )
        .to(
          frenchflairRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            opacity: 1,
            x: 0,
          },
          "experiences+=1.5"
        )
        .to(
          paymenowRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            opacity: 1,
            x: 0,
          },
          "experiences+=1.6"
        )
        .to(
          musicaRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            opacity: 1,
            x: 0,
          },
          "experiences+=1.7"
        )
        .to(
          frenchflairRef.current,
          {
            duration: 1,
            ease: "expo.in",
            opacity: 0,
            x: "100%",
          },
          "experiences+=2.6"
        )
        .to(
          paymenowRef.current,
          {
            duration: 1,
            ease: "expo.in",
            opacity: 0,
            x: "-100%",
          },
          "experiences+=2.7"
        )
        .to(
          musicaRef.current,
          {
            duration: 1,
            ease: "expo.in",
            opacity: 0,
            x: "100%",
          },
          "experiences+=2.8"
        )
        .to(
          titleContainerRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          },
          "experiences+=3.5"
        )
        .to(
          titleChangeRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            fontSize: "10vh",
            lineHeight: "15vh",
          },
          "experiences+=3.5"
        )
        .add("certification", ">")
        .to(
          titleChangeRef.current,
          {
            duration: 0.5,
            ease: "expo.inOut",
            top: "-200%",
          },
          "certification"
        )
        .to(
          titleContainerRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            top: "0",
            left: "0",
            x: "30",
            y: "0",
          },
          "certification+=1.5"
        )
        .to(
          titleChangeRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            fontSize: "5vh",
          },
          "certification+=1.5"
        )
        .to(
          opquastRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            rotateZ: "0deg",
            rotateY: "0deg",
            rotateX: "0deg",
            x: "-50%",
            y: "-50%",
            z: 0,
            opacity: 1,
          },
          "certification+=1.5"
        )
        .to(
          opquastRef.current,
          {
            duration: 1,
            ease: "expo.in",
            rotateZ: "-12deg",
            rotateY: "38deg",
            rotateX: "28deg",
            x: "-50%",
            y: "-50%",
            z: -1000,
            opacity: 0,
          },
          "certification+=3"
        )
        .to(
          titleContainerRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          },
          "certification+=3.8"
        )
        .to(
          titleChangeRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            fontSize: "10vh",
            lineHeight: "15vh",
          },
          "certification+=3.8"
        )
        .add("temoignages", ">")
        .to(
          titleChangeRef.current,
          {
            duration: 0.5,
            ease: "expo.inOut",
            top: "-300%",
          },
          "temoignages"
        )
        .to(
          titleContainerRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            top: "0",
            left: "0",
            x: "30",
            y: "0",
          },
          "temoignages+=1.5"
        )
        .to(
          titleChangeRef.current,
          {
            duration: 1,
            ease: "expo.Out",
            fontSize: "5vh",
          },
          "temoignages+=1.5"
        );
      tl.current.pause();
      tl.current.seek(0.1);
      // tl.current.progress(0.5);
    },
    { scope: containerRef }
  );

  const calculateScrollPercent = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight;
      const clientHeight = scrollRef.current.clientHeight;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (tl.current) {
        const timelinePercent = (scrollPercent / 100) * tl.current.duration();
        tl.current.progress(timelinePercent / tl.current.duration());
        console.log(
          "Scroll:",
          Math.round(scrollPercent),
          "Timeline Percent:",
          Math.round((timelinePercent / tl.current.duration()) * 100)
        );
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", calculateScrollPercent);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", calculateScrollPercent);
      }
    };
  }, []);

  return (
    <div
      className="h-full overflow-y-scroll w-full relative bg-black"
      ref={scrollRef}
    >
      <div id="scroll" className="h-[1500vh] w-full"></div>
      <div
        className=" h-screen w-full fixed top-0 left-0 pointer-events-none [perspective:800px]"
        ref={containerRef}
      >
        <div
          className="h-full w-full absolute bg-[url(https://akirav.art/akiravaladeillustration.png)] bg-center bg-no-repeat bg-cover"
          style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0 50%)" }}
          ref={backgroundAiImageRef}
        ></div>
        <div
          className="h-full w-full absolute top-0 left-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, .15) .2vh, transparent .2vh), linear-gradient(90deg, rgba(255, 255, 255, .15) .2vh, transparent .2vh)",
            backgroundSize: "8vh 8vh",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div
          className="top-1/2 left-1/2 h-[15vh] overflow-y-hidden absolute min-w-fit"
          ref={titleContainerRef}
        >
          <h1
            className="relative text-white text-xxxxl text-center top-0 font-primaryFont flex flex-col"
            ref={titleChangeRef}
          >
            <span>ABOUT</span>
            <span>EXPÉRIENCES</span>
            <span>CERTIFICATION</span>
            <span>TEMOIGNAGES</span>
          </h1>
        </div>
        <section className="w-[90vw] flex gap-10 flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            ref={frenchflairRef}
            className="w-full px-4 py-2 h-[10vh] bg-white text-black flex justify-center items-center gap-4"
          >
            <h2 className="min-w-max text-xxxl font-primaryFont text-[#299b85]">
              FRENCHFLAIR
            </h2>
            <div className="w-full h-[1px] bg-black"></div>
            <p className=" min-w-max text-xl">
              Gestion et création des sites et <br />
              experiences digitales
            </p>
            <div className="w-full h-[1px] bg-black"></div>
            <p className="min-w-max px-4 py-2  rounded-full border border-solid border-black">
              Alternance - 8 mois
            </p>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="bg-[#299b85] min-w-32 h-full"></div>
          </div>

          <div
            ref={paymenowRef}
            className="w-full px-4 py-2 h-[10vh] bg-white text-black flex justify-center items-center gap-4"
          >
            <h2 className=" min-w-max text-xxxl font-primaryFont text-black">
              PAY ME NOW
            </h2>
            <div className="w-full h-[1px] bg-black"></div>
            <p className=" min-w-max text-xl">
              Redesign Ui et front end, <br />
              création du nouveau site web
            </p>
            <div className="w-full h-[1px] bg-black"></div>
            <p className="min-w-max px-4 py-2  rounded-full border border-solid border-black">
              Stage - 2 mois
            </p>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="bg-black min-w-32 h-full"></div>
          </div>
          <div
            ref={musicaRef}
            className="w-full px-4 py-2 h-[10vh] bg-white text-black flex justify-center items-center gap-4"
          >
            <h2 className=" min-w-max  text-xxxl font-primaryFont text-[#e63165]">
              MUSICA
            </h2>
            <div className="w-full h-[1px] bg-black"></div>
            <p className=" min-w-max text-xl">
              Mise en place du nouveau <br />
              site web de e commerce
            </p>
            <div className="w-full h-[1px] bg-black"></div>
            <p className="min-w-max px-4 py-2  rounded-full border border-solid border-black">
              Stage - 2 mois
            </p>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="bg-[#e63165] min-w-32 h-full"></div>
          </div>
        </section>
        <section
          className="w-[80vw] flex h-[45vh] top-1/2 left-1/2 absolute"
          ref={opquastRef}
        >
          <div
            className="h-[45vh] aspect-square bg-white p-14 border-r-2 border-black border-dashed"
            style={{
              clipPath:
                "polygon(4vh 0,calc(100% - 4vh) 0,100% 4vh,100% calc(100% - 4vh),calc(100% - 4vh) 100%,4vh 100%,0 calc(100% - 4vh),0 4vh)",
            }}
          >
            <div className="h-full bg-[#03707d] w-full"></div>
          </div>
          <div
            className=" h-full bg-white border-l-2 border-black border-dashed py-5 flex flex-col gap-5"
            style={{
              clipPath:
                "polygon(4vh 0,calc(100% - 4vh) 0,100% 4vh,100% calc(100% - 4vh),calc(100% - 4vh) 100%,4vh 100%,0 calc(100% - 4vh),0 4vh)",
            }}
          >
            <div className="px-10 flex gap-5 justify-center items-center">
              <h1 className="text-xxxl font-primaryFont text-black">OPQUAST</h1>
              <div className="h-[1px] bg-black w-full"></div>
              <div className="h-[5vh] w-[5vh] min-h-[5vh] min-w-[5vh] relative">
                <div className=" left-1/2 h-full bg-black absolute w-[1px]"></div>
                <div className=" top-1/2 bg-black h-[1px] absolute w-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 border border-black border-solid rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-black rounded-full"></div>
              </div>
            </div>
            <ul className="flex gap-2 text-xl text-black px-10">
              <li className=" font-light px-4 py-2 border border-solid border-black">
                07/04/2023
              </li>
              <li className=" font-light px-4 py-2 border border-solid border-black">
                MQW-V4-2020
              </li>
              <li className=" font-light px-4 py-2 border border-solid border-black">
                Code : 05YAMH
              </li>
            </ul>
            <div className=" px-10 flex h-full items-center">
              <p className="text-xl text-black">
                Opquast est une certification de qualité web. Elle permet de
                garantir la qualité des sites web en matière de respect des
                standards du web, de l'accessibilité, de la sécurité et de la
                compatibilité.
              </p>
            </div>
            <div className=" text-l h-max max-w-full overflow-hidden bg-[#03707d] text-white text-center flex">
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
              <p className="p-1 h-[6vh]"> CERTIFICATION </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
