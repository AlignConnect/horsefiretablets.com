"use client"
import dynamic from 'next/dynamic';
import React, { Suspense, useEffect } from 'react'
import './components/style.css'
import { Skeleton } from '@mui/material';


// const Header = dynamic(() => import('./components/Header'), {
//     loading: () => <p>Header Loading</p>
// });

// const Form = dynamic(() => import('./components/Form'), {
//     loading: () => <p>Form is Loading</p>
// });


// const SecondCont_ = dynamic(() => import('./components/SecondCont'), {
//     loading: () => <p>Content is Loading</p>
// });


const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});


const FooterPopup = dynamic(() => import("@/app/commonUse/bottompopup/BottomHandler"), {
    loading: () => <p>loader</p>
});


// hftsrh

const Header = dynamic(() => import('./component_hftsrh/Header'))

const Herbs = dynamic(() => import('./component_hftsrh/Herbs'))

const Youtube = dynamic(() => import('./component_hftsrh/Youtube'))

const Form = dynamic(() => import('./components/Form'))

const Last = dynamic(() => import('./component_hftsrh/Last'))


const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hftjcs")

    }, [])

    return (
        // <section className='sm:max-w-2xl w-full mx-auto'>
        <section className='w-full sm:w-[568px] mx-auto  bg-black'>

            {/* <Header />

            <Form />

            <SecondCont_ />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup /> */}

            <Suspense fallback={<Skeleton />}>
                <Header />
            </Suspense>



            <Suspense fallback={<Skeleton />}>
                <Herbs />
            </Suspense>


            <Last />


            <Suspense fallback={<Skeleton />}>
                <Youtube />
            </Suspense>


            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/313e02ad-9686-4059-d794-d6df9016c800/public" alt="sdsd" loading='lazy' />
            </div>

            <div className='w-full text-center'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6cd10f77-06e0-453c-ba50-1bed7247f500/public" alt="sdsd" loading='lazy' className='mx-auto py-10' />
            </div>







            <Suspense fallback={<Skeleton />}>
                <Form />
            </Suspense>



            <div className='w-full bg-white'>
                <CustomerReview />
            </div>

            <Footer />

            <FooterPopup />


        </section>
    )
}

export default page