import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akshat Rastogi | Software Engineer & Product Builder',
  description: 'Software Engineer I @ Honeywell Aerospace | Co-Founder @ Hive | Building products that matter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


