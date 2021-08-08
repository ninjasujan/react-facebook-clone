import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./AppBody/Sidebar/Sidebar";
import Feed from "./AppBody/Feed/Feed";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widget */}
      </div>

      {/*  footer */}
    </div>
  );
}

export default App;
