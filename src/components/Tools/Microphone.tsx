import React from 'react';
import { Chip } from '@mui/material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useAppDispatch } from '../../services/hooks';
import { updateUserMicrophone } from '../../services/users/userService';

export const Microphone = () => {
    const dispatch = useAppDispatch();

    const handleClick = ()=> {
        dispatch(updateUserMicrophone())
    }

    return (
        <Chip
            label="Microphone"
            onClick={handleClick}
            icon={<KeyboardVoiceIcon />}
        />
    )
}
