import { APIResponse } from "@/types/api";
import Image from "next/image";

// app/page.tsx
export default async function IndexPage() {
  // Fetch data from external API or database
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = (await res.json()) as APIResponse;

  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <Image src={character.image} alt={character.name} width={300} height={300} />
            <p>Various info:</p>
            <ul>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Status: {character.status}</li>
              <li>Origin: {character.location.name}</li>
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
