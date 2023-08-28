import styled from 'styled-components';

export const Logo = styled.img`
  margin: 2vh;
  padding-bottom: 1vw;
  z-index: 1; 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100%; 
  transition: max-width 0.2s ease; 
`;

export const ButtonHeader = styled.div`
border-radius: 10px;
color: #FFFFFF;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
font-size: 2.5vh;
width: 30vh;
margin-left: 72rem;
height: 8vh;
background-color: #33A4F5;
cursor: pointer;
font-family: "Poppins", sans-serif;
transition: transform 0.2s ease; 
flex-shrink: 0;
&:hover {
  transform: scale(1.02);
}
`;

export const ButtonPokedex = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 2.5vh;
  height: 8vh;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  margin-right: auto;
  order: 1;
  position: absolute; 
  left: 2vh;
  top: 50%; 
  transform: translateY(-50%);
  z-index: 2;
  flex-wrap: wrap;
`

export const ArrowButtonPokedex = styled.div`
  flex-wrap: wrap;
  background-color: #FFFFFF;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.0vh;
  height: 8vh;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  margin-right: auto;
  order: 1;
  position: absolute; 
  left: 2vh;
  top: 50%; 
  transform: translateY(-50%);
  z-index: 2;
`;

export const UnderlinedText = styled.p`
    text-decoration: underline; 
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  position: relative; 
  height: 20vh;
`;

export const ButtonRemove = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 200px;
  height: 38px;
  background-color: rgb(255, 98, 98);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 7vh;
  right: 22px;
  z-index: 2;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
`
export const ButtonAdd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 200px;
  height: 38px;
  background-color: green;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 7vh;
  right: 22px;
  z-index: 2;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
`