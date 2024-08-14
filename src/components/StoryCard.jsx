import React from "react";

const StoryCard = ({ story }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-xl font-semibold text-blue-600">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h2>
      <p className="text-gray-600">Upvotes: {story.points}</p>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default StoryCard;