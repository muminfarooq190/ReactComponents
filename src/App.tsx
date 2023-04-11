import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopApplicationOverVie from "./pages/DesktopApplicationOverVie";
import DeskTopProfileCompletion from "./pages/DeskTopProfileCompletion";
import ProxySelection from "./pages/ProxySelection";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desk-top-profile-completion":
        title = "";
        metaDescription = "";
        break;
      case "/proxy-selection":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopApplicationOverVie />} />
      <Route
        path="/desk-top-profile-completion"
        element={<DeskTopProfileCompletion />}
      />
      <Route path="/proxy-selection" element={<ProxySelection />} />
    </Routes>
  );
}
export default App;
