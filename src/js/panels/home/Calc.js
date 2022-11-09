import React, { useState } from "react";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import { Button, FixedLayout, Placeholder } from "@vkontakte/vkui";

import Keyboard from "../../components/keyboard";
import { parse } from "node-html-parser";

function Calc({ router }) {
  const [value, setValue] = useState({ screen: "", math: "" });

  async function changeValue(screen, math) {
    let str = value;
    str.screen = str.screen + screen;
    str.math = str.math + math;
    await setValue(str);
    console.log(value);
  }

  async function clearValue() {
    let str = value;
    str.screen = "";
    str.math = "";
    await setValue(str);
    console.log(value);
  }

  async function deleteLast() {
    let str = value;
    str.screen = str.screen.slice(0, -1);
    str.math = str.math.slice(0, -1);
    await setValue(str);
    console.log(value);
  }

  async function calculate() {
    try {
      fetch(
        "https://corsanywhere.herokuapp.com/https://mathsolver.microsoft.com/ru/solve-problem/x%5E2-4x-5=0"
      )
        .then((response) => response.text())
        .then((data) => {
          const root = parse(data);

          //JSON.parse(root.querySelectorAll("script")[1].childNodes[0]._rawText).props.pageProps.response.mathSolverResult.actions[0].templateSteps - решения по шагам (не всегда что-то есть в массиве, иногда майкрософт возвращает пустой массив, но ответ есть)

          console.log(
            JSON.parse(
              root.querySelectorAll("script")[1].childNodes[0]._rawText
            ).props.pageProps.response.mathSolverResult
          ); //а тут я просто тестил ¯\_(ツ)_/¯
        });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {value.screen === "" ? (
        <Placeholder
          header="Введите математическую задачу"
          className="calc-placeholder"
        />
      ) : (
        <div>{value.screen}</div>
      )}
      <Button onClick={() => calculate()}>Click</Button>
      <FixedLayout vertical={"bottom"} style={{ paddingBottom: 0 }}>
        <Keyboard
          action={(screen, math) => changeValue(screen, math)}
          clear={() => clearValue()}
          deleteLast={() => deleteLast()}
        />
      </FixedLayout>
    </>
  );
}

export default withRouter(Calc);
