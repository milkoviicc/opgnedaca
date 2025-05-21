
import aronija from '../../assets/image6.jpg';
import jabuka from '../../assets/image1.jpg';
import kruska from '../../assets/kruska.jpg'

import Produkt from "../Produkt";

const produkti = [
    {
        'ime': 'Aronija',
        'cijena': 32,
        'kilaza': 1,
        'izracunataCijena': 32,
        'img': aronija
    },
    {
        'ime': 'Jabuka',
        'cijena': 16,
        'kilaza': 1,
        'izracunataCijena': 16,
        'img': jabuka
    },
    {
        'ime': 'Kruška',
        'cijena': 16,
        'kilaza': 1,
        'izracunataCijena': 16,
        'img': kruska
    }
];



const Products = ({refreshStorage}: {refreshStorage: () => void}) => {

    const dodajProdukt = (ime: string) => {
        produkti.map(obj => {
            if(obj.ime == ime) {
                localStorage.setItem(ime, JSON.stringify(obj));
                refreshStorage();
            }
        })
    }

    const izbrisiProdukt = (ime: string) => {
        produkti.map(obj => {
            if(obj.ime == ime) {
                localStorage.removeItem(ime);
                refreshStorage();
            }
        })
    }
    return (
        <div className="bg-[rgb(243,244,246)] w-[100vw] min-h-[100vh] h-[100%] flex justify-center py-32">
            <div className="mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 xl:gap-12 place-items-center">
                {produkti.map((produkt, index) => (
                    <Produkt key={index} ime={produkt.ime} cijena={produkt.cijena} slika={produkt.img} dodajProdukt={dodajProdukt} izbrisiProdukt={izbrisiProdukt}/>
                ))}
            </div>
        </div>
    )
};

export default Products;