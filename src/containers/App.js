import React, { useState, useEffect } from 'react'
import FormInput from "./FormInput"
import ListContainer from "./ListContainer"

const App = () => {
    const [data, setData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    const [currentOnlyStock, setCurrentOnlyStock] = useState(false)

    useEffect(() => {
        setCurrentData(data)
    }, [data])

    const loadData = async () => {
        try {
            const data = await fetch('../../assets/data.json');
            const dataJSON = await data.json();
            if (dataJSON) {
                // sort data
                setData(dataJSON)
            }
        } catch(error) {
// needs error handling
console.log(error.message)
        }
    }
    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        let currentData = data
        if (currentOnlyStock) {
            currentData = currentData.filter(datum => datum.stocked)
        }
        if (currentSearch) {
            currentData = currentData.filter(datum => currentSearch.toLocaleLowerCase() === datum.name.substring(0, currentSearch.length).toLocaleLowerCase())
        }
        setCurrentData(currentData)
    }, [currentOnlyStock, currentSearch])

    const handleSearchChange = (searchInput) => {
        setCurrentSearch(searchInput)
    }

    const handleStockedChange = (onlyInStock) => {
        setCurrentOnlyStock(onlyInStock)
    }

    let formProps = {
        searchInput: currentSearch,
        onlyInStock: currentOnlyStock,
        handleSearchChange,
        handleStockedChange
    }

    return (
        <>
        <h1>search widget</h1>
        <FormInput {...formProps} />
        <ListContainer data={currentData} />
        </>
    )
}

export default App
