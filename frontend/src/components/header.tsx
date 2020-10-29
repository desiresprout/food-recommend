import React, { FC, useCallback } from "react";
import styled from "styled-components";
import Logo from "@asset/logo.png";
import media from "@lib/mediaQuery";

const Wrapper = styled.header`
  height: 6rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 1710px;

    ${media.xxlarge} {
      width: 1370px;
    }

    ${media.xlarge} {
      width: 1200px;
    }
    ${media.large} {
      width: 912px;
    }
    ${media.medium} {
      width: calc(100% - 2rem);
    }
    ${media.small} {
      width: calc(100% - 2rem);
    }

    img {
      width: 100px;
      height: 100px;
      ${media.medium} {
        width: 50px;
        height: 50px;
      }
      ${media.small} {
        width: 30px;
        height: 30px;
      }
    }

    nav {
      display: flex;
      ${media.medium} {
        width: calc(100% - 2rem);
      }
      ${media.small} {
        width: calc(100% - 2rem);
      }
      ul {
        display: flex;
        font-family: "Nanum Pen Script", cursive;
        li {
          list-style: none;
          padding: 10px 20px;
          font-size: 2rem;
          /* color: #0278ae; */
          color: black;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <img src={Logo} />
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Destinations</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Header;
