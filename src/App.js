import React, { useState, useEffect } from "react";
import "./styles.css";
import { gsap } from "gsap";

export default function App() {
  const [data, setData] = useState([
    {
      buttonText: "+",
      minimalText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit... ",
      detailedText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus voluptatem sunt aspernatur. Minima corporis dolorem quis officia placeat culpa reiciendis quia deserunt commodi? Sunt fuga placeat obcaecati reprehenderit nemo.
  `,
      showDetailedText: false
    },
    {
      buttonText: "+",
      minimalText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit... ",
      detailedText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus voluptatem sunt aspernatur. Minima corporis dolorem quis officia placeat culpa reiciendis quia deserunt commodi? Sunt fuga placeat obcaecati reprehenderit nemo.
  `,
      showDetailedText: false
    },
    {
      buttonText: "+",
      minimalText:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit... ",
      detailedText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus voluptatem sunt aspernatur. Minima corporis dolorem quis officia placeat culpa reiciendis quia deserunt commodi? Sunt fuga placeat obcaecati reprehenderit nemo.
  `,
      showDetailedText: false
    }
  ]);

  useEffect(() => {
    gsap.set(".items", { width: "33.33%" });
  }, []);

  const buttonClicked = (index) => {
    let tempState = [...data];
    let changedItem = tempState[index];
    if (!changedItem.showDetailedText) {
      gsap.to(`.item${index}`, {
        duration: 1.5,
        width: "66.66%",
        height: "50%",
        ease: "slow"
      });
      changedItem.buttonText = "-";
    } else {
      gsap.to(`.item${index}`, {
        duration: 1.5,
        width: "33.33%",
        height: "25%",
        ease: "slow"
      });
      changedItem.buttonText = "+";
    }
    changedItem.showDetailedText = !changedItem.showDetailedText;
    tempState[index] = changedItem;
    setData(tempState);
  };

  return (
    <div className="App">
      <div className="container">
        {data.map((element, index) => {
          return (
            <div className={`items item${index}`} key={index}>
              <button
                className="btn"
                onClick={() => {
                  buttonClicked(index);
                }}
              >
                {element.buttonText}
              </button>
              <p>
                {element.showDetailedText
                  ? element.detailedText
                  : element.minimalText}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
