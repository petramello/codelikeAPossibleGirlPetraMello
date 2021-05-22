import styled from 'styled-components'


export const AboutContainer = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin: 80px 0;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    margin: 40px 0;
  }
  
`

export const ImgAbout = styled.img`
  width: 25%;
  position: relative;
  object-fit: contain;
  height: 100%;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    height: 300px;
  }
`

export const AboutTextDiv = styled.div`
  width: 70%;
  height: 100%;
  display: inline-block;
  position: relative;
  text-align: justify;
  justify-content: center;
  align-content: center;
  align-self: center;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-family: 'FuturaLight', sans-serif;
  color: black;
  font-style: italic;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    font-size: 1em;
    line-height: 1em;
    
  }
`

export const TimelineContainer = styled(AboutTextDiv)`
  width: 100%;
  margin-bottom: 80px;
  font-size: 1.15rem;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.8rem;
    margin-left: -20px;
  }
`
