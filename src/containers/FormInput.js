import React from 'react'
import styled from 'styled-components'

const FormInputWrapper = styled.div`
`

const FormInput = () => {
    return (
        <FormInputWrapper>
            <div><input type="text" defaultValue="Search..." name="searchInput" /></div>
            <div><input type="checkbox" name="onlyInStock" /> Only show products in stock</div>
        </FormInputWrapper>
    )
}

export default FormInput
