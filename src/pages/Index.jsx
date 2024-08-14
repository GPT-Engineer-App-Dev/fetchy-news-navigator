import React from "react";
import HackerNewsList from "../components/HackerNewsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Hacker News Top Stories</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
              Sign In
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-300">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <HackerNewsList />
      </main>
    </div>
  );
};

export default Index;