import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const ListWrapper = styled.div`
display: flex;
flex-direction: row;
`

const OutOfStockWrapper = styled.div`
color: red;
padding: 5px;
overflow-wrap: normal;
border: 1px solid black;
`

const ItemWrapper = styled.div`
padding: 5px;
overflow-wrap: normal;
border: 1px solid black;
`

const ItemList = ({oos, name, price, width}) => {
    let content;
    if (oos) {
        content = (
            <>
                <OutOfStockWrapper style={{maxWidth: width + "px"}}>{name}</OutOfStockWrapper>
                <OutOfStockWrapper style={{maxWidth: width + "px"}}>{price}</OutOfStockWrapper>
            </>
        )
    } else {
        content = (
            <>
                <ItemWrapper style={{maxWidth: width + "px"}}>{name}</ItemWrapper>
                <ItemWrapper style={{maxWidth: width + "px"}}>{price}</ItemWrapper>
            </>
        )
    }
    return (
        <ListWrapper>
            {content}
        </ListWrapper>
    )
}

ItemList.propTypes = {
    oos: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.string,
    width: PropTypes.number
}

export default ItemList
