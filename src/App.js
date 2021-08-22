import "./App.css";
import Login from "./components/screen/Login";

function App() {
  return (
    <div className="main-bg">
      <div className="container">
        {/* ---- common header ------ */}
        <h2 className="main-title text-center st-2">Formik With React</h2>
        <select className="select-form st-1" name="form-type" id="">
          <option value="">Login</option>
          <option value="">Registration</option>
          <option value="">All Field</option>
        </select>

        {/* --------- form ------ */}
        <Login />
      </div>
    </div>
  );
}

export default App;
