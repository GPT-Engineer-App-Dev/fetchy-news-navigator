import { useQuery } from "@tanstack/react-query";

const fetchHackerNewsStories = async () => {
  const response = await fetch(
    "https://hn.algolia.com/api/v1/search?tags=front_page"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stories");
  }
  return response.json();
};

const useHackerNewsStories = () => {
  return useQuery({
    queryKey: ["hackerNewsStories"],
    queryFn: fetchHackerNewsStories,
  });
};

export default useHackerNewsStories;