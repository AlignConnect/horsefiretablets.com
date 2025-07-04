
import BitlyLinks from '@/components/hooks/Bitlylink'
import Image from 'next/image'

const FlipAmazon = () => {

    const links = BitlyLinks()



    return (<div className="py-3 w-100 px-1 text-center">
        <a href={links?.flipkartMain} className=" w-full d-grid leading-none">
            <h5 className="purchaseProduct leading-tight  pt-2 mb-0 text-md">Flipkart, Amazon से खरीदें और पाएं धमाकेदार ऑफर्स!!</h5>
            <Image className="w-[60%] md:w-[15%] mx-auto -mt-3" src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" width={100} height={500} alt="pic" unoptimized />
        </a>
    </div>
    )
}


export default FlipAmazon
// import Image from 'next/image'

// const FlipAmazon = () => {
//     return (<div className="py-3 w-100 px-1 text-center">
//         <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className=" w-full d-grid leading-none">
//             <h5 className="purchaseProduct leading-tight  pt-2 mb-0 text-md">Flipkart, Amazon से खरीदें और पाएं धमाकेदार ऑफर्स!!</h5>
//             <Image className="w-[60%] md:w-[15%] mx-auto -mt-3" src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" width={100} height={500} alt="pic" unoptimized />
//         </a>
//     </div>
//     )
// }
// export default FlipAmazon