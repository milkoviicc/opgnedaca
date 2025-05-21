
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';
import image9 from '../../assets/image9.jpg';
import image10 from '../../assets/image10.jpg';
import image11 from '../../assets/image11.jpg';

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
    },
    {
        'img': image7
    },
    {
        'img': image8
    },
    {
        'img': image9
    },
    {
        'img': image10
    },
    {
        'img': image11
    }
]

const FullGallery = () => {
    return (
        <div className="container mx-auto py-24 flex flex-col justify-center items-center">
            <div className="my-4 grid md:grid-cols-3 şm:grid-cols-2 grid-cols-1 gap-4">
                {objects.map(obj => (
                    <img src={obj.img} className="w-[300px] sm:w-[460px] h-[300px] object-cover hover:opacity-70 duration-200 rounded-md" />
                ))}
            </div>
        </div>
    )
}

export default FullGallery;