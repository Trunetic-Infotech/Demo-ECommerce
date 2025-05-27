import React from 'react'
import { HiShoppingBag } from 'react-icons/hi2'

const Privacypolicy = () => {
    return (
        <div className=''>
            <div className="flex justify-center gap-4 mb-10 w-full sm:w-auto">
                {/* <FaBars className="text-white text-2xl cursor-pointer" /> */}
                <HiShoppingBag className="text-pink-800 text-4xl" />
                <span className="text-pink-800 text-2xl sm:text-3xl font-semibold hidden sm:inline">ShopZilla</span>

            </div>
            <hr className='border-black' />
            <div className='text-center m-4'>
                <h1 className='text-xl font-semibold'>Privacy Poilcy</h1>
                <h2 className='text-lg'>Last Updated as of 28 March 2025</h2>
                <p className=' text-xl m-6 inline-block text-wrap'>This privacy policy discloses the privacy practices for ShopZilla.
                    This privacy policy applies solely to
                    information collected by this website. It will notify you of the
                    following:
                </p>
            </div>
            <div className='flex justify-center'>
                <div className=' w-[800px]'>
                    <ul className='list-disc pl-6'>
                        <li className='text-black text-xl font-serif m-4 '>
                            Applicability of the Policy
                            <ul className='list-decimal text-lg pl-6 m-2'>
                                <li> This policy applies only to the information the Company collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</li>
                                <li>  This Policy does not apply to the information that you provide to, or that is collected by, any third-party, that you use in connection with its services. The Company encourages you to consult directly with such third parties about their privacy practices.</li>
                            </ul>
                        </li>
                        <li className='text-black text-xl font-serif m-4 '>
                            Collection of Information
                            <ul className='list-decimal text-lg pl-6 m-2'>
                                <li> This policy applies only to the information the Company collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</li>
                                <li>  This Policy does not apply to the information that you provide to, or that is collected by, any third-party, that you use in connection with its services. The Company encourages you to consult directly with such third parties about their privacy practices.</li>
                            </ul>
                        </li>
                        <li className='text-black text-xl font-serif m-4'>
                            Use of the Information
                            <ul className='list-decimal text-lg pl-6 m-2'>
                                <li> This policy applies only to the information the Company collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</li>
                                <li>  This Policy does not apply to the information that you provide to, or that is collected by, any third-party, that you use in connection with its services. The Company encourages you to consult directly with such third parties about their privacy practices.</li>
                            </ul>
                        </li>
                        <li className='text-black text-xl font-serif m-4'>
                            Sharing of the Information
                            <ul className='list-decimal text-lg pl-6 m-2'>
                                <li> This policy applies only to the information the Company collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</li>
                                <li>  This Policy does not apply to the information that you provide to, or that is collected by, any third-party, that you use in connection with its services. The Company encourages you to consult directly with such third parties about their privacy practices.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Privacypolicy
