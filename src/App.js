import GlobalStyle from "./styles/GlobalStyle";
import Pages from "./components/Pages";
import Nav from './components/Nav'; 
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
    <Helmet>
      <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'></link>
    </Helmet>
    <GlobalStyle />
      {/* <Nav /> */}
      <Pages></Pages>
  
    </>
  );
}

export default App;
