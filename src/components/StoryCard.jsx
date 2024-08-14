import React from "react";

const StoryCard = ({ story }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        <a href={story.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          {story.title}
        </a>
      </h2>
      <p className="text-gray-500 mb-4">Upvotes: {story.points}</p>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-500 hover:text-blue-700 font-semibold"
      >
        Read more →
      </a>
    </div>
  );
};

export default StoryCard;