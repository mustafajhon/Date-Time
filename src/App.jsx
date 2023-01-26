import "./App.css";

function App() {
  let time = new Date();
  time = time.toLocaleString();
  return (
    <>
      <div className="container" id="contain">
        <h1 className="text text-center">
          Welcom to my first React Date and time project.
        </h1>
      </div>
      <div className="yin-yang"></div>

      <div className="container-fluid">
        <div className="clock">
          <h2>Today Dat&Time:</h2>
          <input
            className="btn btn-lg btn-primary"
            type="button"
            value={time}
          />
        </div>
      </div>
    </>
  );
}

export default App;
