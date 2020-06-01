function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = ` 
  This is a paragraph
  **This is bolded text**

  > Block Quotes!
  
  # Heading
  ## Heading 2
  
  - list item 1
  - list item 2
  - list item 3

  [visit my website](https://codepen.io/tinzuu05/pen/ZEQzpXZ)

  This is a inline \`<div></div>\`
  This is a block of code:

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![React](https://goo.gl/Umyytc)
`;

//a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return (
      React.createElement("div", null,
      React.createElement("h1", { className: "text-center m-4" }, "Convert your Marketdown"),
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center" }, "Enter your markedown here"),
      React.createElement("textarea", { className: "form-control p-2", id: "editor", value: text, onChange: this.handleChange })),

      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center" }, "See your markedown here"),
      React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}

ReactDOM.render(React.createElement(App, null), document.getElementById('mydiv'));