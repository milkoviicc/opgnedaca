import { useState, useEffect } from "react";

const Produkt = ({ ime, cijena, slika, dodajProdukt, izbrisiProdukt }: { ime: string, cijena: number, slika: string, dodajProdukt: (ime: string) => void, izbrisiProdukt: (ime: string) => void }) => {
    const [product, setProduct] = useState(false);

    useEffect(() => {
        // Check if the product is already in the cart from local storage
        const productInLocalStorage = localStorage.getItem(ime);
        setProduct(productInLocalStorage !== null);
    }, [ime]);

    const AddingToCart = () => {
        dodajProdukt(ime);
        setProduct(true);
    }

    const RemoveFromCart = () => {
        izbrisiProdukt(ime);
        setProduct(false);
    }

    return (
        <div className="sm:w-96 sm:h-96 w-64 h-64 bg-gray-800 rounded-xl flex flex-col">
            <img src={slika} className="w-full sm:h-60 h-32 object-cover rounded-md" alt={ime} />
            <h1 className="text-2xl font-medium text-center text-white py-4">{ime}</h1>
            <div className="flex justify-around items-center mt-[auto] py-3">
                <p className="text-lg font-medium text-white">{cijena-1},99€</p>
                {product
                    ? (<button className="sm:px-4 sm:py-3 px-2 py-1 rounded-md text-lg bg-red-500 hover:opacity-80 duration-200" onClick={RemoveFromCart}>Makni iz kosare</button>)
                    : (<button className="sm:px-4 sm:py-3 px-2 py-1 rounded-md text-lg bg-green-800 hover:opacity-80 duration-200" onClick={AddingToCart}>Dodaj u kosaru</button>)
                }
            </div>
        </div>
    );
};

export default Produkt;
