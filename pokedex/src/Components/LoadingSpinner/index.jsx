import React from "react";
import Loading from "../../assets/loading.gif";
import { LoadingSpinnerStyle } from "./styled";

export const LoadingSpinner = () => {
  return <LoadingSpinnerStyle src={Loading} alt="Pokebola girando" />;
};

export default LoadingSpinner;