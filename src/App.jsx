import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Login from "./components/login";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore"
import Profile from "./components/Profile";
import { Feed } from "./components/Feed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer position="top-right"  />
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/feed" element={<Feed />}/>

        </Route>
      </Routes>
    
    </BrowserRouter>
    </Provider>
    
    </>
  );
}

export default App;
