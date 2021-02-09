import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

const FormInputWrapper = styled.div`
`

const FormInput = ({searchInput, onlyInStock, handleSearchChange, handleStockedChange}) => {
    const onSearchChange = (evt) => {
        handleSearchChange(evt.target.value)
    }

    const onOnlyStockChange = (evt) => {
        handleStockedChange(evt.target.checked)
    }

    return (
        <FormInputWrapper>
            <div><input type="text" name="searchInput" value={searchInput} onChange={onSearchChange} /></div>
            <div><input type="checkbox" name="onlyInStock" checked={onlyInStock} onChange={onOnlyStockChange} /> Only show products in stock</div>
        </FormInputWrapper>
    )
}

FormInput.propTypes = {
    searchInput: PropTypes.string,
    onlyInStock: PropTypes.bool,
    handleSearchChange: PropTypes.func,
    handleStockedChange: PropTypes.func
}

export default FormInput
