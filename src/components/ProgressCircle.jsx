import { Box, useTheme } from "@mui/material";
import { red,grey } from "@mui/material/colors";


const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  const color = {red}
  return (
    <Box
      sx={{
        background: `radial-gradient(${grey[100]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${red[400]} ${angle}deg 360deg),
            ${red[100]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;