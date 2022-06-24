import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import "./App.css";

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox></ButtonBox>
    </Wrapper>
  );
};

export default App;
