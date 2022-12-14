import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "Grinning",
  "๐": "Grinning with Big Eyes",
  "๐": "Grinning with Smiling Eye",
  "๐": "Beaming with Smiling Eyes",
  "๐": "Grinning Squinting ",
  "๐": "Grinning with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": " with Tears of Joy",
  "๐": "Slightly Smiling ",
  "๐": "Upside-Down ",
  "๐": "Winking ",
  "๐": "Smiling with closed Eyes",
  "๐": "Smiling with Halo",
  "๐ฅฐ": "Smiling with Hearts",
  "๐": "Smiling with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": " Blowing a Kiss",
  "๐": "Kissing",
  "๐": "Kissing with Closed Eyes",
  "๐": "Kissing with Smiling Eyes",
  "๐": "Savoring Food",
  "๐": "with Tongue",
  "๐": "Winking with Tongue",
  "๐คช": "Zany",
  "๐": "Squinting with Tongue",
  "๐ค": "Money-Mouth",
  "๐ค": "Smiling with Open Hands",
  "๐คญ": " with Hand Over Mouth",
  "๐คซ": "Shushing",
  "๐ค": "Thinking",
  "๐ค": "Zipper-Mouth",
  "๐คจ": " with Raised Eyebrow",
  "๐": "Neutral",
  "๐": "Expressionless",
  "๐ถ": " Without Mouth",
  "๐": "Smirking",
  "๐": "Unamused",
  "๐": " with Rolling Eyes",
  "๐ฌ": "Grimacing",
  "๐คฅ": "Lying",
  "๐": "Relieved",
  "๐": "Pensive",
  "๐ช": "Sleepy",
  "๐คค": "Drooling",
  "๐ด": "Sleeping",
  "MN": "Monu Neolia",
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
      <input placeholder="Enter emoji ๐" onChange={emojiHandler} />

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
