import { Box, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";


const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  const color = {red}
  return (
    <Box
      sx={{
        background: `radial-gradient(${red[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${red[200]} ${angle}deg 360deg),
            ${color}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;