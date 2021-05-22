import styled from 'styled-components'


export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
`

export const MainContainer = styled.div`
  height: 100%;
  width: 95%;
  padding: 0;
  margin: 0 auto;
  
`

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  height: 540px;
  margin: 80px 0;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    margin: 0;
    
  }
`

export const ImgProfile = styled.img`
  width: 48%;
  position: relative;
  height: 100%;
  object-fit: cover;
  display: inline-flex;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline;
    width: 100%;
  }
`

export const ProfileTextDiv = styled.div`
  width: 48%;
  height: 100%;
  display: inline-block;
  position: relative;
  text-align: justify;
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-family: 'FuturaLight', sans-serif;
  color: black;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    width: 90%;
    font-size: 1rem;
    line-height: 1.2rem;
    margin-left: 15px;
  }
  
`
export const ProfileTextDivII = styled(ProfileTextDiv)`
  margin-top: -15px;
  width: 96%;
  display: inline-block;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    width: 90%;
    font-size: 1rem;
    line-height: 1.2rem;
    margin-left: 15px;
  }
`

export const CitationDiv = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px 0 10px -60px;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  font-style: italic;
  color: #bf280b;
  background-color: #f8f8f8;
  padding: 20px;
  overflow: visible;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1.2rem;
    margin: 10px 0 20px 0;
    padding: 0;
    overflow: hidden;
  }

  @media (min-width: 1824px) {
    font-size: 1.6rem;
  }
`

export const CardsDiv = styled(ProfileContainer)`
  margin: 80px 0;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: none;
  }
`
