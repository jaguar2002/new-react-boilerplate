import React from "react";
import "./App.css";

const COLORS = ["red", "yellow", "green"];

const Button = ({ color, isOn, onClick }) => (
  <button
    style={{ background: isOn && color }}
    onClick={onClick.bind(this, color)}
  />
);

const ColorSwitch = ({ startColor = COLORS[0] }) => {
  const [activeColor, changeActiveColor] = React.useState(startColor);

  return (
    <div className="switch">
      {COLORS.map((color) => (
        <Button
          isOn={activeColor === color}
          color={color}
          onClick={changeActiveColor}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ColorSwitch />
    </div>
  );
}

export default App;
