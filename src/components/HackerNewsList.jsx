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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} className="h-64 rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
            <StoryCard key={story.objectID} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HackerNewsList;