import NumberFilmActor from "./NumberFilmActor";
import SortedFilm from "./SortedFilm";
import SearchBar from "./SearchBar";
import Cardfilm from "./Cardfilm";

export default function Section2() {
    return (
        <section className="bg-darkRed h-[800px]">
            <NumberFilmActor />
            <SortedFilm />
            <SearchBar />
            <p className="text-lg font-medium text-beige mt-7 pl-24">Cliquez sur une affiche pour voir le détail</p>
            <Cardfilm />
        </section>
    );
}