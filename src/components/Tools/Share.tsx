import React from 'react';
import { Chip } from '@mui/material';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';

export const Share = () => {

    const handleClick = ()=> {

    }

    return (
        <Chip
            label="Share"
            onClick={handleClick}
            icon={<PresentToAllIcon />}
        />
    )
}
