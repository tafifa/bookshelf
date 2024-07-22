import Box from "@mui/material/Box";

import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          my: 16,
          mx: 32,
        }}
      >
        <SearchBar />
      </Box>
    </>
  );
}
