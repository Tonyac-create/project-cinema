import Image from "next/image";

export default function NumberFilmActor() {
    return (
        <div className="flex flex-col items-center gap-4 bg-beige pt-24 pb-5 tracking-wide">
            <div className="flex items-center gap-2 mb-4">
                <Image
                    src="/icons/clapperboard.png"
                    alt="logo"
                    priority
                    quality={100}
                    width={40}
                    height={40}
                    className="w-[40px] h-auto -rotate-12"
                />
                <p className="text-2xl font-medium text-background">+ de 80 000 films</p>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/star.png"
                    alt="logo"
                    priority
                    quality={100}
                    width={40}
                    height={40}
                    className="w-[40px] h-auto -rotate-12"
                />
                <p className="text-2xl font-medium text-background">{`+ de 1 000 000 d'acteurs`}</p>
            </div>
        </div>
    );
}