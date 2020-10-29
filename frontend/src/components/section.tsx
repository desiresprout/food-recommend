import React, { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import thousand from "@asset/thousand.svg";
import media from "@lib/mediaQuery";
import { useDispatch } from "react-redux";
import food from "@reducers/food";
import { useSelector } from "react-redux";
import { RootState } from "@reducers/index";
import { Ilocation } from "@typing/location";

const Wrapper = styled.section`
  margin-top: 2rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1710px;
    margin: 0 auto;
    font-family: "Nanum Pen Script", cursive;

    ${media.xxlarge} {
      width: 1370px;
    }

    ${media.xlarge} {
      width: 1200px;
    }
    ${media.large} {
      width: 912px;
      justify-content: center;
    }
    ${media.medium} {
      width: calc(100% - 2rem);
      flex-wrap: wrap;
    }
    ${media.small} {
      width: calc(375px - 2rem);
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  flex: 1 1 0%;
  ${media.medium} {
    align-items: center;
  }

  h2 {
    font-size: 6rem;
    ${media.xlarge} {
      font-size: 5rem;
    }
    ${media.large} {
      font-size: 4.5rem;
    }
    ${media.medium} {
      font-size: 4rem;
    }
    ${media.small} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 4rem;
    ${media.xlarge} {
      font-size: 3.5rem;
    }
    ${media.large} {
      font-size: 3rem;
    }
    ${media.medium} {
      font-size: 2rem;
    }
    ${media.small} {
      font-size: 1.6rem;
    }
  }

  & > div {
    width: 400px;
    height: 20px;
    border: 2px solid black;
    margin: 2.5rem auto 0 auto;
    padding: 20px;
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  ${media.xlarge} {
    width: 520px;
    height: 520px;
  }

  ${media.large} {
    width: 460px;
    height: 460px;
  }
  ${media.medium} {
    width: 400px;
    height: 400px;
  }
  ${media.small} {
    width: 300px;
    height: 300px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const Section: FC = () => {
  const [location, saveLocation] = useState({} as Ilocation);
  const dispatch = useDispatch();

  const success: PositionCallback = useCallback(
    (position: Position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      saveLocation({ latitude, longitude });
      dispatch(food.actions.LoadFoodsInfoRequest({ latitude, longitude }));
    },
    [dispatch]
  );

  const fail: PositionErrorCallback = useCallback((error: PositionError) => {
    console.log("fail", error);
    if (error) {
      return;
    }
  }, []);

  useEffect(() => {
    const navigator = window.navigator;

    navigator.geolocation.getCurrentPosition(success, fail, {
      enableHighAccuracy: true,
      maximumAge: 100,
      timeout: 60000,
    });
  }, []);

  const { address } = useSelector((state: RootState) => state.food);

  return (
    <Wrapper>
      <div>
        <Paragraph>
          <h2>Recommands</h2>
          <p>Foodo</p>
          <p>If you want</p>
          <div>
            <span>{address}</span>
          </div>
        </Paragraph>

        <ImageContainer>
          <img src={thousand} />
        </ImageContainer>
      </div>
    </Wrapper>
  );
};

export default Section;
