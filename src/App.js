import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";

function App() {
  return (
    <div>
      <h1>Theme</h1>

      <h3>Input</h3>
      <Input />

      <h3>Checkbox</h3>
      <Checkbox />

      <h3>Radio</h3>
      <Radio />

      <h3>Select</h3>
      <Select />

      <h3>Slider</h3>
      <Slider />

      <h3>Button</h3>
      <Button>클릭</Button>
    </div>
  );
}

export default App;
