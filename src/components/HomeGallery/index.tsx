
import {Link} from 'react-router-dom';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';


const objects = [
    {
        'img': image1
    },
    {
        'img': image2
    },
    {
        'img': image3
    },
    {
        'img': image4
    },
    {
        'img': image5
    },
    {
        'img': image6
    }
]

const HomeGallery = () => {
    return (
        <div className="container mx-auto py-8 flex flex-col justify-center items-center" id="galerija">
            <div className="my-4 grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-4 items-center">
                {objects.map((obj, index) => (
                    <img src={obj.img} key={index} className="md:w-[475px] md:h-[300px] sm:w-[400px] sm:h-[200px] w-[300px] h-[200px] object-cover hover:opacity-70 duration-200 rounded" />
                ))}
            </div>
            <Link to="/gallery" className="px-4 py-3 rounded-md text-lg bg-green-800 mx-auto hover:opacity-90 duration-200">Pogledaj sve</Link>
        </div>
    )
}

export default HomeGallery;