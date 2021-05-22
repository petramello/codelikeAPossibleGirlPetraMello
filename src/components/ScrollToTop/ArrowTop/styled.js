import styled from "styled-components"

export const ArrowTopContainer = styled.div`
    color: rgba(0, 0, 0, 0.2);
    position: fixed;
    font-size: 1.8rem;
    bottom: 35px;
    right: 8px;
    z-index: 99;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    bottom: 80px;
    font-size: 1.4rem;
    right: 5px;
  }
`