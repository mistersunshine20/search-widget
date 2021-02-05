import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const SectionTitleWrapper = styled.div`
font-weight: bold;
`

const SectionTitle = ({title, width}) => {
    return (
        <SectionTitleWrapper style={{width: width + "px"}}>
            {title}
        </SectionTitleWrapper>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string,
    width: PropTypes.number
}

export default SectionTitle
