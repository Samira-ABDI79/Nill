// react hook
import { useEffect, useRef } from "react";

// library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

import { MainLayout, HomeLayout, PostLayout } from "./Layouts";
import "./App.css";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);
  const scrollRef = useRef(null);

  function setHeight(mainRef) {
    const target = mainRef.current;
    const headerHeight = document.getElementById("header").offsetHeight;
    target.style.marginTop = `${headerHeight}px`;
  }

  // routing scrollTrigger refresh
  useEffect(() => {
    ScrollTrigger.refresh();
    // setTimeout(() => {
    //   ScrollTrigger.refresh();
    // }, 100);
  });

  useEffect(() => {
    setHeight(mainRef);
    smoothScroll(scrollRef);
    window.addEventListener("resize", () => {
      setHeight(mainRef);
    });
  }, []);
  return (
    <div id="header" className="scroll_wrap">
      <div className="scroll_container" ref={scrollRef}>
        <main ref={mainRef}>
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
function smoothScroll(ref) {
  const scrollContent = ref.current;
  const scrollHeightBox = scrollContent.parentElement.parentElement;
  let height;

  // set(resize) height
  function refreshHeight() {
    const headerH = document.getElementById("header").offsetHeight;
    height = scrollContent.offsetHeight + headerH;
    scrollHeightBox.style.height = height + "px";
    console.log(height);
  }
  ScrollTrigger.addEventListener("refreshInit", refreshHeight);

  // ScrollTrigger 새로고침 시 기타 애니메이션 튕김 방지
  function killScrub(trigger) {
    let scrub = trigger.getTween
      ? trigger.getTween()
      : gsap.getTweensOf(trigger.animation)[0];
    scrub && scrub.kill();
    trigger.animation.progress(trigger.progress);
  }

  gsap.to(scrollContent, {
    y: () => document.documentElement.clientHeight - height,
    ease: "none",
    onUpdate: ScrollTrigger.update,
    scrollTrigger: {
      invalidateOnRefresh: true,
      start: 0,
      end: () => height - document.documentElement.clientHeight,
      scrub: 0.6,
      onRefresh: killScrub,
    },
  });
}
