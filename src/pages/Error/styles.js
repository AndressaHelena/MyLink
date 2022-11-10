import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background: black;
`
export const Title = styled.h2`
  color: red;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30px 0;
  line-height: 150%;
`
export const BackLink = styled(Link)`
  background-color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  margin-top: 18px;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
  color: #333;
  background: #fff;
  transform: scale(1.05);
}
`