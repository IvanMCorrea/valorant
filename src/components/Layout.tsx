import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
