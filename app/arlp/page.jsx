import dynamic from 'next/dynamic';
import React from 'react'
import './components/home.css'


const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./components/footer"), {
    loading: () => <p>Loading...</p>,
});

const page = () => {
    return (
        <section className='max-w-xl mx-auto'>

            <Header />

            <Footer />

        </section>
    )
}

export default page