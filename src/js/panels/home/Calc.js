import React, { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import { FixedLayout, Placeholder, Spinner } from "@vkontakte/vkui";
import { InlineMath } from "react-katex";

import Keyboard from "../../components/keyboard";
import api from "../../../functions/api";

function Calc({ router }) {
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
          result !== null && (
            <div className={"calc-text"}>
              <InlineMath>{result}</InlineMath>
            </div>
          )
        )}
        <Keyboard value={value} setValue={setValue} calculate={calculate} />
      </FixedLayout>
    </>
  );
}

export default withRouter(Calc);
