import React, { useState, useEffect } from "react";
import drvo from '../../assets/drvo.png';
import {Link} from 'react-router-dom';
import Footer from "../Footer";

interface MyObject {
    key: string;
    value: Record<string, any>; // Value is now an object
  }

const Cart = ({refreshStorage, kilaza}: {refreshStorage: Function, kilaza: number}) => {
    
    const [localStorageItems, setLocalStorageItems] = useState<MyObject[]>([]);

    const [activeButton, setActiveButton] = useState<'standard' | 'express'>('standard');

    useEffect(() => {
            // Function to fetch all items from localStorage
            const fetchLocalStorageItems = () => {
            const keys = Object.keys(localStorage);
            const itemsArray: MyObject[] = [];

            keys.forEach((key) => {
                // Retrieve value from localStorage
                const value = JSON.parse(localStorage.getItem(key) || '{}'); // Parse JSON string to object
                
                // Push key-value pair to itemsArray
                itemsArray.push({ key, value });
            });

            // Set state with itemsArray
            setLocalStorageItems(itemsArray);
            };

            // Fetch localStorage items on component mount
            fetchLocalStorageItems();
        }, []);
        
    const deleteFn = (key: string) => {
        localStorage.removeItem(key);

        setLocalStorageItems((prevItems) => {
            return prevItems.filter((item) => item.key !== key); // Keep all items except the one with the matching key
        });
        
        refreshStorage();
    }

    const minus = (key: string) => {
      
          const updatedItem = localStorageItems.find((item) => item.key === key);
          if (updatedItem) {
            if(updatedItem.value.kilaza > 1) {
              updatedItem.value.kilaza -= 1;
              updatedItem.value.izracunataCijena = updatedItem.value.cijena * updatedItem.value.kilaza;
              localStorage.setItem(key, JSON.stringify(updatedItem.value));
              setLocalStorageItems((prevItems) =>
                  prevItems.map((item) =>
                    item.key === key && item.value.kilaza > 1
                      ? {
                          ...item,
                          value: {
                            ...item.value,
                            izracunataCijena: updatedItem.value.cijena * updatedItem.value.kilaza,
                            kilaza: updatedItem.value.kilaza
                          },
                        }
                      : item
                  )
                );
            }
        }
    }

    const plus = (key: string) => {

        const updatedItem = localStorageItems.find((item) => item.key === key);
        if (updatedItem) {
            if(updatedItem.value.kilaza < 10) {
              updatedItem.value.kilaza += 1;
              updatedItem.value.izracunataCijena = updatedItem.value.cijena * updatedItem.value.kilaza;
              localStorage.setItem(key, JSON.stringify(updatedItem.value));
              setLocalStorageItems((prevItems) =>
                  prevItems.map((item) =>
                    item.key === key && item.value.kilaza > 1
                      ? {
                          ...item,
                          value: {
                            ...item.value,
                            izracunataCijena: updatedItem.value.cijena * updatedItem.value.kilaza,
                            kilaza: updatedItem.value.kilaza
                          },
                        }
                      : item
                  )
                );
            }
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement;

        if (target.name === 'standard') {
            setActiveButton('standard'); // Set 'standard' as the active button
        } else if (target.name === 'express') {
            setActiveButton('express'); // Set 'express' as the active button
        } else {
            console.error("Unexpected button name");
        }
    };

    function getDate(state: string) {
        var currentDate = new Date();

        if(state == "standard") {
            currentDate.setDate(currentDate.getDate() + 7);
        }
        else if(state == "express") {
            currentDate.setDate(currentDate.getDate() + 3);
        } else {
            console.log("No date for that state");
        }
        

        return currentDate.toISOString().slice(0,10).replace(/-/g, '/');
    }

    function getSubtotal() {
        var finalnaCijena: number = 0;
        localStorageItems.map((item) => {
            var cijena = item.value.kilaza * item.value.cijena;
            finalnaCijena = finalnaCijena + cijena;
        })
        
        return finalnaCijena -1 + 0.99;
    }

    function getPdv(finalnaCijena: number) {
        return Math.trunc(((finalnaCijena) * 0.25)*100)/100
    }

    function getTotalPrice (finalnaCijena: number, pdv: number, state: string) {
        var cijena = finalnaCijena + pdv;

        if(state == "standard") {
            cijena = cijena + 5;
        } else if (state == "express") {
            cijena = cijena + 10;
        } else {
            console.log("Cannot calculate total price.");
        }

        return Math.trunc((cijena)*100)/100;
    }

    return (
        <div className="flex flex-col justify-between min-h-[89.8vh] relative top-0 bg-[#D0D0D0]">
            {localStorageItems.length > 0 ?
            (
            <div className="xl:p-10 relative top-24 bg-[#D0D0D0] flex flex-col xl:flex-row justify-around z-10 mb-24 py-32 px-10 min-h-[90vh] h-fit">
                <div className="xl:w-[65%] bg-white rounded-md">
                    <div className="flex flex-row justify-between items-center h-20 sm:px-16 px-4">
                        <h1 className="sm:text-2xl text-lg font-medium">Shopping cart</h1>
                        <h1 className="sm:text-xl text-base font-medium">{localStorageItems.length} items</h1>
                    </div>
                    <hr className="mx-16"/>

                    <ul className="my-10 sm:mx-16 mx-2">
                        {localStorageItems.map((item, index) => (
                        <li key={index}>
                            {/* tablet and pc */}
                            <div className="hidden md:flex flex-col md:flex-row my-10">
                                <img src={item.value.img} className="w-48 h-56 rounded-md aspect-square"/>
                                <div className="flex flex-row justify-between w-full">
                                    <div className="flex flex-col xl:my-0 lg:px-6 px-2 xl:justify-between">
                                        <div>
                                            <h1 className="text-2xl text-medium text-black"><strong>{item.key}</strong></h1>
                                            <p className="lg:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nunc eu ex fermentum, vel lacinia sapien sodales. Maecenas blandit tortor mi, ac pellentesque lectus bibendum in. Sed ac urna justo. Donec rutrum tellus non velit maximus accumsan. Phasellus sed nisl quis mi tincidunt finibus.</p>
                                        </div>
                                        <div className="flex flex-row w-fit">
                                            <p>€{item.value.cijena}/kg</p>
                                            <div className="mx-5 flex flex-row rounded-xl bg-[#F9F6EE] border-[#d0d0d0] border-2">
                                                <button className="px-2 border-r-2 border-[#d0d0d0]" onClick={() => minus(item.key)}>-</button>
                                                <div className="px-2" id="kgId">{item.value.kilaza}</div>
                                                <button className="px-2 border-l-2 border-[#d0d0d0]" onClick={() => plus(item.key)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h1 className="text-xl font-medium py-6 text-center">€{item.value.izracunataCijena}</h1>
                                        <button className="flex py-6"  onClick={() => deleteFn(item.key)}><svg xmlns="http://www.w3.org/2000/svg" width="20" className="mx-2" viewBox="0 0 448 512"><path fill="#404040" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>Delete</button>
                                    </div>
                                </div>
                            </div>


                            <div className="md:hidden flex flex-col md:flex-row my-10">
                                <div className="flex flex-col sm:flex-row">
                                    <img src={item.value.img} className="w-32 sm:w-48 h-32 sm:h-56 sm:mx-6 ml-4 rounded-md aspect-square"/>
                                    <div className="sm:px-6 pl-4">
                                        <div className="flex justify-between items-center h-fit">
                                            <h1 className="text-2xl text-medium text-black"><strong>{item.key}</strong></h1>
                                            <h1 className="text-xl font-medium text-right">€{item.value.izracunataCijena}</h1>
                                        </div>
                                        <p className="lg:text-base sm:text-sm text-xs max-h-[195px] overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius nunc eu ex fermentum, vel lacinia sapien sodales. Maecenas blandit tortor mi, ac pellentesque lectus bibendum in. Sed ac urna justo. Donec rutrum tellus non velit maximus accumsan. Phasellus sed nisl quis mi tincidunt finibus.</p>
                                    </div>
                                </div>
                                
                                <div className="flex sm:flex-row flex-col justify-between w-full my-4 mx-4">
                                    <div className="flex flex-col xl:my-0 lg:px-6 justify-between">
                                        <div className="flex flex-row w-fit">
                                            <p>€{item.value.cijena}/kg</p>
                                            <div className="mx-5 flex flex-row rounded-xl bg-[#F9F6EE] border-[#d0d0d0] border-2">
                                                <button className="px-2 border-r-2 border-[#d0d0d0]" onClick={() => minus(item.key)}>-</button>
                                                <div className="px-2" id="kgId">{item.value.kilaza}</div>
                                                <button className="px-2 border-l-2 border-[#d0d0d0]" onClick={() => plus(item.key)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <button className="flex py-6"  onClick={() => deleteFn(item.key)}><svg xmlns="http://www.w3.org/2000/svg" width="20" className="mr-2" viewBox="0 0 448 512"><path fill="#404040" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>Delete</button>
                                    </div>
                                </div>
                            </div>
                            
                            <hr/>
                        </li>
                        ))}
                    </ul>
                    <div className="xl:hidden flex flex-col px-10">
                        <h1 className="xl:block text-2xl font-medium my-2">Delivery</h1>
                        <div className={`flex flex-row rounded-2xl w-fit shadow-sm shadow-black bg-opacity-20 bg-black`}>
                            <button className={`rounded-xl shadow-sm px-2 py-1 ${activeButton === 'standard' ? 'bg-white shadow-black shadow-sm' : 'bg-transparent'}`} name="standard" onClick={handleClick}>Standard €4.99</button>
                            <button className={`rounded-xl px-2 py-1 ${activeButton === 'express' ? 'bg-white shadow-black shadow-sm' : null}`} name="express" onClick={handleClick}>Express €9.99</button>
                        </div>
                        <p className="sm:hidden xl:block text-sm font-normal">Delivery date:  {getDate(activeButton)}</p>
                        
                        <div className="my-2">
                            <h3 className="text-2xl font-medium">Pick-up</h3>
                            <p className="w-64 text-sm font-normal">You can also pick up your items at the location: Kujnik 21</p>
                            <label><input type="checkbox" name="pick-up-box" /> I would like to pick-up</label>
                        </div>
                        <div className="flex flex-col w-full my-4">
                            <table width="100%">
                                <tbody>
                                <tr className="flex flex-row justify-between">
                                    <td className="text-lg font-medium">Subtotal</td>
                                    <td className="text-lg font-medium">€{localStorage.length != 0 ? getSubtotal() : '0'}</td>
                                </tr>
                                <tr className="flex flex-row justify-between">
                                    <td className="text-sm">PDV (25%)</td>
                                    <td className="text-sm">€{getPdv(getSubtotal())}</td>
                                </tr>
                                <tr className="flex flex-row justify-between">
                                    <td className="text-sm">Shipping</td>
                                    <td className="text-sm">{activeButton == "standard" && localStorage.length != 0 ? '€4.99' : activeButton == "express" && localStorage.length != 0 ? '€9.99' : '€0'}</td>
                                </tr>
                                </tbody>
                                
                            </table>
                            <hr className="my-4"/>
                            <div className="flex flex-row justify-between">
                                <h2 className="text-lg font-medium">Total</h2>
                                <h2 className="text-lg font-medium">€{localStorage.length != 0 ? getTotalPrice(getSubtotal(), getPdv(getSubtotal()), activeButton) : '0'}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-[100%] py-6 xl:w-full">
                            <Link to="/checkout" className="bg-green-700 rounded-xl w-full relative text-white text-lg font-medium py-2 text-center">Proceed to check out</Link>
                            <button className="border-1 border-black bg-[#b3b1ae] rounded-xl w-full relative text-[#2e2e2d] text-lg font-medium py-2">Continue shopping</button>
                        </div>
                    </div>
                </div>

                <div className="xl:w-[25%] xl:block hidden">
                    <img src={drvo} className="sm:w-1/2 sm:-top-6 sm:-z-10 sm:absolute sm:right-[325px] xl:float-right xl:z-10 xl:top-0 xl: xl:absolute xl:right-10 xl:w-3/12"></img>
                    <div className="relative top-6 xl:top-36 bg-white z-10 rounded-md px-5 py-5 flex flex-row h-fit gap-12 xl:gap-2 xl:flex-col">

                        {/* HIDDEN ON XL, SHOWN ON TABLET AND LESS */}

                        <div className="xl:hidden flex-row">
                            <h1 className="text-2xl font-medium my-2">Delivery</h1>
                            <div className={`flex flex-row rounded-2xl w-fit shadow-sm shadow-black bg-opacity-20 bg-black`}>
                                <button className={`rounded-xl shadow-sm px-2 py-1 ${activeButton === 'standard' ? 'bg-white shadow-black shadow-sm' : 'bg-transparent'}`} name="standard" onClick={handleClick}>Standard €4.99</button>
                                <button className={`rounded-xl px-2 py-1 ${activeButton === 'express' ? 'bg-white shadow-black shadow-sm' : null}`} name="express" onClick={handleClick}>Express €9.99</button>
                            </div>
                            <p className="text-sm font-normal my-2">Delivery date:  {getDate(activeButton)}</p>
                        </div>

                        {/* HIDDEN ON MOBILE AND TABLET, SHOWN ON PC */}

                        <h1 className="sm:hidden xl:block text-2xl font-medium my-2">Delivery</h1>
                        <div className={`sm:hidden xl:flex flex-row rounded-2xl w-fit shadow-sm shadow-black bg-opacity-20 bg-black`}>
                            <button className={`rounded-xl shadow-sm px-2 py-1 ${activeButton === 'standard' ? 'bg-white shadow-black shadow-sm' : 'bg-transparent'}`} name="standard" onClick={handleClick}>Standard €4.99</button>
                            <button className={`rounded-xl px-2 py-1 ${activeButton === 'express' ? 'bg-white shadow-black shadow-sm' : null}`} name="express" onClick={handleClick}>Express €9.99</button>
                        </div>
                        <p className="sm:hidden xl:block text-sm font-normal">Delivery date:  {getDate(activeButton)}</p>
                        
                        <div className="my-2">
                            <h3 className="text-2xl font-medium">Pick-up</h3>
                            <p className="w-64 text-sm font-normal">You can also pick up your items at the location: Kujnik 21</p>
                            <label><input type="checkbox" name="pick-up-box" /> I would like to pick-up</label>
                        </div>
                        

                        <hr />
                        <div className="flex flex-col w-full my-4">
                            <table width="100%">
                                <tbody>
                                <tr className="flex flex-row justify-between">
                                    <td className="text-lg font-medium">Subtotal</td>
                                    <td className="text-lg font-medium">€{localStorage.length != 0 ? getSubtotal() : '0'}</td>
                                </tr>
                                <tr className="flex flex-row justify-between">
                                    <td className="text-sm">PDV (25%)</td>
                                    <td className="text-sm">€{getPdv(getSubtotal())}</td>
                                </tr>
                                <tr className="flex flex-row justify-between">
                                    <td className="text-sm">Shipping</td>
                                    <td className="text-sm">{activeButton == "standard" && localStorage.length != 0 ? '€4.99' : activeButton == "express" && localStorage.length != 0 ? '€9.99' : '€0'}</td>
                                </tr>
                                </tbody>
                                
                            </table>
                            <hr className="my-4"/>
                            <div className="flex flex-row justify-between">
                                <h2 className="text-lg font-medium">Total</h2>
                                <h2 className="text-lg font-medium">€{localStorage.length != 0 ? getTotalPrice(getSubtotal(), getPdv(getSubtotal()), activeButton) : '0'}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-[50%] py-6 xl:w-full ">
                            <Link to="/checkout" className="bg-green-700 rounded-xl w-full relative text-white text-lg font-medium py-2 text-center">Proceed to check out</Link>
                            <Link to="/produkti" className="border-1 border-black bg-[#b3b1ae] rounded-xl w-full relative text-[#2e2e2d] text-lg font-medium py-2 text-center">Continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
            ) :

            (
                <div className="h-[83vh] bg-[#D0D0D0] flex flex-col xl:flex-row z-10 justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg">There are no items to display, first add some items to cart.</h1>
                        <Link to="/produkti" className="px-8 py-2 bg-green-600 rounded-lg w-fit text-lg text-white font-medium hover:cursor-pointer">Idi na produkte</Link>
                    </div>
                </div>
                
            )}
            <div className="">
                <Footer />
            </div>
        </div>
            
    );
};

export default Cart;
