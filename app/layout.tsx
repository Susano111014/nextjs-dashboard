import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}
        <footer className="flex items-center justify-center p-6 md:px-28 md:py-12">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
