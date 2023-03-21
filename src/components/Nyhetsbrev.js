import React from "react";
import Stack from '@mui/material/Stack';
import Alert from "@mui/material/Alert";


function Nyhetsbrev() {
        const [showAlert, setShowAlert] = React.useState(false);

        const handleClick = () => {
                setShowAlert(true);
                setTimeout(() => {
                        setShowAlert(false);
                }, 10000);
        };

        return (
                <Stack sx={{ width: '100%' }}  >
                        <div>
                                <h3>Nyhetsbrev</h3>

                                <form className="nyhetsbrev_form">
                                        <input id="nyhetsbrev" type="email" placeholder="Din E-postadress..." />
                                        <input id="button_prenumerera" type="button" value="Prenumerera" onClick={handleClick} />
                                </form>
                                {showAlert && <Alert severity="error" > E-postadressen: {document.getElementById("nyhetsbrev").value} är redan prenumererad.</Alert>
                                }
                        </div>
                </Stack>
        );
}

export default Nyhetsbrev;
