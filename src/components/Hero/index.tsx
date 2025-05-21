
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-[url('./assets/hero-img.jpg')] bg-no-repeat bg-cover min-h-[90vh] bg-center"> 
            <div className="h-[90vh] bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-10">
                <h1 className="xl:text-7xl text-white text-center xl:w-2/5 w-3/5 md:text-6xl text-4xl">Ekološka oaza u srcu Slavonije</h1>
                <p className="text-2xl text-white text-justify xl:w-2/5 w-3/5 md:text-xl">OPG Nedaća je obiteljsko poljoprivredno gospodarstvo
                koje se bavi ekološkim uzgojem voća i prodajom voćnih
                proizvoda poštivajući najviše ekološke standarde.
                </p>
                <Link to="/produkti" className="px-4 py-3 rounded-md text-lg bg-green-800 hover:opacity-80 duration-200">Naš izbor</Link>
            </div>
        </div>
    )
}

export default Hero;