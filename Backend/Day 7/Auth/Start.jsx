import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import SignUpPage from "./Signin";
import LoginPage from "./Login";
import "../../assets/css/start.css";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(0);

  const toggleComponent = () => {
    setSelectedComponent((prevComponent) => (prevComponent === 0 ? 1 : 0));
  };
  const backgroundImageUrl =
    selectedComponent === 0
      ? "https://res.cloudinary.com/daybgq5gz/image/upload/v1708746754/Chess_Theme_HD_widescreen_wallpaper_2560x1600_kq1spf.jpg"
      : "https://res.cloudinary.com/daybgq5gz/image/upload/v1708748233/1920x1080-612324-greyscale-photography-pieces-chess-metaphor-board_ak8bkf.jpg";
  return (
    <div
      className="app-root"
      style={{
        background: `url(${backgroundImageUrl})`,
        backgroundSize: "contain"
      }}
    >
      <div className="login">
        <CSSTransition
          in={selectedComponent === 0}
          timeout={500}
          classNames="component"
          unmountOnExit
        >
          <LoginPage toggleComponent={toggleComponent} />
        </CSSTransition>
        <CSSTransition
          in={selectedComponent !== 0}
          timeout={500}
          classNames="component"
          unmountOnExit
        >
          <SignUpPage toggleComponent={toggleComponent} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default App;
