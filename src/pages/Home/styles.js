import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 0;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  font-size: 44px;
  margin: 50px 10px 14px 10px;

`
export const Span = styled.span`
  color: #f1f1f1;
  margin-bottom: 18px;
`

export const Links = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90%;
  text-align: center;
`
export const LinkArea = styled.section`
  background-color: #fff;
  width: 100%;
  margin-bottom: 18px;
  padding: 8px 0;
  user-select: none;
  border-radius: 5px;
  transition: transform 0.4s;
  :hover{
  transform: scale(1.04);
  }
`
export const LinkText = styled.p`
  font-size: 18px;
  line-height: 150%;
  color: var(--azul-escuro);
`