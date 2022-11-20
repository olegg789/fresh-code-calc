import React, { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {Button, FixedLayout, Placeholder, Spinner} from "@vkontakte/vkui";
import { InlineMath } from "react-katex";

import Keyboard from "../../components/keyboard";
import api from "../../../functions/api";
import {Icon24ArrowRightOutline} from "@vkontakte/icons";
import {useDispatch, useSelector} from "react-redux";
import {set} from "../../reducers/mainReducer";

function Calc({ router }) {
  const dispatch = useDispatch()

  const [value, setValue] = useState({
    value: "",
    screen: { value: "", arr: [] },
  });

  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value.value.length > 0) {
      setIsLoading(true);
      setResult(null);
      calculate(value.value);
    }
  }, [value.value]);

  ///!!! https://katex.org/docs/supported.html, тут все функции и операторы, которые поддерживает katex И microsoft solver
  const calculate = useDebounce((math) => {
    if (math.length === 0) {
      return setIsLoading(false);
    }

    api(math).then((data) => {
      setIsLoading(false);
      setResult(data.actions[0].solution.replaceAll("$", ""));
      console.log(data)
      dispatch(set({key: "steps", value: data.actions}))
    });
  }, 1000);

  return (
    <>
      {value.value === "" ? (
        <Placeholder className="calc-placeholder">
          Введите математическую задачу
        </Placeholder>
      ) : (
        <div className={"calc-text"}>
          <InlineMath>{value.value}</InlineMath>
        </div>
      )}

      <FixedLayout vertical={"bottom"} style={{ paddingBottom: 0 }}>
        {isLoading ? (
          <div className={"Spinner"}>
            <Spinner size="small" />
          </div>
        ) : (
          result !== null && (<>
            <div className={"calc-text"}>
              <InlineMath>{result}</InlineMath>
            </div>
              <div className={"calc-steps-container"}>
                <Button
                    className={"calc-steps-button"}
                    size='s'
                    after={<Icon24ArrowRightOutline />}
                    onClick={() => router.toPanel('steps')}
                >
                  Посмотреть решение
                </Button>
            </div>
          </>)
        )}
        <Keyboard value={value} setValue={setValue} calculate={calculate} />
      </FixedLayout>
    </>
  );
}

export default withRouter(Calc);
