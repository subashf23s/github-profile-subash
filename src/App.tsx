import AboutMe from "./components/section/about-me";
import Home from "./components/section/home";
import Services from "./components/section/services";
import Header from "./components/ui/header";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <AboutMe />
      <Services />
    </main>
  );
}

export default App;
