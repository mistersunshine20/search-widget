import React from 'react'
import styled from 'styled-components'
import ItemList from "./../components/ItemList/ItemList"
import SectionTitle from "./../components/SectionTitle/SectionTitle"

const ListWrapper = styled.div`
display: flex;
flex-direction: row;
`

const ListContainer = () => {
    return (
        <>
        <ListWrapper>
            <div style={{padding: "5px", width: "140px"}}>name</div>
            <div style={{padding: "5px", width: "140px"}}>price</div>
        </ListWrapper>
        <SectionTitle title="department 1" width={300}/>
        <ItemList oos={true} name="OOS name 1" price="OOS price 1" width={150} />
        <SectionTitle title="department 2" width={300}/>
        <ItemList oos={false} name="name 2" price="price 2" width={150} />
        <ItemList oos={false} name="really really really really long name" price="price 2" maxWidth={150} />
        </>
    )
}

export default ListContainer
