//React imports
import { useState } from "react";
import "./App.css";

//Image imports
import HeadBackground from "./Assets/Images/banner.jpg";
import ArrowDown from "./Assets/Images/arrowdown.png";
import SlideImgA from "./Assets/Images/RoundedRectangleA.png";
import SlideImgB from "./Assets/Images/RoundedRectangleB.png";
import SlideImgC from "./Assets/Images/RoundedRectangleC.png";
import Logo from "./Assets/Images/logo.png";

//Component imports
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";

//other imports
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const StyledContainer = styled.div`
  max-width: 940px;
  position: relative;
  width: 100%;

  .logo-signin {
    visibility: hidden;
    position: absolute;
    background-color: #1c1d1e;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
    img {
      width: 24px;
      height: 24px;
    }
    .signUpIn {
      display: flex;
      align-items: center;
      gap: 16px;
      p,
      button {
        color: #ffffff;
        font-size: 15px;
        font-family: Helvetica Neue LT GEO, 65 Medium;
      }
      button {
        background-color: #ef602a;
        border: none;
        padding: 6px 12px;
        border-radius: 5px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .logo-signin {
      visibility: visible;
      position: relative;
    }
  }
  .play-btn {
    background-color: #171718;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    border-top: 2px solid #f05a22;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    z-index: 2222;
    button {
      cursor: pointer;
      font-size: 15px;
      padding: 8px 40px;
      background-color: #f05a22;
      border: none;
      border-radius: 3px;
      font-family: Helvetica Neue LT GEO, 65 Medium;
      color: #ffffff;
    }
  }
`;

const StyledContentHead = styled.div`
  position: relative;
  background-image: url(${HeadBackground});
  background-color: #1c1d1e;
  background-repeat: no-repeat;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  height: 350px;
  background-size: 100% 100%;
  @media screen and (max-width: 600px) {
    height: 210px;
  }

  .content-head {
    @media screen and (max-width: 600px) {
      position: absolute;
      top: 195px;
      left: -16px;
    }
    position: -webkit-stick;
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    z-index: 22222;
  }

  .content-head-left {
    display: flex;
    align-items: center;
    background-color: #25292b;
    opacity: 0.9;
    padding: 3px 12px;
    border-radius: 20px;
    gap: 12px;
    p {
      color: #fff;
      background-color: #7d7d7d;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 13px;
      font-family: Helvetica Neue LT GEO;
    }
    span {
      color: #fff;
      font-size: 15px;
      font-family: Helvetica Neue LT GEO;
      font-weight: bold;
    }
    @media screen and (max-width: 600px) {
      background-color: #1c1d1e;
      p {
        background-color: #25292b;
        font-size: 12px;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .content-head-right {
    @media screen and (max-width: 600px) {
      visibility: hidden;
    }
    display: flex;
    align-items: center;
    background-color: #25292b;
    border-radius: 50%;
    padding: 8px;
  }
`;
const StyledContentBody = styled.div`
  @media screen and (max-width: 600px) {
    padding: 13px;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1c1d1e;
  align-items: center;
  .sections-cont {
    max-width: 854px;
    width: 100%;
  }
  .sections-head {
    /* background-color: blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    padding-top: 24px;
    padding-bottom: 32px;
    h3 {
      font-family: November GeLC;
      text-align: start;
      font-weight: bold;
      font-size: 20px;
      color: #fff;
    }
    @media screen and (max-width: 600px) {
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
      .h3Hid {
        visibility: hidden;
        position: absolute;
      }
    }
  }

  .section-title {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #2c3234;
    border-radius: 20px;
    div {
      cursor: pointer;
    }
    .clickedSection {
      background-color: #ef5a21;
      border-radius: 20px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 77px;
  }

  .title p {
    cursor: pointer;
  }

  .p1 {
    color: #ffffff;
    font-size: 10px;
    opacity: 0.8;
  }
  .p2 {
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.8;
  }
`;
const StyledContentFooter = styled.div`
  @media screen and (max-width: 600px) {
    padding: 13px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c1d1e;
  .rules {
    max-width: 854px;
    margin-top: 55px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    p {
      cursor: pointer;
    }
    img {
      cursor: pointer;
      width: 15px;
      height: 9px;
    }
    .terms {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 20px 27px;
      border-radius: 20px;
      align-items: center;
      background-color: #25292b;
      p {
        color: #ffffff;
        font-size: 15px;
        font-family: Helvetica Neue LT GEO;
      }
      @media screen and (max-width: 600px) {
        p {
          width: 220px;
          font-size: 14px;
          text-align: start;
          color: #bbbbbb;
        }
      }
    }
    @media screen and (max-width: 600px) {
      margin-top: 45px;
      div {
        height: 50px;
      }
    }
  }
  .promotions {
    max-width: 854px;
    margin-bottom: 100px;
    margin-top: 55px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    overflow: hidden;
    .images {
      display: flex;

      gap: 16px;
      .img-text {
        display: flex;
        position: relative;
        text-align: start;
        flex-direction: column;
        .p-sp {
          position: absolute;
          padding: 56px 31px 24px 19px;
          height: 136px;
          top: 130px;
        }
        p {
          color: #ffffff;
          font-size: 14px;
          font-family: Helvetica Neue LT GEO, 95 Black;
          font-weight: bold;
        }
        span {
          color: #ffffff;
          font-size: 14px;
          font-family: Helvetica Neue LT GEO, 55 Roman;
        }
      }
    }
  }
`;

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = () => {
    switch (currentTab) {
      case 1:
        return <SectionOne />;
      case 2:
        return <SectionTwo id={2} />;
      case 3:
        return <SectionThree id={3} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <StyledContainer>
        <div className="logo-signin">
          <img src={Logo} alt="logo" />
          <div className="signUpIn">
            <p>Sign up</p>
            <button>Sign in</button>
          </div>
        </div>
        <StyledContentHead>
          <div className="content-head">
            <div className="content-head-left">
              <p>სლოტები</p>
              <span>10 იანვარი - 12 მარტი</span>
            </div>
            <div className="content-head-right">
              <CloseIcon sx={{ color: "#FFFFFF" }} fontSize="small" />
            </div>
          </div>
        </StyledContentHead>
        <StyledContentBody className="content-body">
          <div className="sections-cont">
            <div className="sections-head">
              <h3>
                მოიპოვე <span className="h3Hid">მრავალფეროვანი პრიზები და</span>{" "}
                10 საგზურიდან ერთ-ერთი
              </h3>
              <p
                style={{
                  fontFamily: "November GeLC",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                მოხვდი პოკერის ფესტივალზე მალტაში
              </p>
            </div>
            <div className="section-title">
              <div
                className={`title ${currentTab === 1 ? "clickedSection" : ""} `}
                onClick={() => setCurrentTab(1)}
              >
                <p className="p1">1 - 29 აპრილი</p>
                <p className="p2">Cash Games</p>
              </div>
              <div
                className={`title ${currentTab === 2 ? "clickedSection" : ""} `}
                onClick={() => setCurrentTab(2)}
              >
                <p className="p1">13 - 29 აპრილი</p>
                <p className="p2">Spring Series</p>
              </div>
              <div
                className={`title ${currentTab === 3 ? "clickedSection" : ""} `}
                onClick={() => setCurrentTab(3)}
              >
                <p className="p1">30 აპრილი</p>
                <p className="p2">Final Stage</p>
              </div>
            </div>
            <div>{toggleTab()}</div>
          </div>
        </StyledContentBody>
        <StyledContentFooter>
          <div className="rules">
            <p
              style={{ marginBottom: "22px", color: "#fff", fontSize: "18px" }}
            >
              წესები და პირობები
            </p>
            <div className="terms">
              <p>როდის იწყება და რა ფორმატით გაიმართება აქცია</p>
              <img src={ArrowDown} alt="arrowDown" />
            </div>
            <div className="terms">
              <p>როგორ მივიღო აქციაში მონაწილეობა?</p>
              <img src={ArrowDown} alt="arrowDown" />
            </div>
            <div className="terms">
              <p>სხვადასვა</p>
              <img src={ArrowDown} alt="arrowDown" />
            </div>
          </div>
          <div className="promotions">
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "18px",
                fontFamily: "Helvetica Neue LT GEO, 65 Medium",
              }}
            >
              მსგავსი აქციები
            </p>
            <div className="images">
              <div className="img-text">
                <img src={SlideImgB} alt="img" />
                <div
                  className="p-sp"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top,  #0d649b,#0d649be8,#0d649b00)",
                  }}
                >
                  <p>Get 300% Cashback</p>
                  <span>retrieve 300% bet amount as real money only here</span>
                </div>
              </div>
              <div className="img-text">
                <img src={SlideImgC} alt="img" />
                <div
                  className="p-sp"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top,  #EF541C,#EF541C99,#EF541C00)",
                  }}
                >
                  <p>Coming Soon</p>
                  <span>retrieve 300% bet amount as real money only here</span>
                </div>
              </div>
              <div className="img-text">
                <img src={SlideImgA} alt="img" />
                <div
                  className="p-sp"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top,  #1A176C,#1A176C99,#1A176C00)",
                  }}
                >
                  <p>Win a Jackpot</p>
                  <span>retrieve 300% bet amount as real money only here</span>
                </div>
              </div>
              <div className="img-text">
                <img src={SlideImgB} alt="img" />
                <div
                  className="p-sp"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top,  #0d649b,#0d649be8,#0d649b00)",
                  }}
                >
                  <p>Get 300% Cashback</p>
                  <span>retrieve 300% bet amount as real money only here</span>
                </div>
              </div>
            </div>
          </div>
        </StyledContentFooter>
        <div className="play-btn">
          <button
            href="#"
            style={{
              padding: "8px 40px",
              backgroundColor: "#F05A22",
              border: "none",
              borderRadius: "3px",
              fontFamily: "Helvetica Neue LT GEO, 65 Medium",
              color: "#FFFFFF",
            }}
          >
            ითამაშე
          </button>
        </div>
      </StyledContainer>
    </div>
  );
}

export default App;
