import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center tracking-wider px-4 md:pl-7 lg:h-screen">
            <div className="flex flex-col gap-4 md:w-1/2 md:p-10">
                <div className="flex items-center gap-2">
                    <Image
                        src="/Logo_2.png"
                        alt="logo"
                        priority
                        quality={100}
                        width={100}
                        height={100}
                        className="w-[100px] h-auto -rotate-12"
                    />
                    <h1 className="text-4xl lg:text-6xl font-bold text-beige">CINÉPEDIA</h1>
                </div>
                <h2 className="text-2xl lg:text-4xl font-medium text-beige mt-6">Découvrez le Patrimoine du Cinéma Français</h2>
                <p className="text-beige text-lg lg:text-xl mt-2">Depuis plus de 30 ans, nous constituons méticuleusement la plus complète base de données dédiée
                    au septième art français. Notre bibliothèque numérique rassemble des milliers de films, des grands classiques de la Nouvelle
                    Vague aux productions contemporaines les plus remarquées.</p>
                <div className="flex flex-col justify-center items-center gap-9 my-5 md:hidden">
                    <Image
                        src="/projecteur.jpg"
                        alt="cinema"
                        priority
                        quality={100}
                        width={700}
                        height={500}
                        className="w-full h-auto"
                    />
                    <div className="w-16 h-16 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="var(--color-beige)" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    </div>
                </div>
                <h3 className="text-beige text-2xl lg:text-3xl mt-2">{`Une mine d'informations unique`}</h3>
                <p className="text-beige text-lg lg:text-xl mt-2">{`Chaque œuvre référencée dans notre collection bénéficie d'une fiche détaillée comprenant :`}</p>
                <ul className="list-disc pl-7 text-beige text-lg mb-5 lg:mb-0 lg:text-xl">
                    <li>Les acteurs qui ont donné vie aux personnages</li>
                    <li>Les réalisateurs visionnaires derrière la caméra</li>
                    <li>Les scénaristes artisans des histoires</li>
                    <li>Les compositeurs créateurs des bandes originales</li>
                    <li>Et bien plus encore...</li>
                </ul>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center gap-24 md:w-1/2">
                <Image
                    src="/projecteur.jpg"
                    alt="cinema"
                    priority
                    quality={100}
                    width={700}
                    height={500}
                    className="w-full h-auto"
                />
                <div className="w-16 h-16 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="var(--color-beige)" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                </div>
            </div>
        </section>
    );
}