import styled from "styled-components"

export const ContainerPokedex = styled.section`
  display: flex;
  flex-direction: column; 
  background-color: rgb(94, 94, 94);
  min-height: 100vh; 
`;

export const TextHome = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 6vh;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  margin: 5vh 0; 
`;

export const TextContainer = styled.div`
padding-left: 2.3vw;
padding-top: 5vh;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(94, 94, 94);
  justify-content: center; 
`;

export const PikachuMessage = styled.h1`
  position: relative; 
  font-family: "Poppins", sans-serif;
  font-size: 4vh;
  background-color: white;
  font-weight: 700;
  text-align: center;
  color: rgb(70,70,70);
  height: 8vh;
  width: 30vw;
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
}
`

export const PikachuImage = styled.img`
  height: 40vh;
  width: auto;
  padding-top: 5vh;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const ContainerPokedexEmpty = styled.div`
display: flex;
padding-top: 20vh;
padding-left: 10vh;
`