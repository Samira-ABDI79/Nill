import { Home as HomePage } from "../../Components";
import Transition from "src/Components/Transition/Transition";
import gsap from 'gsap';
function Home() {
  const home = gsap.timeline();

  return (
    <>
     <Transition timeline={home}/>
      <HomePage />
    </>
  );
}

export default Home;
