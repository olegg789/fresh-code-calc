import React, { useState } from "react";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import { Button, ButtonGroup } from "@vkontakte/vkui";
import {
  Icon24ArrowTurnLeftOutline,
  Icon28ArrowLeftOutline,
  Icon28ArrowRightOutline,
  Icon28Backspace,
  Icon28Send,
} from "@vkontakte/icons";

function Keyboard({ value, setValue, calculate }) {
  const [characterNumber, setCharacterNumber] = useState(-1);

  //ну тут без бутылки пива не разберешься
  const action = (value, screen) => {
    if (characterNumber === -1) {
      setValue((old) => ({
        value: old.value.replace("\\mid", "") + value + "\\mid",
        screen: {
          value: old.screen.value.replace("|", "") + screen + "|",
          arr: [...old.screen.arr, { index: value.length }],
        },
      }));
    } else {
      //если сделаем moveCursor, то сюда надо будет добавить проверку на то, что курсор не находится в конце строки
    }
  };

  //и тут тоже
  const deleteLast = () => {
    setValue((old) => ({
      value: old.value
        .replace("\\mid", "")
        .slice(0, -old.screen.arr[old.screen.arr.length - 1].index),
      screen: {
        value: old.screen.value.slice(0, -1),
        arr: old.screen.arr.slice(0, -1),
      },
    }));
  };

  //omg, мне пока лень ВОТ ЭТО делать
  //здесь типо надо сделать перемещение курсора внутри примера
  const moveCursor = (direction) => {
    if (direction === "left") {
      if (characterNumber === -1) {
        setCharacterNumber(value.length - 1);
      } else {
        setCharacterNumber((old) => old - 1);
      }
    } else {
      if (characterNumber !== -1) {
        setCharacterNumber((old) => old + 1);
      }
    }
  };

  return (
    <ButtonGroup
      className="calc-container"
      mode="vertical"
      gap="s"
      align="center"
      stretched
    >
      <ButtonGroup mode="horizontal" gap="s" stretched>
        <Button
          size="l"
          className="calc-button calc-button-other"
          activeEffectDelay={100}
          onClick={() =>
            setValue({
              value: "",
              screen: { value: "", arr: [] },
            })
          }
        >
          AC
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("%", "%")}
        >
          %
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("7", "7")}
        >
          7
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("8", "8")}
        >
          8
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("9", "9")}
        >
          9
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("÷", "/")}
        >
          ÷
        </Button>
      </ButtonGroup>

      <ButtonGroup
        style={{ marginTop: 10 }}
        mode="horizontal"
        gap="s"
        stretched
      >
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("x", "x")}
        >
          x
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("\\sqrt{}", "√")}
        >
          <img
            alt={"√"}
            src={
              "https://bingedu.azureedge.net/mathuxjs/image/keyboard/0/root.svg"
            }
          />
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("4", "4")}
        >
          4
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("5", "5")}
        >
          5
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("6", "6")}
        >
          6
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("×", "*")}
        >
          ×
        </Button>
      </ButtonGroup>

      <ButtonGroup
        style={{ marginTop: 10 }}
        mode="horizontal"
        gap="s"
        stretched
      >
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("^2", "²")}
        >
          x²
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("/", "/")}
        >
          <img
            alt={"x/y"}
            src={
              "https://bingedu.azureedge.net/mathuxjs/image/keyboard/0/fraction.svg"
            }
          />
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("1", "1")}
        >
          1
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("2", "2")}
        >
          2
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("3", "3")}
        >
          3
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("-", "-")}
        >
          -
        </Button>
      </ButtonGroup>

      <ButtonGroup
        style={{ marginTop: 10 }}
        mode="horizontal"
        gap="s"
        stretched
      >
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("(", "(")}
        >
          (
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action(")", ")")}
        >
          )
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action("0", "0")}
        >
          0
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-number"
          activeEffectDelay={100}
          onClick={() => action(".", ".")}
        >
          .
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("=", "=")}
        >
          =
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-sign"
          activeEffectDelay={100}
          onClick={() => action("+", "+")}
        >
          +
        </Button>
      </ButtonGroup>

      <ButtonGroup
        style={{ marginTop: 10 }}
        mode="horizontal"
        gap="s"
        stretched
      >
        <Button
          size="l"
          className="calc-button calc-button-other"
          activeEffectDelay={100}
        >
          f∫
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-other"
          activeEffectDelay={100}
        >
          <Icon28ArrowLeftOutline />
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-other"
          activeEffectDelay={100}
          //onClick={() => moveCursor("right")}
        >
          <Icon28ArrowRightOutline />
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-other"
          activeEffectDelay={100}
          //onClick={() => moveCursor("left")}
        >
          <Icon24ArrowTurnLeftOutline />
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-other"
          activeEffectDelay={100}
          onClick={() => deleteLast()}
        >
          <Icon28Backspace />
        </Button>
        <Button
          size="l"
          className="calc-button calc-button-send"
          activeEffectDelay={100}
          onClick={calculate}
        >
          <Icon28Send />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export default withRouter(Keyboard);
