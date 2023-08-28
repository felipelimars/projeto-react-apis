import styled from 'styled-components'
import grassImage from '../../assets/pokemon-types/grass.png';
import poisonImage from '../../assets/pokemon-types/poison.png';
import fireImage from '../../assets/pokemon-types/fire.png';
import flyingImage from '../../assets/pokemon-types/flying.png';
import waterImage from '../../assets/pokemon-types/water.png';
import bugImage from '../../assets/pokemon-types/bug.png';
import normalImage from '../../assets/pokemon-types/normal.png';

const typeBackgrounds = {
  grass: `url(${grassImage})`,
  poison: `url(${poisonImage})`,
  fire: `url(${fireImage})`,
  flying: `url(${flyingImage})`,
  water: `url(${waterImage})`,
  bug: `url(${bugImage})`,
  normal: `url(${normalImage})`,
};


export const Container = styled.div`
  padding: 10px;
  width: 400px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 20px;
  margin-top: 6vh; 
  transition: transform 0.2s ease; 

  &:hover {
    transform: scale(1.05);
  }
`

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #FFFFFF;
  margin-left: 7px;
  margin-bottom: 5px; 
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  margin-top: 5px; 
  margin-bottom: 10px;
  margin-left: 4px;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
`;


export const TypeBadge = styled.div`
  width: 12.9vh;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  background-image: ${props => typeBackgrounds[props.type]};
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center; 
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
  font-family: "Poppins", sans-serif;
`;
export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background-color: rgb(255, 98, 98);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
`;

export const Pokemon = styled.img`
width: 193px;
height: 193px;
position: absolute;
top: -60px;
right: 0;
z-index: 2;
`
export const ButtonDetails = styled.button`
font-family: Poppins;
font-size: 16px;
font-weight: 700;
text-align: left;
color: #FFFFFF;
width: 74px;
animation-timing-function: ease-out;
background-color: transparent;
border: none;
text-decoration: underline 1px;
font-family: "Poppins", sans-serif;
cursor: pointer;
`