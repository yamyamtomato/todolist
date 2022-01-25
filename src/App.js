import React from "react"
import styled from "styled-components";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";


const App = () => {
  const [radio, setRadio] = React.useState()

  const handleChangeRadio = (e) => {
    setRadio(e.target.value)
  }

  return (
    <div>
      {/* https://dribbble.com/shots/4085586-Checkbox-Radio-Kitt-Ornikar-Design-System 폼 디자인 참고사이트 */}
      <h1>Hello!!!</h1>

      <h3>Input</h3>
      <Input />

      <h3>Checkbox</h3>
      <Checkbox />

      <h3>Radio</h3>
      <Radio value="0" checked={radio === "0"} onChange={handleChangeRadio} /><label name="testRadio">바닐라</label>
      <Radio value="1" checked={radio === "1"} onChange={handleChangeRadio} /><label name="testRadio">초코</label>
      <Radio value="2" checked={radio === "2"} onChange={handleChangeRadio} /><label name="testRadio">딸기</label>

      <h3>Select</h3>
      <Select />

      <h3>Slider</h3>
      <Slider />

      <h3>Button</h3>
      
      <Button>클릭</Button>
      <Button className="btn btn01">클릭01</Button>
      <Button className="btn btn02">클릭02</Button>
    </div>
  );
}

export default App;
