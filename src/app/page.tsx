import { fetchPokemon } from "./api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
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

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// async function getPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) throw new Error("Failed to fetch posts");
//   return (await res.json()) as Post[];
// }

// export default async function Home() {
//   const posts = await getPosts();

//   return (
//     <main>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
