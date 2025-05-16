import Image from "next/image";

export default function Cardfilm() {
    return (
        <div className="flex flex-wrap justify-center gap-5 bg-darkRed py-7">
            <div className="p-5 bg-beige">
                <Image
                    src="/defunes.webp"
                    alt=""
                    priority
                    quality={100}
                    width={300}
                    height={500}
                    className="w-[300px] h-auto"
                />
            </div>
            <div className="p-5 bg-beige">
                <Image
                    src="/asterix.jpg"
                    alt=""
                    priority
                    quality={100}
                    width={300}
                    height={500}
                    className="w-[300px] h-auto"
                />
            </div>
            <div className="p-5 bg-beige">
                <Image
                    src="/freres.png"
                    alt=""
                    priority
                    quality={100}
                    width={300}
                    height={500}
                    className="w-[300px] h-auto"
                />
            </div>
            <div className="p-5 bg-beige">
                <Image
                    src="/intouchables.jpg"
                    alt=""
                    priority
                    quality={100}
                    width={300}
                    height={500}
                    className="w-[300px] h-auto"
                />
            </div>
            <div className="p-5 bg-beige">
                <Image
                    src="/montecristo.webp"
                    alt=""
                    priority
                    quality={100}
                    width={300}
                    height={500}
                    className="w-[300px] h-auto"
                />
            </div>
        </div>
    );
}