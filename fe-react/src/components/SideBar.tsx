import { Search } from "@mui/icons-material";
import { Container, FormControl, Box, TextField, Button, FormLabel, ButtonGroup, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function Sidebar() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <TextField id="standard-basic" label="Cari judul buku..." variant="standard" sx={{ flexGrow: 1 }} />
          <Button sx={{ ml: 1 }}> <Search /> </Button>
        </Box>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Category</FormLabel>
        <ButtonGroup
          orientation="vertical"
          fullWidth
          sx={{
            '& .MuiButton-root': {
              textAlign: 'left',
              justifyContent: 'flex-start',
              padding: '8px 16px',
              border: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 209, 84, 0.2)',
                border: 'none'
              },
            },
          }}
        >
          <Button fullWidth>Comics</Button>
          <Button fullWidth>Self Improvement</Button>
          <Button fullWidth>Education</Button>
          <Button fullWidth>Engineering</Button>
        </ButtonGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Rating</FormLabel>
        <RadioGroup>
          <FormControlLabel value="5" control={<Radio />} label="⭐⭐⭐⭐⭐" />
          <FormControlLabel value="4" control={<Radio />} label="⭐⭐⭐⭐" />
          <FormControlLabel value="3" control={<Radio />} label="⭐⭐⭐" />
          <FormControlLabel value="2" control={<Radio />} label="⭐⭐" />
          <FormControlLabel value="1" control={<Radio />} label="⭐" />
        </RadioGroup>
      </FormControl>


      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Availability</FormLabel>
        <RadioGroup>
          <FormControlLabel value="available" control={<Radio />} label="Available Now" />
          <FormControlLabel value="out-of-stock" control={<Radio />} label="Out of Stock" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}