import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PageTransition from '@/components/ui/PageTransition';
import StairEffect from '@/components/ui/StairEffect';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono',
});

export const metadata = {
  title: 'Opule Caleb Portfolio',
  description:
    'This is a portfolio application showcasing Opule Caleb - A digital marketer and fullstack developer developed with NextJs, ShadCDN and Sanity CMS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
