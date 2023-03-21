import React from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertMessage(props) {
        return (
                <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="sucess"> {props.text} </Alert>
                </Stack>
        );
}

export default AlertMessage;