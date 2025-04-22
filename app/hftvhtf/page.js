"use client"
import { Skeleton } from '@mui/material';
import './page.css'
import React, { lazy, Suspense, useEffect } from 'react'
import CustomerReview from '@/app/hftvht/component/CustomerReview'
import Footer from '@/app/commonUse/Footer'
import FooterPopup from '@/app/commonUse/bottompopup/BottomHandler'
const Header = lazy(() => import('./component/Header'));


const page = () => {



    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftvht");
    }, []);

    return (
        <div className='w-full sm:w-[480px] mx-auto border bg-black'>

            <Suspense fallback={<Skeleton />}>
                <Header />
            </Suspense>

            {/* <Order /> */}

          
         

            {/* <Suspense fallback={<Skeleton />}>
                <Youtube />
            </Suspense> */}

            <div className='w-full bg-white'>
                <CustomerReview />
            </div>

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page
