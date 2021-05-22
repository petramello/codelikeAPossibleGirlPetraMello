import styled from "styled-components";

export const ProjectCardsDiv = styled.div`
  display: inline-block;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 80px auto;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    margin: 0 auto;
  }
`