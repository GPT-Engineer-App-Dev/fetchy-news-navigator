import React, { useState } from "react";
import useHackerNewsStories from "../hooks/useHackerNewsStories";
import StoryCard from "./StoryCard";
import SearchBar from "./SearchBar";
import { Skeleton } from "@/components/ui/skeleton";

const HackerNewsList = () => {
  const { data, isLoading } = useHackerNewsStories();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = data?.hits.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} className="h-32 mb-6 rounded-lg" />
          ))}
        </div>
      ) : (
        filteredStories.map((story) => (
          <StoryCard key={story.objectID} story={story} />
        ))
      )}
    </div>
  );
};

export default HackerNewsList;