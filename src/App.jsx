import { DataVis } from "./components/DataVis";
import { Space } from "./components/Space";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([
    {
      name: "Valence",
      value: 0.5,
    },
    {
      name: "Arousal",
      value: 0.5,
    },
    {
      name: "Dominance",
      value: 0.5,
    },
  ]);
  const [mood, setMood] = useState("Neutral");
  useEffect(() => {
    const getData = async () => {
      const moodData = await axios.get("http://127.0.0.1:5000/mood");
      setData([
        {
          name: "Valence",
          value: JSON.parse(moodData.data.data)[0],
        },
        {
          name: "Arousal",
          value: JSON.parse(moodData.data.data)[2],
        },
        {
          name: "Dominance",
          value: JSON.parse(moodData.data.data)[1],
        },
      ]);
      setMood(moodData.data.mood)
    };
    getData();
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#392C5D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Space />
      <h1
        style={{
          color: "white",
          fontFamily: "'Press Start 2P'",
          padding: "32px 0",
          marginBottom: "64px",
        }}
      >
        Meta Mood
      </h1>
      <DataVis data={data} />
      <h3 style={{ color: "white", fontFamily: "'Press Start 2P'" }}>{mood}</h3>
    </div>
  );
}

export default App;
