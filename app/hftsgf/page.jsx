"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/style.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const Form = dynamic(() => import('./components/FormHead'), {
    loading: () => <p>Form is Loading</p>
});

const FormBottom = dynamic(() => import('./components/Form'), {
    loading: () => <p>Form is Loading</p>
});



const SecondCont_ = dynamic(() => import('./components/SecondCont'), {
    loading: () => <p>Content is Loading</p>
});


const Customer_satisfied = dynamic(() => import('@/app/commonUse/CustomerReviewSlider/Customer_satisfied'), {
    loading: () => <p>loader</p>
});


const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});


const FooterPopup = dynamic(() => import("@/app/commonUse/bottompopup/BottomHandler"), {
    loading: () => <p>loader</p>
});


const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hftsgf")

    }, [])

    return (
        <section className='sm:max-w-2xl w-full mx-auto'>

            <Header />

            {/* <Form /> */}

            <SecondCont_ />

            <FormBottom />

            <Customer_satisfied />

            <CustomerReview />

            <Footer />

            <FooterPopup />


        </section>
    )
}

export default page