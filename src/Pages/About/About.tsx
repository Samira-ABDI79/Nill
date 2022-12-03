import Transition from "src/Components/Transition/Transition";
import { About as AboutPage } from "../../Components";
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";
import gsap from 'gsap';
function About() {
  const about = gsap.timeline();

  return (
    <>
    <Transition timeline={about}/>
      <CustomBreadcrumbs pageName="درباره ما" route="/about" />

      <AboutPage />
    </>
  );
}

export default About;
