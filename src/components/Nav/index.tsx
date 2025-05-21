import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Nav = ({ storageLength }: {storageLength: number}) => {
  const [shouldScrollToContact, setShouldScrollToContact] = useState(false);
  const navigate = useNavigate();
  const [menuNav, setMenuNav] = useState(false);

  useEffect(() => {
    if (shouldScrollToContact) {
      // Navigate to the home page
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('kontakt');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Reset the state to avoid repeated scrolling on subsequent navigations
        setShouldScrollToContact(false);
      }, 100); // Allow time for navigation to complete
    }
  }, [shouldScrollToContact, navigate]);

  return (
    <div className="container-full h-24 fixed bg-white w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20" id="top">
      <div className="flex h-full flex-col justify-evenly items-stretch md:flex md:flex-row md:justify-evenly md:items-center">
        <div className='flex flex-row justify-evenly'>
          <Link to="/" className="text-3xl text-black">OPG Nedaća</Link>
          <button className='md:hidden uppercase text-xl' onClick={() => {setMenuNav(prev => !prev); console.log("Menu state changed:", menuNav);}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25" height="25"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
        </div>
        {
          menuNav ? (<ul className="fixed h-full w-full z-40 top-24 left-0 bg-white flex flex-col py-32 space-y-12 uppercase text-2xl items-center">
          <li><Link to="/produkti" onClick={() => setMenuNav(false)}>Proizvodi</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuNav(false)}>Galerija</Link></li>
          <li><button onClick={() => {setShouldScrollToContact(true); setMenuNav(false)}}>KONTAKT</button></li>
          <li><Link to="/cart" className="flex flex-row justify-center items-center" onClick={() => setMenuNav(false)}>Košarica<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15" height="15" className='ml-2 mr-1'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>{storageLength}</Link></li>
        </ul>
        ): 
        (<ul className="hidden md:flex md:flex-row md:space-x-2 md:uppercase">
          <li><Link to="/produkti">Proizvodi</Link></li>
          <li><Link to="/gallery">Galerija</Link></li>
          <li><button onClick={() => {setShouldScrollToContact(true); setMenuNav(false)}}>KONTAKT</button></li>
          <li><Link to="/cart" className="flex flex-row justify-center items-center">Košarica<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15" height="15" className='ml-2 mr-1'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>{storageLength}</Link></li>
        </ul>
        )
        }
        
      </div>
    </div>
  );
};

export default Nav;
