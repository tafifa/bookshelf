import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import BookItem from "../components/BookItem";
import SearchBar from "../components/SearchBar";

const books = [
  {
    title: "The Hidden Path",
    author: "Joe",
    tags: ["fiction", "adventure", "mystery"],
    rating: 4.5,
  },
  {
    title: "Mind Over Matter",
    author: "Bowie",
    tags: ["self-help", "psychology"],
    rating: 4.0,
  },
  {
    title: "Science Wonders",
    author: "Eldia",
    tags: ["education", "science", "history"],
    rating: 4.2,
  },
  {
    title: "Tech Innovations",
    author: "Horlando",
    tags: ["engineering", "technology"],
    rating: 3.8,
  },
  {
    title: "Hearts Entwined",
    author: "Maria",
    tags: ["romance", "drama"],
    rating: 4.7,
  },
  {
    title: "The Magic Realm",
    author: "Yona",
    tags: ["fantasy", "magic", "young adult"],
    rating: 4.3,
  },
  {
    title: "Nightmare Alley",
    author: "Urie",
    tags: ["horror", "thriller"],
    rating: 4.1,
  },
  {
    title: "Life of Legends",
    author: "Benne",
    tags: ["biography", "inspiration"],
    rating: 3.9,
  },
  {
    title: "Healthy Living",
    author: "Alia",
    tags: ["self-improvement", "health", "wellness"],
    rating: 4.4,
  },
  {
    title: "Galactic Ventures",
    author: "Vincent",
    tags: ["science fiction", "space"],
    rating: 4.0,
  },
  {
    title: "War and Peace",
    author: "Clara",
    tags: ["historical fiction", "war", "love"],
    rating: 4.6,
  },
  {
    title: "Poetic Dreams",
    author: "Tom",
    tags: ["poetry", "classic"],
    rating: 4.2,
  },
  {
    title: "Animal Adventures",
    author: "Ava",
    tags: ["children", "animals", "fun"],
    rating: 4.0,
  },
  {
    title: "Mystery Case Files",
    author: "Zack",
    tags: ["crime", "detective", "suspense"],
    rating: 4.3,
  },
  {
    title: "Artistic Impressions",
    author: "Diana",
    tags: ["art", "creativity"],
    rating: 3.7,
  },
  {
    title: "Journey Across Continents",
    author: "Liam",
    tags: ["travel", "exploration"],
    rating: 4.5,
  },
  {
    title: "Myths and Legends",
    author: "Emma",
    tags: ["mythology", "ancient"],
    rating: 4.4,
  },
  {
    title: "Philosophical Thoughts",
    author: "Sophia",
    tags: ["philosophy", "thinking"],
    rating: 4.1,
  },
  {
    title: "Political Dynamics",
    author: "James",
    tags: ["politics", "society"],
    rating: 3.9,
  },
  {
    title: "Financial Freedom",
    author: "Oliver",
    tags: ["economics", "finance"],
    rating: 4.6,
  },
  {
    title: "Fitness Goals",
    author: "Mia",
    tags: ["sports", "fitness"],
    rating: 4.3,
  },
  {
    title: "Gardening Secrets",
    author: "Lucas",
    tags: ["gardening", "nature"],
    rating: 4.2,
  },
  {
    title: "Cultural Rhythms",
    author: "Isabella",
    tags: ["music", "culture"],
    rating: 4.1,
  },
  {
    title: "Gourmet Delights",
    author: "Ethan",
    tags: ["cooking", "recipes"],
    rating: 4.5,
  },
  // {
  //   title: "Laughter Therapy",
  //   author: "Charlotte",
  //   tags: ["comedy", "humor"],
  //   rating: 4.7,
  // },
];

const suggestedSearch = [
  "The Hidden Path",
  "Mind Over Matter",
  "Science Wonders",
  "Tech Innovations",
  "Hearts Entwined",
];

export default function HomePage() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const isSearchBarEmpty = () => {
    return searchInput.trim() === "";
  };

  return (
    <>
      <Container maxWidth={"xl"}>
        <Container
          sx={{
            py: "8%",
            px: "16%",
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <SearchBar value={searchInput} onChange={handleSearchInputChange} />
            {isSearchBarEmpty() ? (
              <></>
            ) : (
              <Box
                sx={{
                  my: 1,
                  border: "2px solid grey",
                  borderRadius: 2,
                  position: "absolute", 
                  top: "100%",
                  left: 0,
                  width: "100%",
                  backgroundColor: "white",
                  zIndex: 10,
                }}
              >
                <Typography sx={{ pl: 2, py: 1 }}>Suggested Search:</Typography>
                {suggestedSearch.map((title, idx) => (
                  <Typography key={idx} sx={{ pl: 4, py: 0.25 }}>
                    {title}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </Container>
        {isSearchBarEmpty() ? (
          <Box>
            <Typography variant="h4" sx={{ px: 8, py: 1 }}>
              Popular Books
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              sx={{ gap: 2, px: 8 }}
            >
              {books.map((book, idx) => (
                <Grid item key={idx}>
                  <BookItem
                    title={book.title}
                    author={book.author}
                    tags={book.tags}
                    rating={book.rating}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box>
            <Typography variant="h4" sx={{ px: 8, py: 1 }}>
              Searched Books: {searchInput}
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              sx={{ gap: 2, px: 8 }}
            >
              {books.map((book, idx) => (
                <Grid item key={idx}>
                  <BookItem
                    title={book.title}
                    author={book.author}
                    tags={book.tags}
                    rating={book.rating}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
}
