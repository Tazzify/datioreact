import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

function Reviews() {
        return (
                <Box sx={{ width: 250, display: 'flex', justifyContent: "center", alignItems: 'center', mt: "70px", mx: "auto", mb: "5px" }}>
                        <Rating defaultValue={3.5} precision={0.5} />
                        <Box sx={{ ml: 1.5 }}>3.7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  (12)</Box>
                </Box>
        );
}

export default Reviews;

