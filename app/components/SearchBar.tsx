export default function SearchBar() {
    return (
        <div className="flex flex-col items-center gap-4 bg-beige px-7 pb-5">
            <div className="flex flex-wrap gap-6 text-background">
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="searchType"
                        value="realisateur"
                        className="accent-background"
                    />
                    Par réalisateur
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="searchType"
                        value="acteur"
                        className="accent-background"
                    />
                    Par acteur
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="searchType"
                        value="annee"
                        className="accent-background"
                    />
                    Par année
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="searchType"
                        value="film"
                        className="accent-background"
                    />
                    Par film
                </label>
            </div>
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Bienvenue chez les ch'tis"
                    className="w-[300px] h-[40px] rounded-lg bg-beige border border-background px-4 text-background placeholder:text-background/50 focus:outline-none focus:border-background/80"
                />
                <button className="bg-background text-beige px-6 py-2 rounded-lg hover:bg-background/90 transition-colors">
                    Rechercher
                </button>
            </div>
        </div>
    );
}