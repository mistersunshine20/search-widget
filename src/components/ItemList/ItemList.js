import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const OutOfStockWrapper = styled.td`
color: red;
padding: 2px 5px;
`

const ItemWrapper = styled.td`
padding: 2px 5px;
`

const ItemList = ({oos, name, price}) => {
    let content;
    if (oos) {
        content = (
            <tr>
                <OutOfStockWrapper>{name}</OutOfStockWrapper>
                <ItemWrapper>{price}</ItemWrapper>
            </tr>
        )
    } else {
        content = (
            <tr>
                <ItemWrapper>{name}</ItemWrapper>
                <ItemWrapper>{price}</ItemWrapper>
            </tr>
        )
    }
    return content
}

ItemList.propTypes = {
    oos: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.string,
    width: PropTypes.number
}

export default ItemList
