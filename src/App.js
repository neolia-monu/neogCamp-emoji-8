import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "Grinning",
  "😃": "Grinning with Big Eyes",
  "😄": "Grinning with Smiling Eye",
  "😁": "Beaming with Smiling Eyes",
  "😆": "Grinning Squinting ",
  "😅": "Grinning with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": " with Tears of Joy",
  "🙂": "Slightly Smiling ",
  "🙃": "Upside-Down ",
  "😉": "Winking ",
  "😊": "Smiling with closed Eyes",
  "😇": "Smiling with Halo",
  "🥰": "Smiling with Hearts",
  "😍": "Smiling with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": " Blowing a Kiss",
  "😗": "Kissing",
  "😚": "Kissing with Closed Eyes",
  "😙": "Kissing with Smiling Eyes",
  "😋": "Savoring Food",
  "😛": "with Tongue",
  "😜": "Winking with Tongue",
  "🤪": "Zany",
  "😝": "Squinting with Tongue",
  "🤑": "Money-Mouth",
  "🤗": "Smiling with Open Hands",
  "🤭": " with Hand Over Mouth",
  "🤫": "Shushing",
  "🤔": "Thinking",
  "🤐": "Zipper-Mouth",
  "🤨": " with Raised Eyebrow",
  "😐": "Neutral",
  "😑": "Expressionless",
  "😶": " Without Mouth",
  "😏": "Smirking",
  "😒": "Unamused",
  "🙄": " with Rolling Eyes",
  "😬": "Grimacing",
  "🤥": "Lying",
  "😌": "Relieved",
  "😔": "Pensive",
  "😪": "Sleepy",
  "🤤": "Drooling",
  "😴": "Sleeping"
};

const emojiArr = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(e) {
    const userInput = e.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function eClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input placeholder="Enter emoji 😇" onChange={emojiHandler} />

      <p>{meaning}</p>
      <p>Emoji </p>
      <div class="emoji_main">
        {emojiArr.map((emoji) => {
          return (
            <span id="em_db" onClick={() => eClickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
