"use client";
import React, { useEffect, useMemo, useState } from 'react';
import dynamic from "next/dynamic";


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {


    const [callDetail, setCallDetail] = useState({
        callStatus: false,
        phoneNumber: 9099611212
    })




    const GetCallSetting = async (get_next_key) => {
        try {
            const Result = await fetch(`https://api.brahmikalp.com/api/call-setting/api_key?api_key=${get_next_key}`,
                { method: "GET", redirect: "follow", })
                .then((response) => response.json())
                .then((result) => result)
                .catch((error) => error);
            if (Result.massage = "success") {

                // console.log(Result)

                setCallDetail({ callStatus: Result.all_call[0].call_status ? true : false, phoneNumber: Result.all_call[0].phonenumber })
                return
            }
            return
        } catch (err) {
            return
        }
    }

    useMemo(() => {
        GetCallSetting(process.env.NEXT_APP_API_KEY_HFSPR);
    }, []);

    const [sc, setSc] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setSc(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sc]);


    return (

        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>
            {callDetail.callStatus ? <BottomPopupCall callDetail={callDetail} /> :
                <BottomPopupForm />}
        </div>

    )
}

export default BottomHandler;