import "./App.css";
import { Switch, Route } from "react-router-dom";
import ModalCropper from "./components/profilePictureResize/ModalCropper";
import useSessionStorage from "./components/hooks/storageHooks/useSessionStorage";
import ModalFilters from "./components/profilePictureResize/ModalFilters";
import Home from "./components/Home";

function App() {
  //  Use SessionStorage custom hook for set the compressed picture
  const [stateCompress] = useSessionStorage({}, "imgBase64Compressed");

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cropper-modal">
          <ModalCropper stateCompress={stateCompress} />
        </Route>
        <Route path="/filters-tool">
          <ModalFilters />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
