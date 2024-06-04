import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      tl.current = gsap.timeline().fromTo(
        "#main",
        {
          clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0 50%)",
        },
        {
          duration: 1,
          ease: "inOut",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
        }
      );
      tl.current.pause();
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
      console.log("Scroll Percent:", scrollPercent);

      if (tl.current) {
        const timelinePercent = (scrollPercent / 100) * tl.current.duration();
        tl.current.progress(timelinePercent / tl.current.duration());
        console.log(
          "Timeline Percent:",
          timelinePercent / tl.current.duration()
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
      <div id="scroll" className="h-[500vh] w-full"></div>
      <div
        className=" h-screen w-full fixed top-0 left-0 pointer-events-none"
        ref={containerRef}
      >
        <div
          className="h-full w-full bg-[url(https://akirav.art/akiravaladeillustration.png)] bg-center bg-no-repeat bg-cover"
          style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0 50%)" }}
          id="main"
        ></div>
      </div>
    </div>
  );
}

export default App;
