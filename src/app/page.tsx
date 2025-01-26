import { fetchPokemon } from "./api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Pokemon from "./pokemon/pokemon";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Pokemon />
    </HydrationBoundary>
  );
}
