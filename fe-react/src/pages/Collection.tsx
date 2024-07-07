import React from 'react';
import BookItem from "../components/elements/BookItem";
import NavigationBar from "../components/NavigationBar";
import { Box, Container } from '@mui/material';
import Sidebar from '../components/SideBar';

interface Book {
  title: string;
  author: string;
  tags: string[];
  rating: number;
}

const books: Book[] = [
  { title: "The Hidden Path", author: "Joe", tags: ["fiction", "adventure", "mystery"], rating: 4.5 },
  { title: "Mind Over Matter", author: "Bowie", tags: ["self-help", "psychology"], rating: 4.0 },
  { title: "Science Wonders", author: "Eldia", tags: ["education", "science", "history"], rating: 4.2 },
  { title: "Tech Innovations", author: "Horlando", tags: ["engineering", "technology"], rating: 3.8 },
  { title: "Hearts Entwined", author: "Maria", tags: ["romance", "drama"], rating: 4.7 },
  { title: "The Magic Realm", author: "Yona", tags: ["fantasy", "magic", "young adult"], rating: 4.3 },
  { title: "Nightmare Alley", author: "Urie", tags: ["horror", "thriller"], rating: 4.1 },
  { title: "Life of Legends", author: "Benne", tags: ["biography", "inspiration"], rating: 3.9 },
  { title: "Healthy Living", author: "Alia", tags: ["self-improvement", "health", "wellness"], rating: 4.4 },
  { title: "Galactic Ventures", author: "Vincent", tags: ["science fiction", "space"], rating: 4.0 },
  { title: "War and Peace", author: "Clara", tags: ["historical fiction", "war", "love"], rating: 4.6 },
  { title: "Poetic Dreams", author: "Tom", tags: ["poetry", "classic"], rating: 4.2 },
  { title: "Animal Adventures", author: "Ava", tags: ["children", "animals", "fun"], rating: 4.0 },
  { title: "Mystery Case Files", author: "Zack", tags: ["crime", "detective", "suspense"], rating: 4.3 },
  { title: "Artistic Impressions", author: "Diana", tags: ["art", "creativity"], rating: 3.7 },
  { title: "Journey Across Continents", author: "Liam", tags: ["travel", "exploration"], rating: 4.5 },
  { title: "Myths and Legends", author: "Emma", tags: ["mythology", "ancient"], rating: 4.4 },
  { title: "Philosophical Thoughts", author: "Sophia", tags: ["philosophy", "thinking"], rating: 4.1 },
  { title: "Political Dynamics", author: "James", tags: ["politics", "society"], rating: 3.9 },
  { title: "Financial Freedom", author: "Oliver", tags: ["economics", "finance"], rating: 4.6 },
  { title: "Fitness Goals", author: "Mia", tags: ["sports", "fitness"], rating: 4.3 },
  { title: "Gardening Secrets", author: "Lucas", tags: ["gardening", "nature"], rating: 4.2 },
  { title: "Cultural Rhythms", author: "Isabella", tags: ["music", "culture"], rating: 4.1 },
  { title: "Gourmet Delights", author: "Ethan", tags: ["cooking", "recipes"], rating: 4.5 },
  { title: "Laughter Therapy", author: "Charlotte", tags: ["comedy", "humor"], rating: 4.7 },
];

const groupBooks = (books: Book[], groupSize: number): Book[][] => {
  const groups: Book[][] = [];
  for (let i = 0; i < books.length; i += groupSize) {
    groups.push(books.slice(i, i + groupSize));
  }
  return groups;
};

const Collection: React.FC = () => {
  const bookGroups = groupBooks(books, 4);
  return (
    <>
      <NavigationBar />
      <Container sx={{
        padding: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      >
        <Box sx={{ mr: 4 }}>
          <Sidebar />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "70%", gap: 2 }}>
          {bookGroups.map((group, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexWrap: 'wrap',
                alignItems: "center",
                flexDirection: "row",
                justifyContent: group.length === 4 ? "space-between" : "flex-start",
                gap: 2
              }}
            >
              {group.map((book, idx) => (
                <BookItem key={idx} title={book.title} author={book.author} tags={book.tags} rating={book.rating} />
              ))}
            </Box>
          ))}
        </Box>

      </Container>
    </>
  )
};

export default Collection;
