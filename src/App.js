import "./App.css";

function App() {
  return (
    <div>
      <h2>Formik With React</h2>
      <form>
        <div className="input-wrap">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </div>
  );
}

export default App;
