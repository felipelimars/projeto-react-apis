import styled from "styled-components";

export const ContainerDetails = styled.section`
  position: relative;
  display: flex;
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
  padding-left: 1.5vw;
`;

export const TextContainer = styled.div`
  padding-left: 2.3vw;
  padding-top: 5vh;
`;

export const PokeImg = styled.img`
  width: 60vw;
  height: 95vh; 
  padding-left: 1vw;
`;
export const BackDefault = styled.img`
  width: auto;
  height: 10vh;
`;
export const FrontDefault = styled.img`
  width: auto;
  height: 10vh; 
`;

export const Moves = styled.h1`
padding-left: 1vw;
  font-family: "inter", sans-serif;
  display: flex;
  flex-direction: column; 
`;

export const MovesText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 2vh;
  font-weight: 300; 
  background-color: rgb(236, 236, 236);
  border-radius: 10px;
  border: 1px dashed rgb(200, 200, 200);
  width: fit-content;
  height: 3vh;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 2px 10px;
  margin-left: 1vw;
  text-transform: capitalize;
`;

export const BoxImageOne = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 10px;
  background-color: #FFFFFF;
  grid-column: 1; 
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3vw;
  margin-top: 3vh;
  z-index: 1;
  position: fixed;
`;

export const BoxImageTwo = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 10px;
  background-color: #FFFFFF;
  grid-column: 1; 
  grid-row: 1/8; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3vw;
  margin-top: 38vh;
  z-index: 1;
  position: fixed;
`;

export const BaseStats = styled.div`
  width: 300px;
  margin-top: 3vh;
  height: 458px;
  border-radius: 10px;
  background-color: #FFFFFF;
  grid-column: 2; 
  grid-row: 1/3; 
  z-index: 1
  position: fixed
  padding-left: 1vw; 
  padding-right: 10vh;
`;

export const BaseStatsText = styled.h1`
font-family: "Montserrat", sans-serif;
padding-left: 4vh;
`

export const BaseStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 9vh;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc; 
`;

export const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5vh;
  font-weight: bold;
  flex: 1;
  text-transform: capitalize;
  color: rgb(90, 90, 90);
`;

export const Number = styled.p`
font-size: 1.6vh;
  font-weight: bold;
  color: rgb(90, 90, 90);
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const NumberTotal = styled.p`
  font-size: 1.6vh;
  font-weight: bold;
  width: 30px;
  padding-right: 16vh;
  color: rgb(90, 90, 90);
`;

export const Range = styled.div`
  flex: 1;
`;

export const ProgressBar = styled.div`
  width: 100px;
  height: 10px;
  background-color: #ccc;
  border-radius: 10px;
`;

export const FilledBar = styled.div`
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.percent * 100}%;
  background-color: #f07a12;
`;
export const PokemonDetailContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 500px;
  border-radius: 37px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: repeat(10, 1fr); 
  gap: 20px; 
  background-color: ${(props) => props.color};
  z-index: 1; /
  align-items: center;
  justify-content: center;
  top: 59%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DivStats = styled.div`
  width: 300px;
  height: 316px;
  margin-left: 1.5vw;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin-top: 23vh;
  grid-column: 3; 
  grid-row: 1/5; 
  z-index: 1;
  position: relative;
`;

export const ContainerDetailCard = styled.div`
  width: 400px;
  height: 18vh;
  display: flex;
  position: relative;
  margin-top: 1vh;
  padding-bottom: 12vh;
  padding-left: 1vw;
  grid-column: 3; 
  grid-row: 1/2; 
  position: fixed
`

export const PokeballCardDetail = styled.img`
z-index: -1;
  height: 71vh;
  right: 1px;
  top: 1px;
  position: fixed;
`

export const Pokemon = styled.img`
height: 40vh;
width: 40vh;
z-index: 1;
position: absolute;
right: 10vh;
padding-top: 5vh;
`

export const CatchButtonDetail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5vh;
  margin-left: 3vh;
  width: 210px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #000;
  font-family: "Poppins", sans-serif;
  grid-column: 4; 
  grid-row: 16/1; 
  `;

export const RemoveButtonDetail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5vh;
  margin-left: 3vh;
  width: 210px;
  height: 38px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  grid-column: 4; 
  grid-row: 16/1; 
  background-color: rgb(255, 98, 98); 
  color: #FFFFFF;
`;