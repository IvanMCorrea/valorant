import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo_full.png';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className='bg-slate-900 p-7 flex justify-center'>
            <ul className='items-center text-red-500 text-xl font-semibold flex gap-10'>
                <li>
                    <h2>Agentes</h2>
                </li>
                <li>
                    <h2>Armas</h2>
                </li>
                <li>
                    <h2>
                        <Image src={logo} alt='Valorant' width={73} height={50} />
                    </h2>
                </li>
                <li>
                    <h2>Mapas</h2>
                </li>
                <li>
                    <h2>Noticias</h2>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
