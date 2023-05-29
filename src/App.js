import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<SuccessWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function SuccessWrapper() {
  const location = useLocation();
  const info = location.state && location.state.info;

  if (!info) {
    return <Navigate to="/" replace />;
  }

  return <Success info={info} />;
}

const Root = () => {
  return (
    <App />
  )
}

export default Root;
