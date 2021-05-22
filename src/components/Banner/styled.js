import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: inline-flex;
  position: relative;
  height: 600px;
  width: 100%;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    height: 400px;
  }
`

export const BannerImg = styled.img`
  display: inline-flex;
  position: relative;
  height: 600px;
  width: 100%;
  
  @media(max-width: 480px), handheld and (orientation: landscape) {
    height: 400px;
  }
`

export const BannerTitle = styled.p`
  position: absolute;
  font-family: FuturaLight, sans-serif;
  font-size: 2.5em;
  color: #96ab9e;
  text-align: center;
  width: 100%;
  justify-content: center;
  margin: 340px auto;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1.6em;
    margin: 230px auto;
  }
`
