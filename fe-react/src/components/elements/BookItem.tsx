import React from 'react';
import { Box, Card, CardContent, Typography, Chip, IconButton, Rating } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

interface BookItemProps {
  title: string;
  author: string;
  tags: string[];
  rating: number;
}

const BookItem: React.FC<BookItemProps> = ({ title, author, tags, rating }) => {
  return (
    <Box>
      <Card sx={{ height: "450px", maxWidth: 185, position: 'relative', mb: '2' }}>
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8 }}
          aria-label="save to reading list"
        >
          <BookmarkBorderIcon />
        </IconButton>
        <CardContent>
          <img
            src={'https://cdn.gramedia.com/uploads/items/9786020523316_Melangkah_UV_Spot_R4-1__w150_hauto.jpg'}
            alt={'Melangkah'}
            loading="lazy"
          />
          <Typography variant="body2">
            {author}
          </Typography>
          <Typography variant="h6">
            {title}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Box sx={{ mt: 1 }}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookItem;
