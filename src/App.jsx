import {
  CowboyWayComp,
  MissionComp,
  VisionComp,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  BoardComp,
  Hero,
} from "./components";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <CowboyWayComp />
    <MissionComp />
    <VisionComp />
    <BoardComp />
    <Clients />
    <CTA />
    <Footer />
  </>
);

export default App;
