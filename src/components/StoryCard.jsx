import React from "react";
import { Heart } from "lucide-react";

const StoryCard = ({ story }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 bg-gray-200">
        <img
          src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(story.title)}`}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
          <Heart className="text-red-500" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
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
    </div>
  );
};

export default StoryCard;