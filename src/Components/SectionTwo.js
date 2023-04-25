import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";

// Img imports
import PromoLeft from "../Assets/Images/promo-left-img.png";
import PromoRight from "../Assets/Images/promo-right-img.png";
import MainBgSm from "../Assets/Images/tournament-bg2.png";
import MainBg from "../Assets/Images/main-bg.png";

// MUI imports
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const StyledSectionTwo = styled.div`
  max-width: 854px;
  width: 100%;
`;
const StyledContTop = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  background-color: #2c3234;
  padding: 4px;

  .sectionTitle {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 24px;
    p {
      font-size: 18px;
      font-family: November GeLC;
      font-weight: bold;
    }
    @media screen and (max-width: 600px) {
      p {
        font-size: 16px;
      }
    }
  }
  p {
    color: #fff;
  }
  .content {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    height: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #171718;
    width: 100%;
    h3 {
      font-size: 16px;
      color: #ffffff;
      font-family: November GeLC;
    }
    .time {
      position: relative;
      border: #f05a22 solid 2px;
      display: flex;

      align-items: center;
      border-radius: 10px;
      overflow: hidden;
    }

    .clock {
      background-color: #f05a22;
      border-radius: 50%;
      width: 52px;
      height: 50px;
      position: absolute;
      align-items: center;
      display: flex;
      border: #f05a22 1px solid;
      left: -10px;
      padding-left: 20px;
    }
    .infoBtn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      a {
        max-width: 153px;
        font-size: 15px;
        color: #ffffff;
        padding: 6.5px 18.5px;
        background-color: #f05a22;
        border-radius: 3px;
      }
      p {
        color: #ffffff;
        opacity: 0.9;
        font-size: 13px;
      }
    }

    @media screen and (max-width: 600px) {
      gap: 15px;
      img {
        width: 90px;
        height: 60px;
      }
      .infoBtn {
        visibility: hidden;
        position: absolute;
        z-index: 22222;
        top: 100px;
        left: 100px;
      }
    }
  }
  .infoBtnMobile {
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    a {
      max-width: 153px;
      font-size: 15px;
      color: #ffffff;
      padding: 6.5px 18.5px;
      background-color: #f05a22;
      border-radius: 3px;
    }
    @media screen and (max-width: 600px) {
      visibility: visible;
      position: relative;
      margin: 15px 0px;
      p,
      a {
        font-size: 14px;
      }
    }
  }
`;

const StyledMidContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-top: 27px;
  background-color: #171718;
  border-top: none !important;
  border: 4px solid #2c3234;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    background-color: #25292b;
  }

  .midContTitle {
    padding: 22px 74px;
    background-color: #2c3234;
    width: 100%;
    h3 {
      font-weight: bold;
      color: #ffffff;
      font-size: 17px;
      font-family: November GeLC;
    }
  }
  .midContUText {
    margin: 16px 0px;
    p {
      color: #ffffff;
      font-size: 14px;
      font-family: November GeLC, Light;
    }
    a {
      color: #ef5a21;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 600px) {
    .midContTitle {
      padding: 22px 45px;
    }
    .midContUText {
      margin: 20px 0px;
      display: flex;
      width: 280px;
      flex-direction: column;
      gap: 5px;
      p {
        color: #ffffff;
        font-size: 13px;
        font-family: November GeLC, Regular;
      }
      a {
        color: #ef5a21;
        text-decoration: underline;
      }
    }
    h3 {
      font-size: 16px;
    }
  }
`;

const StyledBotCont = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  background-color: #171718;
  border-radius: 20px;
  border: solid 4px #25292b;

  .bott-cont {
    margin: 24px;
    display: flex;
    gap: 24px;
    .imgs {
      display: flex;
      flex-direction: column;
      gap: 14px;
      .twoImgs {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .img-cover-txt {
        margin-left: 22px;
        max-width: 300px;
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 11px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .img-cover-txt div {
        display: flex;
      }
      .txt-first,
      .txt-second {
        color: #ffffff;
        font-family: Helvetica Neue One Caps;
        font-weight: bold;
        justify-content: space-between;
      }
      .img-cover-txt-bottom {
        max-width: 100%;

        align-items: start;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 11px;
        .secondTxt span {
          color: #094b3d;
          font-family: Helvetica Neue LT GEO, 65 Medium;
          font-size: 16px;
          background-color: #d7c860;
          padding: 4px 23px;
          border-radius: 15px;
          border-bottom-right-radius: 0;
        }
      }
      @media only screen and (max-width: 600px) {
        .twoImgs {
          display: flex;
          flex-direction: column;
          .img-cover-txt {
            left: 40%;
            .txt-first {
              gap: 25px !important;
            }
            .txt-second {
              gap: 40px !important;
            }
          }
        }
        img {
          height: 85px;
          width: 100%;
        }
        .bottom-img img {
          width: 100%;
          height: 86px;
        }
        .img-cover-txt-bottom {
          display: flex;
          gap: 10px;
          left: 142px !important;
          div p {
            width: 100px;

            text-align: justify !important;
          }
          .txt-first,
          .secondTxt p {
          }
          .secondTxt {
            display: flex;
            width: 100% !important;
            gap: 60px !important;
            span {
              color: #094b3d;
              font-family: Helvetica Neue LT GEO, 65 Medium;
              font-size: 14px;
              background-color: #d7c860;
              padding: 3px 10px;
              border-radius: 15px;
              border-bottom-right-radius: 0;
            }
          }
        }
        p {
          font-size: 14px !important;
        }
        #prize {
          font-size: 24px !important;
        }
      }
    }
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
    }
    @media only screen and (max-width: 600px) {
      margin: 0px;
      .imgUtext {
        text-align: start;
        font-size: 14px;
        font-family: Helvetica Neue LT GEO, 65 Medium;
      }
    }
  }

  h3 {
    color: #ffffff;
    font-size: 18px;
    font-family: November GeLC;
    font-weight: bold;
  }
  p {
    font-family: November GeLC, Light;
    color: #ffffff;
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    background-color: #1c1d1e;
    border: none;

    h3 {
      font-size: 13px;
      text-align: start;
      width: 100%;
    }
  }
`;
const StyledContUnder = styled.div`
  display: flex;
  border-radius: 20px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  background-color: #2c3234;
  p {
    color: #fff;
    font-size: 18px;
    font-family: November GeLC;
    font-weight: bold;
  }
  span {
    color: #fff;
    font-size: 15px;
    font-family: Helvetica Neue LT GEO, 55 Roman;
  }
  @media only screen and (max-width: 600px) {
    p {
      font-size: 16px;
    }
    span {
      font-size: 12px;
    }
  }
`;

function Section2(props) {
  return (
    <StyledSectionTwo>
      <StyledContTop>
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
        <div className="sectionTitle">
          <p>ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</p>
        </div>
        <div className="content">
          <h3>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h3>
          <div className="time">
            <div className="clock">
              <AccessTimeIcon sx={{ color: "#fff" }} />
            </div>
            <div
              style={{
                padding: "5px",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "bold",
                  fontFamily: "November GeLC",
                  marginLeft: "40px",
                }}
              >
                19:00 / 19:30 / 20:00
              </p>
            </div>
          </div>
          <div className="infoBtn">
            <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
            <p>
              ტურნირების სრული განრიგის სანახავად გადადი <br /> პოკერის ლობიში
            </p>
            <a href="/">პოკერის ლობი</a>
          </div>
          <img
            src={PromoLeft}
            style={{ position: "absolute", bottom: "0", left: "0" }}
            alt="promo"
          />
          <img
            src={PromoRight}
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
            alt="promo"
          />
        </div>
        <div className="infoBtnMobile">
          <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
          <p>
            ტურნირების სრული განრიგის სანახავად გადადი <br /> პოკერის ლობიში
          </p>
          <a href="/">პოკერის ლობი</a>
        </div>
      </StyledContTop>
      <StyledMidContent>
        <hr
          style={{
            width: "30%",
            border: "solid 4px #EF5A21",
            borderRadius: "5px",
            boxShadow: "1px 1px 100px #EF5A21",
            zIndex: "2000",
            position: "absolute",
            top: "-2px",
          }}
        />
        <div className="midContTitle">
          <h3>ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ</h3>
        </div>
        <BoxOne id={props.id} />

        <BoxTwo />
        <div className="midContUText">
          <p>
            * ლიდერბორდის შედეგები განახლდება <a href="/">პოკერის ლობიში</a>
          </p>
          <p>
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </p>
        </div>
      </StyledMidContent>
      <StyledBotCont>
        <div className="bott-cont">
          <h3>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>
          <div className="imgs">
            <div className="twoImgs">
              <div style={{ position: "relative", width: "100%" }}>
                <div className="img-cover-txt">
                  <div style={{ display: "flex" }} className="txt-first">
                    <p
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      Holdem Highrollers
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                      }}
                    >
                      ბაი-ინი - 550₾
                    </p>
                  </div>
                  <div style={{ display: "flex" }} className="txt-second">
                    <p
                      style={{
                        color: "#FFBE00",
                        fontFamily: "Helvetica Neue One Caps",
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                      id="prize"
                    >
                      50 000 ₾
                    </p>
                    <p
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Helvetica Neue LT GEO, 65 Medium",
                        fontSize: "14px",
                        backgroundColor: "#B78648",
                        padding: "4px 23px",
                        borderRadius: "15px",

                        borderBottomRightRadius: "0",
                      }}
                    >
                      27 აპრილი
                    </p>
                  </div>
                </div>
                <img src={MainBgSm} alt="img" />
              </div>
              <div style={{ position: "relative", width: "100%" }}>
                <div className="img-cover-txt">
                  <div className="txt-first">
                    <p
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      Omaha Highrollers
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                      }}
                    >
                      ბაი-ინი - 550₾
                    </p>
                  </div>
                  <div className="txt-second">
                    <p
                      style={{
                        color: "#FFBE00",
                        fontFamily: "Helvetica Neue One Caps",
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                      id="prize"
                    >
                      50 000 ₾
                    </p>
                    <p
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Helvetica Neue LT GEO, 65 Medium",
                        fontSize: "14px",
                        backgroundColor: "#B78648",
                        padding: "4px 23px",
                        borderRadius: "15px",

                        borderBottomRightRadius: "0",
                      }}
                    >
                      28 აპრილი
                    </p>
                  </div>
                </div>
                <img src={MainBgSm} alt="img" />
              </div>
            </div>
            <div
              style={{ position: "relative", width: "100%" }}
              className="bottom-img"
            >
              <div className="img-cover-txt-bottom">
                <div style={{ display: "flex", gap: "62px" }}>
                  <p
                    className="txt-first"
                    style={{
                      fontSize: "22px",
                      fontFamily: "Helvetica Neue One Caps",
                      fontWeight: "bol",
                      textAlign: "start",
                    }}
                  >
                    Main Events
                  </p>
                  <p className="txt-first">ბაი-ინი - 550₾</p>
                </div>
                <div
                  style={{ display: "flex", gap: "76px" }}
                  className="secondTxt"
                >
                  <p
                    style={{
                      color: "#FFBE00",
                      fontFamily: "Helvetica Neue LT GEO, 65 Medium",
                      fontSize: "26px",
                    }}
                    id="prize"
                  >
                    150 000₾
                  </p>
                  <span>29 აპრილი</span>
                </div>
              </div>
              <img src={MainBg} alt="img" />
            </div>
          </div>
          <p className="imgUtext">
            * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
            The <br /> Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in
            Malta-ს საგზურის მისაღებად.
          </p>
        </div>
      </StyledBotCont>
      <StyledContUnder>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "24px",
          }}
        >
          <p>
            ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
            ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
          </p>
          <span>
            * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
            ლობიში.
          </span>
        </div>
      </StyledContUnder>
    </StyledSectionTwo>
  );
}

export default Section2;
