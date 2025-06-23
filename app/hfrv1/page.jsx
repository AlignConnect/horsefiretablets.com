"use client";
import dynamic from "next/dynamic"
import React, { useEffect } from 'react'
import './components/home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loading</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loading</p>
});

const SexualHealthSurvey = dynamic(() => import('./components/SexualHealthSurvey'), {
    loading: () => <p>loading</p>
});

const Form2 = dynamic(() => import('./components/Form2'), {
    loading: () => <p>loading</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loading</p>
});

const CustomerVideos = dynamic(() => import('./components/CustomerVideos'), {
    loading: () => <p>loading</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
})


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfrv1")

    }, [])


    return (
        <section className="sm:max-w-2xl mx-auto bg-black ">

            <div>

                <Header />

                <Form />

                <SexualHealthSurvey />



                <Form2 />

                <CustomerVideos />

                <CustomerReview />

                <Footer />

                <FooterPopup />
            </div>

        </section>

    )
}

export default page