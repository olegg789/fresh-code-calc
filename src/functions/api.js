import { parse } from "node-html-parser";

export default async function api(math) {
  const response = await fetch(
    `https://corsanywhere.herokuapp.com/https://mathsolver.microsoft.com/ru/solve-problem/${math.replace(
      "\\mid",
      ""
    )}`
  );

  const root = parse(await response.text());
  return JSON.parse(root.querySelectorAll("script")[1].childNodes[0]._rawText)
    .props.pageProps.response.mathSolverResult;
}
