import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.body`
display: flex;
 flex-direction: column;
 width: 100%;
 min-width: 100vh;
 justify-content: center;
 align-items: center;
 background: black;
`
export const Title = styled.h2`
color: red;
`
export const BackLink = styled(Link)`
background-color: rgba(255, 255, 255, 0.6);
text-decoration: none;
color: #555;
padding: 4px 16px;
margin-top: 14px;
border-radius: 5px;
transition: background-color 0.5s;
cursor: pointer;
&:hover {
  color: #333;
  background: #fff;
  transform: scale(1.05);
}
`