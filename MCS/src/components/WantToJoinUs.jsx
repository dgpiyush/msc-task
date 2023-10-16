import React from 'react'

const WantToJoinUs = () => {
    
    const card = () => {
        return (
            <div className="rounded-lg bg-white border p-2 flex flex-col items-center">
                <h1 className="text-black">commencement of business</h1>
                <p>Invested shareholders must confirm payment and office address</p>
                <div className='flex text-sm bg-gray-200 rounded p-2 gap-2'>
                    <div>
                        <p className="font-bold text-blue-500">Due day</p>
                        <p>within 180</p>
                        <p>days</p>
                    </div>
                    <div>
                        <p className="font-bold text-red-500">Penalty fees</p>
                        <p><span className="font-semibold">50,000rs</span>for the company</p>
                        <p><span className="font-semibold">1,000rs/</span>day for directors</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col items-center ">
                <h1 className="text-5xl font-bold">Want to <span className="text-customBlue">join</span> us?</h1>
                <p>To remain with us, it is essential that you diligently follow the steps provided</p>
            </div>
            <div>{card()}</div>
            {/* <div>{card()}</div> */}
            <p className="py-10">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="font-semibold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
        </>
    )
}

export default WantToJoinUs;
