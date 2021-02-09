import React, { useState, useEffect } from 'react'
import FormInput from "./FormInput"
import ListContainer from "./ListContainer"

const App = () => {
    const [data, setData] = useState([])
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
    return (
        <>
        <h1>search widget</h1>
        <FormInput />
        <ListContainer data={data} />
        </>
    )
}

export default App
