import React, { useState, useEffect } from "react"

import {ArrowTopContainer} from "./styled"
import {FaArrowAltCircleUp} from "react-icons/fa"

const ArrowTop = () => {
    const [hideArrowTop, setHideArrowTop] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', hiddenArrowTop)

      return () => window.removeEventListener('scroll', hiddenArrowTop)
    }, [])

    const scrollTop = () => {
        window.scroll({top: 0,
            behavior: 'smooth'})
        return false;
    }

    const hiddenArrowTop = () => {
      if (window.innerHeight + window.scrollY >= 800) {
        setHideArrowTop(false)
      } else {
        setHideArrowTop(true)
      }
    }

    return (
            <ArrowTopContainer onClick={scrollTop}>
                { hideArrowTop ? null : <FaArrowAltCircleUp /> }
            </ArrowTopContainer>
    )

}

export default ArrowTop

