import { useEffect, useRef } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ScrollToTop } from "./Components";
import {
  About,
  Home,
  Blog,
  Work,
  Post,
  Teammate,
  NotFound,
  NewProjectForm,
} from "./Pages";
import { CollectionPage } from "./Components/CollectionPage/CollectionPage";
import { MainLayout, HomeLayout, PostLayout } from "./Layouts";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import "./App.css";

export default function App() {
  // START AOS plugin
  // useEffect(() => {
  //   AOS.init({
  //     // Global settings:
  //     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //     startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  //     initClassName: "aos-init", // class applied after initialization
  //     animatedClassName: "aos-animate", // class applied on animation
  //     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  //     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //     offset: 120, // offset (in px) from the original trigger point
  //     delay: 0, // values from 0 to 3000, with step 50ms
  //     duration: 400, // values from 0 to 3000, with step 50ms
  //     easing: "ease", // default easing for AOS animations
  //     once: true, // whether animation should happen only once - while scrolling down
  //     mirror: false, // whether elements should animate out while scrolling past them
  //     anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  //   });
  //   AOS.refresh();
  // });


  // START GSAP plugin
  // const mainRef = useRef(null);
  // const scrollRef = useRef(null);

  // function setHeight(mainRef) {
  //   const target = mainRef.current;
  //   const headerHeight = document.getElementById("header").offsetHeight;
  //   target.style.marginTop = `${headerHeight}px`;
  // }

  // // routing scrollTrigger refresh
  // useEffect(() => {
  //   // ScrollTrigger.refresh();
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 100);
  // });

  // useEffect(() => {
  //   setHeight(mainRef);
  //   smoothScroll(scrollRef);
  //   window.addEventListener("resize", () => {
  //     setHeight(mainRef);
  //   });
  // }, []);
  // pedar id="header" className="scroll_wrap"
  // child  className="scroll_container" ref={scrollRef}
  // ref={mainRef}


  // some child aos animation has attr: 
  //  data-aos="fade-up"
  // data-aos-delay="50"
  // data-aos-duration="900"
  return (
    <div id="header" className="scroll_wrap">
      <div className="scroll_container">
        <main>
          <HashRouter>
            <ScrollToTop>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route element={<HomeLayout />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route element={<PostLayout />}>
                  <Route path="/post" element={<Post />} />
                </Route>

                <Route element={<MainLayout />}>
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/teammate" element={<Teammate />} />
                  <Route
                    path="/new-project-form"
                    element={<NewProjectForm />}
                  />
                  <Route path="/bb" element={<CollectionPage />}/>
                </Route>
              </Routes>
            </ScrollToTop>
          </HashRouter>
        </main>
      </div>
    </div>
  );
}
// smooth scroll
// function smoothScroll(ref) {
//   const scrollContent = ref.current;
//   const scrollHeightBox = scrollContent.parentElement.parentElement;
//   let height;

//   // set(resize) height
//   function refreshHeight() {
//     const headerH = document.getElementById("header").offsetHeight;
//     height = scrollContent.offsetHeight + headerH;
//     scrollHeightBox.style.height = height + "px";
//     console.log(height);
//   }
//   ScrollTrigger.addEventListener("refreshInit", refreshHeight);

//   // ScrollTrigger 새로고침 시 기타 애니메이션 튕김 방지
//   function killScrub(trigger) {
//     let scrub = trigger.getTween
//       ? trigger.getTween()
//       : gsap.getTweensOf(trigger.animation)[0];
//     scrub && scrub.kill();
//     trigger.animation.progress(trigger.progress);
//   }

//   gsap.to(scrollContent, {
//     y: () => document.documentElement.clientHeight - height,
//     ease: "none",
//     onUpdate: ScrollTrigger.update,
//     scrollTrigger: {
//       invalidateOnRefresh: true,
//       start: 0,
//       end: () => height - document.documentElement.clientHeight,
//       scrub: 0.6,
//       onRefresh: killScrub,
//     },
//   });
// }
