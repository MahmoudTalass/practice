import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/main/Footer";
import Main from "./components/main/Main";
import Nav from "./components/main/Nav";
import ImagesSite from "./components/Page One/ImagesSite";
import TasksApp from "./components/Page Two/TasksApp";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="app-main-content">
          <Nav />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/Photo-site" component={ImagesSite} />
            <Route path="/Task-site" component={TasksApp} />
          </Switch>
        </div>
      </BrowserRouter>
      <div className="app-footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
