import React from "react";
import HackerNewsList from "../components/HackerNewsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Hacker News Top Stories</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <HackerNewsList />
      </main>
    </div>
  );
};

export default Index;