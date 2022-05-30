import GlobalStyle from "./styles/GlobalStyle";
import Pages from "./components/Pages";
function App() {
  return (
    <>
    <GlobalStyle />
    <div className="wrapper">
      <Pages></Pages>
    </div>
    </>
  );
}

export default App;
