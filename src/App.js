import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling face with smiling eyes",
  "😂": "face with tears of joy",
  "😍": "heart eyes",
  "😁": "grinning face with smiling eyes",
  "😎": "smiling face with sunglasses",
  "😢": "crying face emoji",
  "😜": "winking face with tongue",
  "😘": "face blowing a kiss",
  "😒": "unamused face",
  "😃": "grinning face with big eyes",
  "🤔": "thinking face",
  "🤢": "nauseated face",
  "🙂": "slightly smiling face",
  "🤨": "face with raised eyebrow",
  "😗": "kissing face",
  "😐": "neutral face",
  "🙄": "face with rolling eyes",
  "😔": "pensive face",
  "⌚": "watch",
  "🍇": "grapes",
  "🍊": "tangerine",
  "🍑": "peach",
  "💫": "dizzy",
  "🏕️": "camping",
  "🏜️": "desert",
  "🗺️": "world map",
  "🛢️": "oil drum",
  "🛎️": "bellhop bell",
  "♨️": "hot springs"
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
