"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {

    const { GetCallSetting, FetchWebCheckout, callDetail, sc } = useGlobalContext();

    const data = usePathname();


    const [Ap, setAp] = useState({ api: "", key: "" });


    function checkcall() {

        // let checkcolumn = localStorage.getItem('PATH_KEY');
        let checkcolumn = "/" + data.split("/")[1];


        switch (checkcolumn) {

            case "/":
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
            case "/hfh":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFH,
                    key: process.env.NEXT_APP_API_KEY_HFH
                });

            case "/hft":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT,
                    key: process.env.NEXT_APP_API_KEY_HFT
                });

            case "/hfo":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFO,
                    key: process.env.NEXT_APP_API_KEY_HFO
                });

            case "/hxt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HXT,
                    key: process.env.NEXT_APP_API_KEY_HXT
                });

            case "/hfu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFU,
                    key: process.env.NEXT_APP_API_KEY_HFU
                });



            case "/hfd":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFD,
                    key: process.env.NEXT_APP_API_KEY_HFD
                });


            case "/hflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFLIP
                });

            case "/hfq":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFQ,
                    key: process.env.NEXT_APP_API_KEY_HFQ
                });

            case "/hfkrt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKRT,
                    key: process.env.NEXT_APP_API_KEY_HFKRT
                });


            case "/hfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKT,
                    key: process.env.NEXT_APP_API_KEY_HFKT
                });

            case "/hfkart":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKART,
                    key: process.env.NEXT_APP_API_KEY_HFKART
                });

            case "/hkart":
                return setAp({
                    api: process.env.NEXT_APP_URL_HKART,
                    key: process.env.NEXT_APP_API_KEY_HKART
                });

            case "/hfp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFP,
                    key: process.env.NEXT_APP_API_KEY_HFP
                });

            case "/hfb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFB,
                    key: process.env.NEXT_APP_API_KEY_HFB
                });

            case "/bhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHF,
                    key: process.env.NEXT_APP_API_KEY_BHF
                });

            case "/bhfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHFKT,
                    key: process.env.NEXT_APP_API_KEY_BHFKT
                });


            case "/hfs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFS,
                    key: process.env.NEXT_APP_API_KEY_HFS
                });


            case "/ahf":
                return setAp({
                    api: process.env.NEXT_APP_URL_AHF,
                    key: process.env.NEXT_APP_API_KEY_AHF
                });

            case "/ahfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_AHFKT,
                    key: process.env.NEXT_APP_API_KEY_AHFKT
                });

            case "/hfe":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFE,
                    key: process.env.NEXT_APP_API_KEY_HFE
                });

            case "/hfk":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFK,
                    key: process.env.NEXT_APP_API_KEY_HFK
                });

            case "/hfm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFM,
                    key: process.env.NEXT_APP_API_KEY_HFM
                });

            case "/cjhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_CJHF,
                    key: process.env.NEXT_APP_API_KEY_CJHF
                });

            // HF01A

            case "/hf01a":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF01A,
                    key: process.env.NEXT_APP_API_KEY_HF01A
                });
            // HF369A

            case "/hf369clickadu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF369CLICKADU,
                    key: process.env.NEXT_APP_API_KEY_HF369CLICKADU
                });

            case "/hf69h":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF69H,
                    key: process.env.NEXT_APP_API_KEY_HF69H
                });

            case "/hf69hcadu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF69HCADU,
                    key: process.env.NEXT_APP_API_KEY_HF69HCADU
                });

            case "/hf99":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF99,
                    key: process.env.NEXT_APP_API_KEY_HF99
                });

            case "/hf99n":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF99N,
                    key: process.env.NEXT_APP_API_KEY_HF99N
                });

            case "/hftsin":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSIN,
                    key: process.env.NEXT_APP_API_KEY_HFTSIN
                });

            case "/hftdel":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTDEL,
                    key: process.env.NEXT_APP_API_KEY_HFTDEL
                });

            case "/hf71":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF71,
                    key: process.env.NEXT_APP_API_KEY_HF71
                });

            case "/hf71n":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF71N,
                    key: process.env.NEXT_APP_API_KEY_HF71N
                });

            case "/hft01doc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT01DOC,
                    key: process.env.NEXT_APP_API_KEY_HFT01DOC
                });

            case "/hftsx":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSX,
                    key: process.env.NEXT_APP_API_KEY_HFTSX
                });

            case "/hftsxf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSXF,
                    key: process.env.NEXT_APP_API_KEY_HFTSXF
                });

            case "/hfrush":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFRUSH,
                    key: process.env.NEXT_APP_API_KEY_HFRUSH
                });

            case "/hftxc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTXC,
                    key: process.env.NEXT_APP_API_KEY_HFTXC
                });

            // HFOPT
            case "/hfopt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFOPT,
                    key: process.env.NEXT_APP_API_KEY_HFOPT
                });

            case "/hxb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HXB,
                    key: process.env.NEXT_APP_API_KEY_HXB
                });

            case "/hfstar":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSTAR,
                    key: process.env.NEXT_APP_API_KEY_HFSTAR
                });

            case "/hftab":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTAB,
                    key: process.env.NEXT_APP_API_KEY_HFTAB
                });

            case "/hfuri":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFURI,
                    key: process.env.NEXT_APP_API_KEY_HFURI
                });

            case "/hfjsx":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFJSX,
                    key: process.env.NEXT_APP_API_KEY_HFJSX
                });

            case "/hfjflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFJFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFJFLIP
                });

            case "/hft143":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT143,
                    key: process.env.NEXT_APP_API_KEY_HFT143
                });


            case "/hft143f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT143F,
                    key: process.env.NEXT_APP_API_KEY_HFT143F
                });

            case "/hftlh6":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTLH6,
                    key: process.env.NEXT_APP_API_KEY_HFTLH6
                });

            case "/hftlh6f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTLH6F,
                    key: process.env.NEXT_APP_API_KEY_HFTLH6F
                });

            // HFTCHECK

            case "/hftcheck":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTCHECK,
                    key: process.env.NEXT_APP_API_KEY_HFTCHECK
                });

            case "/hftchkflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTCHKFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFTCHKFLIP
                });

            case "/hftoral69":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTORAL69,
                    key: process.env.NEXT_APP_API_KEY_HFTORAL69
                });

            case "/hftoral69f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTORAL69F,
                    key: process.env.NEXT_APP_API_KEY_HFTORAL69F
                });


            case "/hfts":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTS,
                    key: process.env.NEXT_APP_API_KEY_HFTS
                });

            case "/hftrx":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRX,
                    key: process.env.NEXT_APP_API_KEY_HFTRX
                });


            //----------------------

            case "/hfsxyflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSXYFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFSXYFLIP
                });


            case "/hfxycflp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFXYCFLP,
                    key: process.env.NEXT_APP_API_KEY_HFXYCFLP
                });



            case "/hftprof":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTPROF,
                    key: process.env.NEXT_APP_API_KEY_HFTPROF
                });


            case "/hfckflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCKFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFCKFLIP
                });



            case "/hftrcif":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRCIF,
                    key: process.env.NEXT_APP_API_KEY_HFTRCIF
                });

            case "/hftrazf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRAZF,
                    key: process.env.NEXT_APP_API_KEY_HFTRAZF
                });


            case "/hftjcs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTJCS,
                    key: process.env.NEXT_APP_API_KEY_HFTJCS
                });

            case "/hfcks":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCKS,
                    key: process.env.NEXT_APP_API_KEY_HFCKS
                });

            case "/hftrazs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRAZS,
                    key: process.env.NEXT_APP_API_KEY_HFTRAZS
                });

            case "/hfsxys":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSXYS,
                    key: process.env.NEXT_APP_API_KEY_HFSXYS
                });


            case "/hftpros":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTPROS,
                    key: process.env.NEXT_APP_API_KEY_HFTPROS
                });

            case "/hftsg":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSG,
                    key: process.env.NEXT_APP_API_KEY_HFTSG
                });

            case "/hftsgf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSGF,
                    key: process.env.NEXT_APP_API_KEY_HFTSGF
                });


            case "/hftaic":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTAIC,
                    key: process.env.NEXT_APP_API_KEY_HFTAIC
                });

            case "/hftaiaf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTAIAF,
                    key: process.env.NEXT_APP_API_KEY_HFTAIAF
                });


            case "/hfafc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFAFC,
                    key: process.env.NEXT_APP_API_KEY_HFAFC
                });

            // hftafc


            case "/hftafc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTAFC,
                    key: process.env.NEXT_APP_API_KEY_HFTAFC
                });


            // NEXT_APP_URL_HFTJNT


            case "/hftjnt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTJNT,
                    key: process.env.NEXT_APP_API_KEY_HFTJNT
                });


            case "/hftjntf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTJNTF,
                    key: process.env.NEXT_APP_API_KEY_HFTJNTF
                });

            case "/hftv":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTV,
                    key: process.env.NEXT_APP_API_KEY_HFTV
                });


            case "/hftvf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTVF,
                    key: process.env.NEXT_APP_API_KEY_HFTVF
                });


            case "/hftnxt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTNXT,
                    key: process.env.NEXT_APP_API_KEY_HFTNXT
                });


            case "/hftnxtf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTNXTF,
                    key: process.env.NEXT_APP_API_KEY_HFTNXTF
                });



            case "/hftvht":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTVHT,
                    key: process.env.NEXT_APP_API_KEY_HFTVHT
                });


            case "/hftvhtf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTVHTF,
                    key: process.env.NEXT_APP_API_KEY_HFTVHTF
                });


            case "/hftsz":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSZ,
                    key: process.env.NEXT_APP_API_KEY_HFTSZ
                });


            case "/hfrv1":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFRV1,
                    key: process.env.NEXT_APP_API_KEY_HFRV1
                });

            case "/hfrv1f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFRV1F,
                    key: process.env.NEXT_APP_API_KEY_HFRV1F
                });




            default:
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
        }

    }

    useEffect(() => {
        checkcall();
    }, []);



    useMemo(() => {

        if (Ap.api && Ap.key) {
            GetCallSetting(Ap.key);
            FetchWebCheckout(Ap.key, Ap.api);
        }

    }, [Ap]);


    return (

        <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>



            {callDetail.callStatus ? <BottomPopupCall /> :
                <BottomPopupForm />}
        </div>

    )
}

export default BottomHandler;