import styled from "styled-components"

export const Cards = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
background-color: rgb(94, 94, 94);
justify-content: center; 
`

export const TextHome = styled.h1`
font-family: "Poppins", sans-serif;
font-size: 6vh;
font-weight: 700;
text-align: left;
color: #ffffff;
`
export const AshMessage = styled.h1`
  position: relative; 
  font-family: "Poppins", sans-serif;
  font-size: 4vh;
  background-color: white;
  font-weight: 700;
  text-align: center;
  color: rgb(70,70,70);
  height: 8vh;
  width: 45vw;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease; 
&:hover {
  transform: scale(1.05);
}
  &::before {
  content: "";
  position: absolute;
  bottom: -35px; 
  left: 30px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 10px 0; 
  border-color: white transparent transparent transparent; 
  transform: rotate(45deg); 
  transform-origin: 0 0; 
`

export const AshImage = styled.img`
  height: 68vh;
  width: auto;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); 
  }
`

export const ContainerMessageCaptured = styled.div`
display: flex;
`

export const TextContainer = styled.div`
width: 100vw;
height: 72px;
padding-left: 2.3vw;
padding-bottom: 5vh;
padding-top: 5vh;
`
export const SectionHome = styled.section`
height: 100vh;
width: 98vw;
background-color: rgb(94, 94, 94) ;
`

export const ContainerButton = styled.div`
background-color: rgb(94, 94, 94) ;
display: flex;
align-items: center;
justify-content: center;
height: 20vh;
`
export const ButtonPagination = styled.button`
border-radius: 5px;
border: transparent;
background-color: #33A4F5;
color: #FFFFFF;
cursor: pointer;
height: 5vh;
width: 20vh;
font-family: "Poppins", sans-serif;
margin-left: 1vh;
margin-top: 5vh;
font-size: 1.7vh;
font-weight: bold;
`