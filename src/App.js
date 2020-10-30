import React, { useState, useEffect } from "react";
import "./App.css";
import { NewsCards } from "./components";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "abcc7568d85464d47b6cb195c20d16392e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [data, setData] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setData(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2 ? wordsToNumbers(number) : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(articles[number].url, "_blank");
            alanBtn().playText("Openning");
            console.log(number);
          }
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div className="alanImage">
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          alt="Alan AI "
          width="400px"
        />
      </div>
      <NewsCards data={data} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
