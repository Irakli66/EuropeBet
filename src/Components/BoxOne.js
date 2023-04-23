import React from "react";
import { LeaderBoard } from "../Data/LeaderBoard.js";
import ExampleIcon from "../Assets/Images/example-icon.png";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import styled from "styled-components";
import MechanicIcon from "../Assets/Images/mechanic-icon.png";
import { FinalSectionData } from "../Data/FinalSectionData.js";

const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #171718;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 24px;
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
        p {
          font-size: 13px;
          color: #7d7d7d;
          opacity: 0.9;
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
              backgroundColor: "#2C3234",
              borderRadius: "20px",
              padding: "7px 55px 7px 25px",
              border: "#7D7D7D solid 1px",
            }}
          >
            <p>ქულების დაგროვების მექანიკა</p>
            <img
              src={MechanicIcon}
              style={{
                position: "absolute",
                right: 0,
              }}
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
            <img src={ExampleIcon} />
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
                      style={{
                        display: "flex",
                        gap: "20px",
                        border: "2px solid #2C3234",
                        backgroundColor: "#1E2122",
                        borderRadius: "40px",
                        padding: "14px 20px",
                        alignItems: "center",
                      }}
                      key={data.id}
                    >
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "28px",
                          height: "28px",
                          backgroundColor: "#2C3234",
                          borderRadius: "50%",
                        }}
                      >
                        {data.id}
                      </p>
                      <p>{data.title}</p>
                    </div>
                  );
                })
              : LeaderBoard.map((data) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        border: "2px solid #2C3234",
                        backgroundColor: "#1E2122",
                        borderRadius: "40px",
                        padding: "14px 20px",
                        alignItems: "center",
                      }}
                      key={data.id}
                    >
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "28px",
                          height: "28px",
                          backgroundColor: "#2C3234",
                          borderRadius: "50%",
                        }}
                      >
                        {data.id}
                      </p>
                      <p>{data.voucher}</p>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        {data.img && (
                          <img
                            src={data.img}
                            alt="airplane"
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
