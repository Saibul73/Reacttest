import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress }) => {

const theme = useTheme()
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-around">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: 'black' }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: '#db587f' }}>
          {subtitle}
        </Typography>
        {/* <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: 'blue'}}
        >
          {increase}
        </Typography> */}
      </Box>
    </Box>
  );
};

export default StatBox;