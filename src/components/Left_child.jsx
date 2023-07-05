import React, { useState } from 'react'
import { Select, MenuItem } from '@mui/material';
import jsonData from '../data.json';

const Left_child = ({ getData }) => {

    const [selectedId, setSelectedId] = useState(3); // Default selected ID is 3

    const handleSelect = (selectedItemId) => {
        setSelectedId(selectedItemId);
        getData(selectedItemId)
    };
    const handleChange = (event) => {
        const selectedItemId = event.target.value;
        handleSelect(selectedItemId);
    }

    return (
        <div >
            <h1 style={{ marginLeft: "50px", marginTop: "50px" }}>List Of Items :</h1>
            <Select sx={{
                marginLeft: "90px",
                backgroundColor: "white",
                fontSize: "20px",
                width: "150px"
            }} value={selectedId} onChange={handleChange}>
                {jsonData.map((option) => (
                    <MenuItem key={option.id} value={option.id} onClick={handleSelect}>
                        {option.Name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}
export default Left_child
