import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import jsonData from '../data.json';

const Right_child = ({ rightData }) => {
    const selectedItem = jsonData.find((option) => option.id === rightData);
    console.log(selectedItem)

    return (
        <div>
            <Card sx={{
                width: "500px",
                backgroundColor: "white",
                padding: "24px",
                paddingBlock: "48px",
                marginBottom: "24px",
                marginTop: "70px",
                alignItems: "center",
                marginLeft: "178px",
                borderRadius: "36px",
            }}>
                <CardContent>
                    <Typography variant="h1">{selectedItem.Name}</Typography>
                    <Typography variant="h5">Price: Rs.{selectedItem.Price}</Typography>
                    <Typography variant="h3">Item Id:{selectedItem.id}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Right_child
