import React from 'react'

const ExploreFeature = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-5xl font-semibold">
                        <span className="text-customBlue">All-in-One platform</span> that Makes Easier
                    </h1>
                    <p>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                </div>
                <div>

                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex items-center">
                    <img src="/search.png" alt="search" />
                    <p><span className="font-semibold">SEARCH</span> for vital company information</p>
                </div>
                <div className="flex items-center">
                    <img src="/connect.png" alt="connect" />
                    <p><span className="font-semibold">CONNECT</span> with the resources to meet your business needs</p>
                </div>
                <div className="flex items-center">
                    <img src="/research.png" alt="research" />
                    <p><span className="font-semibold">RESEARCH</span> and generate reports that drive growth</p>
                </div>
                <div className="flex items-center">
                    <img src="/academy.png" alt="academy" />
                    <p><span className="font-semibold">ACADEMY</span> to give you the skills for success in your career</p>
                </div>
            </div>
        </div>
    )
}

export default ExploreFeature;
