import React from 'react'
import { HiShoppingBag } from 'react-icons/hi2'

const TermsConditions = () => {
  return (
    <div>
        <div>
            <HiShoppingBag className="text-pink-800 text-4xl"/>
            <span className='text-pink-600 font-serif text-4xl mb-4'>ShopZilla</span>
        </div>
        <hr/>
        <p>Last Updated on 25 April 2025</p>
        <div>
            <h1 className='font-bold text-xl'>Terms and Conditions</h1>
            <p>Please read these terms and conditions<span>("Terms")</span> carefully before accessing or
            using the Platform (defined hereinafter). These Terms along with the Privacy Policy published on the Platform <span>("Privacy Policy")</span> and other policies (as may be
            notified/displayed/published on the Platform) constitutes the contract between
            the Users of this Platform on the Company (collectively<span>"Agreement").</span></p>
        </div>
    </div>
  )
}

export default TermsConditions
