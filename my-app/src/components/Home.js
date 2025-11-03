import React from 'react';
import '../styles/home.css';

const Home = ({title,link}) => {
    return (
        <main className='home-container py-5'>
            <h1 className='home-title'>{title}</h1>

            <ul className='home-list list unstyled'>{link.map((link,idx) => (
                <li key={idx} className='home-list-item'>
                    <a className='home-link' href={link.href}>{link.label}</a>
                </li>
                
            ))
                }
            </ul>


        </main>
)
};
export default Home;


