// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Clay Clone',
  description: 'Clone of the Clay website using Next.js and TailwindCSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
