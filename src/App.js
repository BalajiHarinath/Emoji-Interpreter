import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning",
  "🙂": "Smiling",
  "🙃": "Upside down",
  "👽": "alien",
  "😉": "winking",
  "😴": "sleeping",
  "😠": "angry",
  "😲": "astonished",
  "😋": "tasty",
  "😆": "grinning"
};
export default function App() {
  var emojiList = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("");

  function emojiInterpretorHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === "") {
      setMeaning(meaning);
    } else {
      if (meaning === undefined) {
        meaning = "User input not in database";
      }
      setMeaning(meaning);
    }
  }

  function emojiOnClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input
        style={{ width: 300, height: 35 }}
        onChange={emojiInterpretorHandler}
      />
      <h3>{meaning}</h3>
      <h3>emojis we know</h3>
      {emojiList.map((emoji) => (
        <span
          key={emoji}
          onClick={() => emojiOnClickHandler(emoji)}
          style={{ padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
