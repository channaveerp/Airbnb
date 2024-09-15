import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/Modal/Modal';

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};
const font = Nunito({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal isOpen={true} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
