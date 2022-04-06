import { DataVis } from "./components/DataVis";
import { Space } from "./components/Space";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#392C5D",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
      }}
    >
      <Space />
      <h1 style={{ color: "white", fontFamily:"'Press Start 2P'", padding:"32px 0", marginBottom:"64px"}}>Meta Mood</h1>
      <DataVis />
      <h3 style={{ color: "white", fontFamily:"'Press Start 2P'"}}>HAPPY</h3>
    </div>
  );
}

export default App;
