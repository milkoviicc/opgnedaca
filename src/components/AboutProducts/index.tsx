
const objects = [
    {
        'header': 'Izvrsnost organskog uzgoja',
        'text': 'Naš iskusni obiteljski tim pružiti će Vam sveobuhvatne savjetodavne usluge, pomažući poljoprivrednicima da povećaju kvalitetu svojih prinosa i osiguraju da su njihove operacije ekološki odgovorne i troškovno učinkovite. Naša predanost izvrsnosti u organskom uzgoju osigurava da naši klijenti mogu uživati ​​u najvišoj kvaliteti organskih proizvoda.',
    },
    {
        'header': 'Održiva poljoprivredna rješenja',
        'text': 'OPG Nedaća pruža sveobuhvatne, ekološki prihvatljive usluge i proizvode za optimizaciju produktivnosti našeg gospodarstva. Od očuvanja vode do naprednog upravljanja štetočinama, nastojimo osigurati da se naše voće uzgaja imajući na umu održivost. Naš obiteljski tim strastveno radi i pomaže da stvorimo učinkovitu i profitabilnu poljoprivrednu proizvodnju, istovremeno čuvajući okoliš.',
    },
    {
        'header': 'Misija našeg obiteljskog OPG-a',
        'text': 'Naša je misija pomoći poljoprivrednicima da povećaju svoju proizvodnju i profitni potencijal pružanjem detaljnih i personaliziranih poljoprivrednih rješenja prilagođenih njihovim specifičnim potrebama. Specijalizirani smo za uzgoj aronije i jabuke, te nudimo usluge savjetovanja, alate i resurse kako bismo pomogli našim klijentima da izvuku najviše iz svoje zemlje i usjeva. Naš moto je Živjeti zdravo i Zdravlje na kvadrat.',
    },
]

const AboutProducts = () => {
    return (
        <div className="container w-full min-h-[30rem] mx-auto flex justify-center items-center">
            <div className="relative h-full grid lg:grid-cols-3 lg:gap-16 items-center gap-2 grid-cols-1 px-16 py-10">
                {objects.map((obj, index) => (
                    <div key={index}>
                        <h2 className="text-[rgb(17,24,39) font-medium xl:text-3xl text-xl text-center xl:my-8 my-4">{obj.header}</h2>
                        <p className="text-justify xl:text-base text-sm lg:h-[220px]">{obj.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AboutProducts;