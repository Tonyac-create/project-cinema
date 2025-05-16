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
            <Cardfilm />
        </section>
    );
}