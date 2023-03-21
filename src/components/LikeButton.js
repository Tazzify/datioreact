import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { blueGrey } from '@mui/material/colors';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <IconButton onClick={handleClick} style={{ marginLeft: "86%", marginBottom: "-25px" }} >
      {liked ? <FavoriteIcon style={{ fill: "red" }} /> : <FavoriteBorderIcon sx={{ color: blueGrey[500] }} />}
    </IconButton>

  );
}

export default LikeButton;
