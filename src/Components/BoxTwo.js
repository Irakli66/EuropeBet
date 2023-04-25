import React from "react";
import styled from "styled-components";

//data import
import { Prizes } from "../Data/Prizes";

const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #171718;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @media screen and (max-width: 600px) {
    background-color: #25292b;
  }

  .box-2 {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    padding: 27px;
    align-items: center;
    max-width: 806px;
    width: 100%;
    gap: 12px;
    width: 100%;
    background-color: #25292b;
    border-radius: 20px;
    align-items: flex-start;
    @media screen and (max-width: 600px) {
      padding: 14px;
    }
    .box-prizes {
      position: relative;
      display: flex;
      gap: 20px;
      align-items: center;
      background-color: #202324;
      height: 72px;
      border-radius: 10px;
      width: 100%;
      overflow: hidden;
      hr {
        height: 46px;
        border: solid 3px #ef5a21;
        border-radius: 5px;
        box-shadow: 10px 10px 50px #ef5a21;
        position: absolute;
        left: -3px;
      }
      img {
        width: 20px;
        margin-left: 32px;
      }
      div {
        margin-left: 32px;
      }
      @media screen and (max-width: 600px) {
        height: 63px;
        background-color: #2c3234;
        hr {
          height: 30px;
        }
        img {
          width: 37px;
          height: 35px;
          margin-left: 12px;
        }
        div {
          margin-left: 12px;
        }
      }
      p {
        color: #ffffff;
        font-family: Helvetica Neue LT GEO;
        font-size: 15px;
        text-align: start;
        @media screen and (max-width: 600px) {
          font-size: 13px;
        }
      }
    }
  }
`;
function BoxTwo() {
  return (
    <StyledCont>
      <div className="box-2">
        {Prizes.map((data) => {
          return (
            <div className="box-prizes">
              <hr />
              {!data.icon ? (
                <img src={data.img} alt="prize" />
              ) : (
                <div>{data.icon}</div>
              )}
              <p style={{ width: "529px" }}>{data.title}</p>
            </div>
          );
        })}
      </div>
    </StyledCont>
  );
}

export default BoxTwo;
