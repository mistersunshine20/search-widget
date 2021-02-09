import React from 'react'
//import styled from 'styled-components'
import ItemList from "./../components/ItemList/ItemList"
import SectionTitle from "./../components/SectionTitle/SectionTitle"
import PropTypes from "prop-types"

const ListContainer = ({data}) => {
    let content = []
    let currentTitle = null
    let i = 1
    data.map((datum) => {
        if (datum.category !== currentTitle) {
            currentTitle = datum.category
            content.push(<SectionTitle key={i++} title={datum.category}/>)
        }
        content.push(<ItemList key={i++} {...datum} />)
    })

    return (
        <table>
            <tbody>
            <tr>
                <td style={{padding: "2px 5px", fontWeight: "bold"}}>Name</td>
                <td style={{padding: "2px 5px", fontWeight: "bold"}}>Price</td>
            </tr>
            {content}
            </tbody>
        </table>
    )
}

ListContainer.propTypes = {
    data: PropTypes.array
}

export default ListContainer
