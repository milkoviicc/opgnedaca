
const Contact = () => {
    return (
        <div className="container md:mx-auto flex justify-center py-40 px-10" id="kontakt">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div>
                   <h2 className="font-medium text-2xl">Kontaktirajte OPG Nedaća</h2> 
                   <p className="my-2 pr-6 text-lg">Ispunite prazna polja i pošaljite poruku našem OPG-u Stjepan Nedaća, ekološkoj oazi u srcu Slavonije.</p>
                    <ul className="my-8 text-lg">
                        <li>Mobitel: <a href="#" className="hover:underline duration-200">+385 095 808 7474</a></li>
                        <li>Whatsapp: <a href="#" className="hover:underline duration-200">+385 095 808 7474</a></li>
                    </ul>
                </div>
                <div>
                    <form className="flex flex-col">
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col my-4 mr-8">
                                <label htmlFor="ime">Ime</label>
                                <input type="text" name="ime" className="border border-black border-solid rounded px-2" />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" name="email" className="border border-black border-solid rounded px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="text">Message</label>
                            <textarea name="text" cols={60} rows={5} className="border border-black border-solid rounded px-2"></textarea>
                        </div>
                        <div className="grid grid-cols-2 my-4 items-stretch justify-end">
                            <p className="lg:text-base text-sm px-0 md:w-full w-[120%]">This site is protected by reCAPTCHA and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</p>
                            <div className="flex justify-end w-full">
                                <button type="submit" className="md:px-3 md:py-3 rounded-md sm:h-full w-32 bg-green-800 hover:opacity-80 duration-200 text-white text-xl font-medium">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;