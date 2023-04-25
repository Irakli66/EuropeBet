import React from "react";
import styled from "styled-components";

// Data imports
import { LeaderBoard } from "../Data/LeaderBoard.js";
import { FinalSectionData } from "../Data/FinalSectionData.js";

//Img and icon imports
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MechanicIcon from "../Assets/Images/mechanic-icon.png";
import ExampleIcon from "../Assets/Images/example-icon.png";

const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #171718;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 24px;
  @media screen and (max-width: 600px) {
    background-color: #25292b;
    padding: 5px;
  }
  .box-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 806px;
    width: 100%;
    gap: 12px;
    .box-title {
      font-size: 16px;
      color: #ffffff;
      font-weight: bold;
      font-family: November GeLC;
      @media screen and (max-width: 600px) {
        font-size: 13px;
        margin-top: 0px;
      }
    }
    .leader-board {
      width: 100%;
      background-color: #25292b;
      border-radius: 20px;

      .leader-board-title {
        display: flex;
        margin-top: 51px;
        padding-left: 41px;
        padding-right: 122px;
        justify-content: space-between;
        @media screen and (max-width: 600px) {
          padding-left: 14px;
          padding-right: 55px;
          margin-top: 11px;
        }
        p {
          font-size: 13px;
          color: #7d7d7d;
          opacity: 0.9;
          @media screen and (max-width: 600px) {
            font-size: 12px;
          }
        }
      }
    }
    .Board {
      display: flex;
      flex-direction: column;
      gap: 6px;
      overflow-x: hidden;
      height: 420px;
      padding: 0px 32px;
      padding-bottom: 20px;

      margin-top: 21px;
      @media screen and (max-width: 600px) {
        padding: 0px 9px;
      }
      div {
        display: flex;
        gap: 20px;
        border: 2px solid #2c3234;
        background-color: #1e2122;
        border-radius: 40px;
        padding: 14px 20px;
        justify-content: space-between;
        align-items: center;

        .p1 {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 28px;
          height: 28px;
          background-color: #2c3234;
          border-radius: 50%;
        }
        .p2 {
          /* font-size: 14px; */
        }
        .p3 {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        @media screen and (max-width: 600px) {
          display: flex;
          justify-content: start;
          height: 45px;
          width: 100%;
          img {
            visibility: hidden;
          }
          p {
            /* font-size: 10px; */

            font-size: 10px;
          }
          .p1 {
            width: 35px;
            height: 22px;
            border-radius: 50%;
          }
          .p2 {
            padding-left: 80px;
          }
          .p3 {
            word-break: break-all;
            padding-left: 40px;
          }
        }
      }
    }
    .Board::-webkit-scrollbar-thumb {
      border-right: none;
      border-left: none;
    }
    .Board::-webkit-scrollbar-track {
      background: transparent;
    }
    .Board::-webkit-scrollbar-track-piece:end {
      margin-bottom: 15px;
      background: transparent;
    }

    .Board p {
      font-size: 13px;
      color: #ffffff;
    }
  }
`;
function BoxOne(props) {
  return (
    <StyledCont>
      <div className="box-1">
        {props.id === 2 ? (
          <div
            style={{
              position: "relative",
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              alignItems: "center",
              backgroundColor: "#1E2122",
              borderRadius: "20px",
              padding: "7px 55px 7px 25px",
              border: "#2C3234 solid 2px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#fff",
                fontFamily: "Helvetica Neue One Caps",
                fontWeight: "bold",
              }}
            >
              ქულების დაგროვების მექანიკა
            </p>
            <img
              src={MechanicIcon}
              style={{
                position: "absolute",
                right: 0,
              }}
              alt="icon"
            />
          </div>
        ) : props.id === 3 ? (
          <p
            style={{
              fontSize: "14px",
              color: "#FFFFFF",
              fontFamily: "November GeLC",
              margin: "20px 0px",
            }}
          >
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </p>
        ) : (
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <p className="box-title">ჰოლდემის TOP20 ლიდერბორდი</p>
            <img src={ExampleIcon} alt="example icon" />
          </div>
        )}

        <div className="leader-board">
          {props.id === 3 ? (
            ""
          ) : (
            <div className="leader-board-title">
              <p>ადგილი</p>
              <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                <CardGiftcardIcon
                  fontSize="small"
                  sx={{ color: "white !important" }}
                />
                ვაუჩერი
              </p>
              <p>პრიზი</p>
            </div>
          )}

          <div className="Board">
            {props.id === 3
              ? FinalSectionData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      style={{ textAlign: "start", justifyContent: "start" }}
                    >
                      <p>{data.id}</p>
                      <p>{data.title}</p>
                    </div>
                  );
                })
              : LeaderBoard.map((data) => {
                  return (
                    <div key={data.id}>
                      <p className="p1">{data.id}</p>
                      <p className="p2">{data.voucher}</p>
                      <p className="p3">
                        {data.img && (
                          <img
                            src={data.img}
                            alt="airplane icon"
                            style={{ width: "14px" }}
                          />
                        )}
                        {data.prize}
                      </p>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </StyledCont>
  );
}

export default BoxOne;
