// src/app/page.tsx
export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-semibold uppercase">Tailwind</h1>
      <p className="mt-2 mt-4 font-extrabold">Tailwind offre de nombreux avantages :</p>
      <ul className="font-mono">
        <li>✔️ Rapidité</li>
        <li>✔️ Petit fichier CSS final</li>
        <li>✔️ Excellente DX</li>
      </ul>
      <p className="text-lg">Cliquez ici si vous aimez tailwind!</p>
      <button className="rounded bg-pink-200 px-4 py-2 hover:bg-pink-400">❤️</button>
    </main>
  );
}
