import React from "react";
import styled from "styled-components";

// Component improts
import Card from "./Card";
import BoxOne from "./BoxOne";
//Img import
import FinalInfo from "../Assets/Images/final-info-img.jpg";
import PokerItemTicket from "../Assets/Images/poker-item-1-ticket-icon.png";
import PokerItemTwoTicket from "../Assets/Images/poker-item-2-ticket-icon.png";

const StyledContainer = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 854px;
  border-radius: 20px;
  background-color: #171718;
  border: #25292b solid 4px;
  padding: 24px;
`;
const StyledTopContent = styled.div`
  img {
    border-radius: 20px;
  }

  .top-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    div {
      position: relative;
      display: flex;
      gap: 20px;
      align-items: center;
      background-color: #202324;
      height: 52px;
      border-radius: 10px;
      width: 65%;
      overflow: hidden;
    }
    h3,
    p {
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      font-family: November GeLC;
    }
  }

  .cards-container {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    .card {
      border-radius: 15px;
      background-color: #25292b;
      max-width: 258px;
      width: 100%;
    }
    .card-title {
      justify-content: center;
      display: flex;
      overflow: hidden;
      position: relative;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: #2c3234;
      height: 53px;
      align-items: center;
      p {
        color: #ffffff;
        font-size: 14px;
        font-family: November GeLC;
        font-weight: bold;
      }
    }
    .card-element-container {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      padding: 5px;
      gap: 6px;
      .card-element {
        display: flex;
        padding: 12px;
        align-items: center;
        gap: 16px;
        background-color: #1c1d1e;
        border-radius: 15px;
        text-align: start;
        p {
          color: #ffffff;
          font-size: 13px;
          font-family: November GeLC;
        }
      }
    }
  }
`;

const StyledMidContent = styled.div`
  background-color: #171718;
  border: #25292b 4px solid;
  border-radius: 20px;
  margin-top: 20px;
  width: 100%;
  .titleMid {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2c3234;
    height: 72px;
    h3 {
      color: #ffffff;
      font-size: 18px;
      font-family: November GeLC;
      font-weight: bold;
    }
  }
  .boxContainer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .boxTerms {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      p {
        font-size: 14px;
        color: #ffffff;
        font-family: November GeLC;
      }
    }
  }
  .fiveBox {
    display: flex;
    gap: 15px;
    justify-content: space-between;
  }

  .threeBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .twoBox {
    display: flex;
    flex-direction: column;
    gap: 21px;
    width: 100%;
  }
  .box {
    position: relative;
    display: flex;
    height: 97px;
    background-color: #1e2122;
    max-width: 395px;
    width: 100%;
    border-radius: 15px;
    padding-left: 28px;
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: start;
      h4 {
        color: #ffffff;
        font-family: November GeLC;
        font-size: 16px;
        font-weight: Bold;
      }
      p {
        color: #ffffff;
        font-family: November GeLC;
        font-size: 14px;
      }
    }
    img {
      position: absolute;
      top: 1px;
      right: 20px;
      width: 79px;
      height: 41px;
    }
  }
`;

const StyledBottomContent = styled.div`
  .bottomContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 79px;
    background-color: #2c3234;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 24px;
    overflow: hidden;
  }
`;

function Section3(props) {
  return (
    <>
      <StyledContainer>
        <StyledTopContent>
          <div className="img">
            <img src={FinalInfo} style={{ maxWidth: "100%" }} />
          </div>
          <div className="top-text">
            <h3 style={{ marginTop: "13px" }}>
              ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
            </h3>
            <p>
              The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
              პოკერის მოთამაშეებს <br /> დაუვიწყარი მოგზაურობის შანსს.
            </p>
            <div>
              <hr
                style={{
                  height: "36px",
                  border: "solid 3px #EF5A21",
                  borderRadius: "5px",
                  boxShadow: "10px 10px 50px #EF5A21",
                  position: "absolute",
                  left: "-3px",
                }}
              />
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Helvetica Neue LT GEO, 65 Medium",
                  fontSize: "14px",
                  marginLeft: "25px",
                }}
              >
                15-დან 21 მასის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
              </p>
            </div>
          </div>
          <div className="cards-container">
            <Card />
            <Card />
            <Card />
          </div>
        </StyledTopContent>
      </StyledContainer>
      <StyledMidContent>
        <div className="titleMid">
          <hr
            style={{
              width: "30%",

              border: "solid 4px #EF5A21",
              borderRadius: "5px",
              boxShadow: "1px 1px 100px #EF5A21",
              zIndex: "2000",
              position: "absolute",
              top: "-3px",
            }}
          />
          <h3>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</h3>
        </div>
        <div className="boxContainer">
          <div className="fiveBox">
            <div className="threeBox">
              <div className="box">
                <div>
                  <h4>“Cashgame Highrollers” -</h4>
                  <p>1 საგზური</p>
                </div>
                <img src={PokerItemTicket} />
              </div>
              <div className="box">
                <div>
                  <h4>„Cashgame Grinders”</h4>
                  <p>1 საგზური</p>
                </div>
                <img src={PokerItemTicket} />
              </div>
              <div className="box">
                <div>
                  <h4>„Tournament Sharks“ -</h4>
                  <p>1 საგზური</p>
                </div>
                <img src={PokerItemTicket} />
              </div>
            </div>
            <div className="twoBox">
              <div className="box" style={{ height: "155px" }}>
                <div>
                  <h4>„The Festival in Malta, GTD“</h4>
                  <p>A კატეგორიის 1 საგზური</p>
                  <p>B კატეგორიის 1 საგზური</p>
                  <p>
                    ტურნირში მონაწილეობის მიღება შეუძლია <br /> ნებისმიერ
                    მსურველს 165₾ ბაი-ინის გადახდით.
                  </p>
                </div>
                <img src={PokerItemTwoTicket} />
              </div>
              <div className="box" style={{ height: "155px" }}>
                <div>
                  <h4>„The Festival in Malta, GTD“</h4>
                  <p>C კატეგორიის 1 საგზური</p>
                  <p>
                    ტურნირში მონაწილეობის მიღება შეუძლია <br /> ნებისმიერ
                    მსურველს 165₾ ბაი-ინის გადახდით.
                  </p>
                </div>
                <img src={PokerItemTicket} />
              </div>
            </div>
          </div>
          <div className="boxTerms">
            <p>
              * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
              Rings ტურნირზე მოხვდება <br /> ბეჭდების შესაბამისი რაოდენობის
              სტეკით
            </p>
            <p>
              *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
              <br /> ბაი-ინის გადახდით.
            </p>
          </div>
        </div>
      </StyledMidContent>
      <StyledBottomContent>
        <div className="bottomContainer" style={{}}>
          <hr
            style={{
              width: "30%",
              border: "solid 4px #EF5A21",

              boxShadow: "1px 1px 100px #EF5A21",
              zIndex: "2000",
              position: "absolute",
              top: "-3px",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: "20px" }}>
              მისტიური გასაღები
            </h2>
            <img />
          </div>
        </div>
        <BoxOne id={props.id} />
      </StyledBottomContent>
    </>
  );
}

export default Section3;
