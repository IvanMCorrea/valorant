import React from 'react';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className='bg-slate-950 p-7 flex justify-center'>
            <ul className='items-center text-red-500 text-xl font-semibold flex gap-10'>
                <li>Col 1</li>
                <li>Col 2</li>
                <li>Col 3</li>
            </ul>
        </footer>
    );
};

export default Footer;
