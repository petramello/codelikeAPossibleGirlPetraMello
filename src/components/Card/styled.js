import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Card = styled.div`
  width: ${props => props.cardWidth || "48%"};
  height: ${props => props.cardHeight || "540px"};
  margin: ${props => props.cardMargin || "0"};
  position: relative;
  display: inline-flex;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    width: 98%;
  }
`

export const ImgCard = styled.img`
  position: relative;
  height: ${props => props.imgCardHeight || "100%"};
  width: ${props => props.imgCardWidth || "100%"};
  object-fit: ${props => props.cardFit || "contain"};
  display: block;
  transition: .5s ease;
  opacity: 40%;
  
  ${Card}:hover & {
    opacity: 0.3;
  }

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    width: 98%;
    margin-top: 30px;
  }
`

export const ImgCardDiv = styled.div`
  position: relative;
  display: inline;
  background-image: url(${(props) => props.imgCard});
  transition: .5s ease;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    position: relative;
    width: 98%;
  }
`

export const ImgCardText = styled.p`
  position: relative;
  width: 420px;
  margin: 0 0 10px 50px;
  padding: 0;
  text-align: justify;
  font-family: FuturaLight, sans-serif;
  font-size: 1.1rem;
  color: #bf280b ;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    position: relative;
    width: 330px;
    margin: 0 10px 10px 0;
  }

  @media (min-width: 1824px) {
    font-size: 1.2rem;
    width: 460px;
    margin: 0 0 10px 30px;

  }
`

export const ImgCardTitle = styled(ImgCardText)`
  width: 100px;
  position: absolute;
  top: 40%;
  text-align: center;
  font-size: 1.2rem;
  color: black ;
  font-weight: bold;
  margin: 0 0 0 10px;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    position: relative;
    top: 0;
    margin: 40px 0;
  }
  
  @media (min-width: 1824px) {
    font-size: 1.4rem;
    top: 42%;
`


export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 100%;
  right: 0;
  background: ${props => props.cardContentBack || "#f8f8f8"};
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${Card}:hover & {
    opacity: 0.6;
    width: 100%;
    left: 0;
  }

  @media(max-width: 480px), handheld and (orientation: landscape) {
    display: none;
  }
  
`

export const ContentLink = styled(NavLink)`
  cursor: pointer;
  font-size: 2em;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  display: flex;
  color: ${props => props.contentLinkColor || "#bf280b"};
  margin: ${props => props.contentLinkMargin || "250px auto"};
  //border-bottom: 2px solid #f8f8f8;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none !important;
    font-weight: bold;

`