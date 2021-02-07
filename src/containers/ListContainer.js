import React from 'react'
//import styled from 'styled-components'
import ItemList from "./../components/ItemList/ItemList"
import SectionTitle from "./../components/SectionTitle/SectionTitle"

const ListContainer = () => {
    return (
        <table>
            <tr>
                <td style={{padding: "2px 5px", fontWeight: "bold"}}>Name</td>
                <td style={{padding: "2px 5px", fontWeight: "bold"}}>Price</td>
            </tr>
            <SectionTitle title="department 1"/>
            <ItemList oos={true} name="OOS name 1" price="OOS price 1" />
            <SectionTitle title="department 2"/>
            <ItemList oos={false} name="name 2" price="price 2" />
            <ItemList oos={false} name="name 3" price="price 3" />
        </table>
    )
}

export default ListContainer
