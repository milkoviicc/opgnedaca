import React, { useState, useEffect } from "react";

const Produkt = ({ ime, cijena, slika, dodajProdukt, izbrisiProdukt }: { ime: string, cijena: number, slika: string, dodajProdukt: Function, izbrisiProdukt: Function }) => {
    const [product, setProduct] = useState(false);

    useEffect(() => {
        // Check if the product is already in the cart from local storage
        const productInLocalStorage = localStorage.getItem(ime);
        setProduct(productInLocalStorage !== null);
    }, [ime]);

    const AddingToCart = () => {
        dodajProdukt(ime, product);
        setProduct(true);
    }

    const RemoveFromCart = () => {
        izbrisiProdukt(ime, product);
        setProduct(false);
    }

    return (
        <div className="w-96 h-96 bg-gray-800 rounded-xl flex flex-col">
            <img src={slika} className="w-full h-60 object-cover rounded-md" alt={ime} />
            <h1 className="text-2xl font-medium text-center text-white py-4">{ime}</h1>
            <div className="flex justify-around items-center mt-[auto] py-3">
                <p className="text-lg font-medium text-white">{cijena-1},99€</p>
                {product
                    ? (<button className="px-4 py-3 rounded-md text-lg bg-red-500 hover:opacity-80 duration-200" onClick={RemoveFromCart}>Makni iz kosare</button>)
                    : (<button className="px-4 py-3 rounded-md text-lg bg-green-800 hover:opacity-80 duration-200" onClick={AddingToCart}>Dodaj u kosaru</button>)
                }
            </div>
        </div>
    );
};

export default Produkt;
