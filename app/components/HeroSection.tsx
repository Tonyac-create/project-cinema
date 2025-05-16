import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-4 tracking-wider py-10 relative overflow-visible">
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
                <h1 className="text-6xl font-bold text-beige">CINÉPEDIA</h1>
            </div>
            <p className="text-4xl font-medium text-beige">La bibliothèque de cinéma français</p>
            <div className="relative mt-4">
                <Image
                    src="/projecteur.jpg"
                    alt="cinema"
                    priority
                    quality={100}
                    width={700}
                    height={500}
                    className="w-[700px] h-auto translate-y-16"
                />
            </div>
        </section>
    );
}