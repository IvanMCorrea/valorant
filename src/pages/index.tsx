import { Inter } from 'next/font/google';
import Image from 'next/image';
import cover from '../assets/cover.png';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <Layout>
            <main className={`flex flex-col items-center justify-between ${inter.className}`}>
                <header>
                    <Image src={cover} alt='Wallpaper' />
                </header>
            </main>
        </Layout>
    );
}
