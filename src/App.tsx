import {useRef, useLayoutEffect} from "react";
import {gsap} from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
//   const el = useRef();
//   const q = gsap.utils.selector(el);
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//   useLayoutEffect(() => {
//     let smoother = ScrollSmoother.create({
//       smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//       effects: true, // looks for data-speed and data-lag attributes on elements
//     });
//     return () => {
//       smoother.kill();
//     };
//   }, []);
  //   ref={el} id="smooth-wrapper"
  //id="smooth-content"
  return (
    <div>
      <div>
        <Router>
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
                <Route path="/new-project-form" element={<NewProjectForm />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </div>
  );
}

export default App;
