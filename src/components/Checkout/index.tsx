import React, { useState } from 'react';

import Footer from '../Footer';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission, e.g., send to server
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='py-32 h-[83vh]'>
                <h2 className='text-3xl font-bold font-sans text-center uppercase'>Checkout</h2>
                
                <div className='flex flex-row justify-evenly my-16'>
                    <div>
                        <h3 className='text-xl font-bold font-sans uppercase'>Billing Information</h3>
                        <div className='py-4'>
                            <label>
                                <input type="text" placeholder='First name' name="firstName" value={formData.firstName} onChange={handleChange} required className='border-black border-[1px] rounded-md' />
                            </label>
                        </div>
                        <div className='py-4'>
                            <label>
                                Last Name:
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div className='py-4'>
                            <label>
                                Email:
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div className='py-4'>
                            <label>
                                Address:
                                <input type="text" name="address" value={formData.address} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div className='py-4'>
                            <label>
                                City:
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div className='py-4'>
                            <label>
                                State:
                                <input type="text" name="state" value={formData.state} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div className='py-4'>
                            <label>
                                Zip Code:
                                <input type="text" name="zip" value={formData.zip} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-sans uppercase'>Payment Information</h3>
                        <div>
                            <label>
                                Name on Card:
                                <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div>
                            <label>
                                Card Number:
                                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div>
                            <label>
                                Expiry Date:
                                <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                        <div>
                            <label>
                                CVV:
                                <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required className='border-black border-[1px] rounded-md mx-6' />
                            </label>
                        </div>
                    </div>                    
                </div>
            
                <button type="submit">Submit</button>
            </form>

            <Footer />
        </div>
    );
};

export default Checkout;
