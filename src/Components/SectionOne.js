import React from "react";
import styled from "styled-components";
import Box1 from "./BoxOne";
import Box2 from "./BoxTwo";

const StyledSectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 854px;
  background-color: #2c3234;
  border-radius: 20px;
  margin-top: 20px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  .title {
    border-radius: 20px;
    background-color: #2c3234;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 18px;
      color: #ffffff;
      font-family: November GeLC;
    }
  }
`;
const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #171718;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const StyledContBottom = styled.div`
  display: flex;
  border-radius: 20px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  background-color: #2c3234;
  p {
    color: #fff;
  }
`;

function Section1() {
  return (
    <>
      <StyledSectionContainer>
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
        ></hr>
        <div className="title">
          <p>1 ₾ ᲠᲔᲘᲙᲘ = 1 ᲥᲣᲚᲐᲡ</p>
        </div>
        <StyledSection>
          <Box1 />
          <Box2 />
          <Box1 />
          <Box2 />
          <div style={{ padding: "20px" }}>
            <p
              style={{
                color: "#fff",
                fontFamily: "November GeLC",
                fontSize: "14px",
              }}
            >
              * ლიდერბორდის შედეგები განახლდება{" "}
              <a
                href="#"
                style={{
                  color: "#EF5A21",
                  fontSize: "14px",
                  fontFamily: "November GeLC",
                  textDecoration: "underline",
                }}
              >
                პოკერის ლობიში
              </a>
            </p>
          </div>
        </StyledSection>
      </StyledSectionContainer>
      <StyledContBottom>
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
          <p
            style={{
              fontSize: "18px",
              fontFamily: "November GeLC",
              fontWeight: "bold",
            }}
          >
            ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
            ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
          </p>
          <p
            style={{
              fontSize: "15px",
              fontFamily: "Helvetica Neue LT GEO, 55 Roman",
            }}
          >
            * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
            ლობიში.
          </p>
        </div>
      </StyledContBottom>
    </>
  );
}

export default Section1;
