export default function SortedFilm() {
    // Fonction pour générer les années de 1960 à aujourd'hui
    const generateYears = () => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 1960; year--) {
            years.push(year);
        }
        return years;
    };

    return (
        <div className="bg-beige flex flex-col items-center gap-2 pb-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="genre" className="text-background">Trier par genre</label>
                <select name="genre" id="genre" className="w-[200px] h-[40px] bg-background text-beige px-2" style={{ maxHeight: '200px' }}>
                    <option value="drame">Drame</option>
                    <option value="comedie">Comédie</option>
                    <option value="romance">Romance</option>
                    <option value="action">Action</option>
                    <option value="aventure">Aventure</option>
                    <option value="animation">Animation</option>
                    <option value="documentaire">Documentaire</option>
                    <option value="policier">Policier</option>
                    <option value="thriller">Thriller</option>
                    <option value="guerre">Guerre</option>
                    <option value="fantastique">Fantastique</option>
                    <option value="science-fiction">Science-fiction</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="annee" className="text-background">Trier par année</label>
                <select name="annee" id="annee" className="w-[200px] h-[40px] bg-background text-beige px-2" style={{ maxHeight: '200px' }}>
                    {generateYears().map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}