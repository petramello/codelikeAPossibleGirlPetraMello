import styled from 'styled-components'


export const TimelineDiv = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  color: black;
  font-style: normal;

  &:after {
    content: '';
    position: absolute;
    width: 2px;
    background: #bf280b;
    top: 0;
    bottom: 0;
    left: 50%;

    @media(max-width: 480px), handheld and (orientation: landscape) {
      left: 56.5%;
    }
  }

 
  `

export const TimelineContainer = styled.div`
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 47%;
  
  //circle
  &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
    right: -8px;
    background: #f6a684;
    border: 2px solid #bf280b;
    border-radius: 16px;
    z-index: 1;
  }
  
  //datebar
  &:before{
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    top: calc(50% - 1px);
    right: 8px;
    background: #f6a684;
    z-index: 1;
`

export const LContainer = styled(TimelineContainer)`
    left: 0;
`

export const RContainer = styled(TimelineContainer)`
    left: 50%;
  
  &:after {
    right: 101%;
  }
  
  &:before {
    left: -8px;
  }
  
  
`

export const DateContainer = styled.div`
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #bf280b;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 10;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.9rem;
  }
`

export const LDateContainer = styled(DateContainer)`
  right: -100px;
`

export const RDateContainer = styled(DateContainer)`
  left: -120px;
`

export const IconDiv = styled.div`
  position: absolute;
  display: inline-flex;
  width: 300px;
  height: 50px;
  padding: 10px 5px;
  top: 91%;
  left: 50%;
  background: #f8f8f8;
  border: 1px solid #bf280b;
  border-radius: 5%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: black;
  z-index: 1;
  justify-content: center;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    width: 140px;
    height: 70px;
    padding: 5px;
    top: 97%;
    left: 12%;
    font-size: 1.4rem;
  }
`

export const Skill = styled.p`
  font-size: 1rem;
  margin: auto;
  padding-left: 5px;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    line-height: 1.2rem;
    font-size: 0.8rem;
  }
`

export const TimelineContent = styled.div`  
  padding: 10px 20% 10px 15px;
  background: #f8f8f8;
  position: relative;
  line-height: 1.1em;
  border-radius: 2%;
  
  @media(max-width: 480px), handheld and (orientation: landscape) {
    text-align: left;
  }
 
`