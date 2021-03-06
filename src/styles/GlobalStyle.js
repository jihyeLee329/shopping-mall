import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        line-height:1.2 !important;
        box-sizing:border-box;
        font-family:'Spoqa Han Sans Neo', -apple-system, system-ui,
        BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', sans-serif !important
    }
    button{background:none; 
        border:none; 
        outline:none;
        margin:0; padding:0; 
    }
    a, span{color:inherit; font-size:inherit !important; font-family:inherit; }
    img{ max-width:100%; width:100%; display:inline-block;}
    li,ul,ol,a{text-decoration:none; list-style:none;}
    .displaynone{display:none}
    .wrapper{position:relative; max-width:70vw; width:100%; min-width:850px; margin:0 auto; padding: 50px 0;}
   
`

export default GlobalStyle