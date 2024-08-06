import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Rating,
} from "@mui/material";

const BookItem = ({ title, author, tags, rating }) => {
  return (
    <Box>
      <Card
        sx={{
          height: "450px",
          width: "205px",
          position: "relative",
          my: 1,
          py: 1,
        }}
        elevation={3}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              my: 0.5,
            }}
          >
            <img
              src={
                "https://cdn.gramedia.com/uploads/items/9786020523316_Melangkah_UV_Spot_R4-1__w150_hauto.jpg"
              }
              alt={"Melangkah"}
              loading="lazy"
            />
          </Box>
          <Typography variant="body2">{author}</Typography>
          <Typography sx={{ my: 0.5 }} variant="h6">
            {title}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Box sx={{ mt: 1 }}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{ mr: 0.5, mb: 0.5 }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookItem;
