import { Box, Typography } from "@mui/material";

import NavigationBar from "../components/NavigationBar";

export default function ReadingList() {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          my: 16,
          mx: 32,
        }}
      >
        <Typography>Halo</Typography>
      </Box>
    </>
  );
}
