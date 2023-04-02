// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Example with Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-200 text-slate-700 dark:bg-gray-800 dark:text-slate-200">
        {children}
      </body>
    </html>
  );
}
