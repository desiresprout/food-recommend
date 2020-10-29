import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import media from "@lib/mediaQuery";
import { RootState } from "@reducers/index";

const Wrapper = styled.main`
  margin-top: 1.5rem;
  width: 100%;
  position: relative;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1710px;
    margin: 0 auto;
    font-family: "Nanum Pen Script", cursive;

    ${media.xxlarge} {
      width: 1570px;
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

const OfferBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: white;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  margin: 1rem;
  width: 15rem;
  & > div:first-child {
    width: 100%;
    padding-top: 75%;
    position: relative;
    img {
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Main: FC = () => {
  const { foodsInfo } = useSelector((state: RootState) => state.food);

  return (
    <>
      <Wrapper>
        <div>
          <OfferBlock>
            {foodsInfo.length === 0
              ? null
              : foodsInfo.map((food, idx) => (
                  <ContentsBlock key={idx + food.name}>
                    <div>
                      <img src={food.url} />
                    </div>
                    <div>
                      <h4>음식</h4>
                      <p>{food.name}</p>
                    </div>
                  </ContentsBlock>
                ))}
          </OfferBlock>
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
