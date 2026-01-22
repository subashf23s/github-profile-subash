import AboutMe from "./components/section/about-me";
import ContactMe from "./components/section/contact-me";
import Home from "./components/section/home";
import MyWork from "./components/section/my-work";
import Services from "./components/section/services";
import Header from "./components/ui/header";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <AboutMe />
      <Services />
      <MyWork />
      <ContactMe />
    </main>
  );
}

export default App;
