"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { fetchPokemon, fetchPosts } from "../api";

export default function Posts() {
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way

  const { data } = useQuery({
    // const { data } = useSuspenseQuery({
    //na xrisimopoiisw usesuspense pou trww to self signed cert in chain error
    queryKey: ["pokemon"],
    queryFn: () => fetchPokemon(),
  });

  // const { data } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: fetchPosts,
  // });

  data && console.log(data);

  return <div>{data && <h2>The name is {data.name}</h2>}</div>;

  return (
    <ul>
      {data &&
        data.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
    </ul>
  );
}
