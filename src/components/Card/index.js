import React, {useState, useEffect} from 'react'

import {CardContent, Card, ContentLink, ImgCardDiv, ImgCardTitle, ImgCardText, ImgCard} from "./styled";


const CardBox = (props) => {
    const [showCardContent, setShowCardContent] = useState(false)

    useEffect(() => {
          shownCardContent()
        }, [])

    const shownCardContent = () => {
        if (props.contentTitle != null) {
            setShowCardContent(true)
        } else {
            setShowCardContent(false)
        }
    }

    return (
        <Card cardWidth={props.cardWidth} cardHeight={props.cardHeight} cardMargin={props.cardMargin} >

            <ImgCard src={props.imgCard}
                     alt={props.altText}
                     imgCardHeight={props.imgCardHeight}
                     imgCardWidth={props.imgCardWidth}
                     cardFit={props.cardFit}
            />

            <ImgCardTitle>{props.cardTitle}</ImgCardTitle>

            <ImgCardDiv imgCardDiv={props.imgCardDiv} alt={props.altText}>
                <ImgCardText>{props.p1}</ImgCardText>
                <ImgCardText>{props.p2}</ImgCardText>
                <ImgCardText>{props.p3}</ImgCardText>
                <ImgCardText>{props.p4}</ImgCardText>
                <ImgCardText>{props.p5}</ImgCardText>
                <ImgCardText>{props.p6}</ImgCardText>
                <ImgCardText>{props.p7}</ImgCardText>
                <ImgCardText>{props.p8}</ImgCardText>
                <ImgCardText>{props.p9}</ImgCardText>
                <ImgCardText>{props.p10}</ImgCardText>
            </ImgCardDiv>

            {showCardContent ?
                <CardContent cardContentBack={props.cardContentBack}>
                    <ContentLink to={props.link} href={props.linkhref} contentLinkMargin={props.contentLinkMargin}
                                 contentLinkColor={props.contentLinkColor}>{props.contentTitle} </ContentLink>
                </CardContent>
                :null}
        </Card>
    )
}

export default CardBox
