import './globals.css';

export const metadata = {
  title: 'Happy Anniversary',
  description: 'A special wish for Mom & Dad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-pink-300 to-purple-300 min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
