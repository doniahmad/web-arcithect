import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Gallery from "./containers/Gallery/Gallery";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Certificate from "./containers/Certificate/Certificate";
import Contact from "./containers/Contacts/Contact";
import Project from "./containers/Project/Project";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";

function App() {
  return (
    <BrowserRouter basename="{process.env.PUBLIC_URL}">
      <NavbarComp />
      <div className="inner">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/project" component={Project} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/contact" component={Contact} />
          <Route path="/project-1" component={ProjectDetail} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
