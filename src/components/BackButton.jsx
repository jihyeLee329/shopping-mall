import { useNavigate } from 'react-router';
import styled from 'styled-components'
const BackBtn = styled.button`
 font-size:40px; 
 font-weigth:bold; 
 color:#000;
 cursor:pointer;
`;
export default function BackButton(){
    const navigate = useNavigate();
    const goBack = () => {
		navigate(-1);
	}
    return(
        <BackBtn onClick={goBack}>&larr;</BackBtn>
    )

}