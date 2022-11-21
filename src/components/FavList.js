import React from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {
    ListItemText,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';

export default function MList({favList, remove}) {
    const createEntry = (item) => {
        return (

        <ListItemButton onClick={() => remove(item.key)}>
        <ListItemIcon>
          <FavoriteOutlinedIcon />
        </ListItemIcon>
        <ListItemText>{item.name} <span class="BoldFont">Cook Time:</span> {item.time} hours</ListItemText>
      </ListItemButton>
        );
    };
    const mData = favList;
    const listM = mData.map(createEntry);

    let sum = 0;
    mData.forEach(item => {
        console.log(item.time)
        sum = +(item.time) + sum
    });

    return <div>
        <list>{listM}</list>
        <p><b>Total Cook Time: </b>{sum}</p>
    </div>;
}
