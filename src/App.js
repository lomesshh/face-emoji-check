import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "smiling face with smiling eyes",
  "π": "face with tears of joy",
  "π": "heart eyes",
  "π": "grinning face with smiling eyes",
  "π": "smiling face with sunglasses",
  "π’": "crying face emoji",
  "π": "winking face with tongue",
  "π": "face blowing a kiss",
  "π": "unamused face",
  "π": "grinning face with big eyes",
  "π€": "thinking face",
  "π€’": "nauseated face",
  "π": "slightly smiling face",
  "π€¨": "face with raised eyebrow",
  "π": "kissing face",
  "π": "neutral face",
  "π": "face with rolling eyes",
  "π": "pensive face",
  "β": "watch",
  "π": "grapes",
  "π": "tangerine",
  "π": "peach",
  "π«": "dizzy",
  "ποΈ": "camping",
  "ποΈ": "desert",
  "πΊοΈ": "world map",
  "π’οΈ": "oil drum",
  "ποΈ": "bellhop bell",
  "β¨οΈ": "hot springs"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [name, setName] = useState("");

  const emojiChecker = (e) => {
    let userInput = e.target.value;
    if (emojiDictionary[userInput] === "") {
      setName("");
    } else if (emojiDictionary[userInput] === undefined) {
      setName("Sorry, But we dont have your emoji in our database");
    } else {
      setName(emojiDictionary[userInput]);
    }
  };

  const getEmojiName = (value) => {
    setName(emojiDictionary[value]);
  };

  return (
    <div className="App" style={{ padding: "4rem", color: "darkgreen" }}>
      <h1>Emoji Interpreter</h1>
      <h3>Enter your emoji here</h3>
      <input
        type="text"
        style={{
          height: "2rem",
          width: "70%",
          backgroundColor: "lightgreen",
          color: "green",
          borderRadius: "2rem"
        }}
        onChange={emojiChecker}
      />
      <h3>{name}</h3>
      {emojiList.map((value) => {
        return (
          <span
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer"
            }}
            onClick={() => getEmojiName(value)}
            key={value}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
