import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-between gap-4 bg-customBlue text-white px-3 py-5">

                <div className="gap-2">
                    <img src="/TopBarLogo.png" alt="logo" className="filter brightness-0 invert" />
                    <p>India's first platform dedicated to simplifying partner search</p>
                </div>
               
                    <div>
                        <h1 className="font-semibold">COMPANY</h1>
                        <ul>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold">SOLUTIONS</h1>
                        <ul>
                            <li>Search</li>
                            <li>Connect</li>
                            <li>Research</li>
                            <li>Academy</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold">RESOURCES</h1>
                        <ul>
                            <li>Blogs</li>
                            <li>forms</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold">SUPPORT</h1>
                        <ul>
                            <li>Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold">LEGAL</h1>
                        <ul>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                
            </div>
            <p className="bg-black px-5 py-5 text-white">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserve</p>


        </>
    )
}

export default Footer;
