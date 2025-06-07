import Image from "next/image";

export default function NumberFilmActor() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-9 md:gap-24 bg-beige py-8 md:pt-10 tracking-wide">
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/clapperboard.png"
                    alt="logo"
                    priority
                    quality={100}
                    width={40}
                    height={40}
                    className="w-[40px] h-auto -rotate-12 animate-pulse"
                />
                <p className="text-2xl lg:text-4xl font-medium text-background">+ de 80 000 films</p>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/star.png"
                    alt="logo"
                    priority
                    quality={100}
                    width={40}
                    height={40}
                    className="w-[40px] h-auto -rotate-12 animate-pulse"
                />
                <p className="text-2xl lg:text-4xl font-medium text-background">{`+ de 1 000 000 d'acteurs`}</p>
            </div>
        </div>
    );
}