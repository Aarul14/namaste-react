const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", {}, "I am child1"),
    React.createElement("div", {}, "I am child2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("div", {}, "I am child3"),
    React.createElement("div", {}, "I am child4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
