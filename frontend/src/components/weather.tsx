import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import media from "@lib/mediaQuery";
import { RootState } from "@reducers/index";
import { TiWeatherSunny } from "react-icons/Ti";
import { TiWeatherCloudy } from "react-icons/Ti";
import { TiWeatherStormy } from "react-icons/Ti";
import { TiWeatherSnow } from "react-icons/Ti";
import { TiWeatherShower } from "react-icons/Ti";

const Wrapper = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 15px;
  padding: 1rem 0 1rem 0;
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.12);

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 100px;
      height: 100px;
      fill: black;
    }
  }
`;

const Weather: FC = () => {
  const { address, keyword } = useSelector((state: RootState) => state.food);

  return (
    <>
      <Wrapper>
        <div>
          {(() => {
            switch (keyword) {
              case "sunny": {
                return <TiWeatherSunny />;
              }
              case "cloud": {
                return <TiWeatherCloudy />;
              }
              case "rain": {
                return <TiWeatherShower />;
              }
              case "thunder": {
                return <TiWeatherStormy />;
              }
              case "snow": {
                return <TiWeatherSnow />;
              }
              default: {
                return <TiWeatherSunny />;
              }
            }
          })()}
          <span>{address}</span>
          <div>온도:35도</div>
        </div>
      </Wrapper>
    </>
  );
};

export default Weather;
