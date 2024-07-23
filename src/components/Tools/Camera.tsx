import React from 'react';
import { Chip } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

export const Camera = () => {

    const handleClick = ()=> {

    }

    return (
        <Chip
            label="Camera"
            onClick={handleClick}
            icon={<VideoCameraFrontIcon />}
        />
    )
}
