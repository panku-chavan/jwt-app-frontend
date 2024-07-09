import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper=styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
`
export const Links=styled.div`
display: flex;
/* justify-content: space-evenly; */
gap: 30px;
border: 1px solid wheat;
background: rgb(237,237,237,.1);
backdrop-filter:blur(10px);
padding: 10px;
border-radius: 10px;
`
export const StyledLinks=styled(Link)`
color: #ffffff;
text-decoration: none;
transition:opacity 0.3s ease-in-out;
&:hover{
/* background: rgb(237,237,237,.1); */
opacity: 0.5;

}
`