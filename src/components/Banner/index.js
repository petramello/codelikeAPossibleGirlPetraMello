import React from 'react'

import imgBanner from "../../assets/imgBanner/abstract-1780223_1920.png"
import {BannerContainer, BannerImg, BannerTitle} from "./styled"

const Banner = props => {
    return (
        <BannerContainer >
            <BannerImg src={imgBanner} alt="Imagem de fundo abstrata." />
            <BannerTitle>{props.bannerTitle}</BannerTitle>
        </BannerContainer>
    )
}
export default Banner