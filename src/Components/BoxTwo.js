import React from "react";
import { Prizes } from "../Data/Prizes";
import styled from "styled-components";
const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #171718;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

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
      p {
        color: #ffffff;
        font-family: Helvetica Neue LT GEO;
        font-size: 15px;
        text-align: start;
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
              <hr
                style={{
                  height: "46px",
                  border: "solid 3px #EF5A21",
                  borderRadius: "5px",
                  boxShadow: "10px 10px 50px #EF5A21",
                  position: "absolute",
                  left: "-3px",
                }}
              />
              {!data.icon ? (
                <img
                  src={data.img}
                  style={{ width: "20px", marginLeft: "32px" }}
                />
              ) : (
                <div style={{ marginLeft: "32px" }}>{data.icon}</div>
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
