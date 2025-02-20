import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default function Page({ entry, widgetFor }) {
  return html`
    <style>body {
      padding: 3rem;
      box-sizing: border-box;
    }</style>
    <h1 class="title page-title">${entry.getIn(["data", "title"])}</h1>
    ${widgetFor("body")}
`};