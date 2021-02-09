import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const SectionTitleWrapper = styled.td`
font-weight: bold;
padding: 2px 5px;
`

const SectionTitle = ({title, width}) => {
    return (
        <tr>
        <SectionTitleWrapper style={{width: width + "px"}}>{title}</SectionTitleWrapper>
        </tr>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string,
    width: PropTypes.number
}

export default SectionTitle
