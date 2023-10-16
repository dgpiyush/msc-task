import React, { useState } from 'react'
import { Link } from "react-router-dom";

const HeroSection = () => {
    const [searchInput, updateInput] = useState('')
    const [CA, setCA] = useState([])
    const searchCAs = () => {
        fetch(`http://localhost:3000/CA?q=${searchInput}`)
            .then(res => res.json())
            .then(data => setCA(data))
    }

    return (
        <>
            <div className="flex items-center  px-12 py-3">
                <div>
                    <h1 className="text-2xl font-bold">Find <span className="text-customBlue">Partners</span>(CAs) available online</h1>
                    <p><span className="font-semibold">CONNECT</span>with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                    <div className="flex items-center">
                        <input type="text" value={searchInput} onChange={(e) => updateInput(e.target.value)}
                            id="search" placeholder="Search by name" className="px-4 py-2 borderrounded-lg" />
                        <button className="bg-blue-500 text-white  py-2 px-7 rounded-lg box-decoration-clone"
                            onClick={() => searchCAs()}>
                            Search
                        </button>
                    </div>
                    <div>
                        {CA.map((value, index) => <p key={index}> <Link to={`/detail/${value.id}`}>{value.name}</Link></p>)}
                    </div>
                </div>
                <div className="flex flex-row px-12 py-3">
                    <img src="/Picture1.png" alt="girl" />
                    <img src="/Picture2.png" alt="grp" />
                    <img src="/Picture3.png" alt="girl" />
                </div>
            </div>
        </>
    )
}

export default HeroSection;
