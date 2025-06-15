'use client';

import { useState } from 'react';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="flex flex-col items-center gap-4 bg-beige px-7 pt-5 pb-10">
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
                        value="compositeur"
                        className="accent-background"
                    />
                    Par compositeur
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Bienvenue chez les ch'tis"
                    className="w-[300px] h-[40px] rounded-lg bg-beige border border-background px-4 text-background placeholder:text-background/50 focus:outline-none focus:border-background/80"
                />
                <button 
                    onClick={async () => {
                        try {
                            const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
                            const data = await response.json();
                            console.log('Résultats de la recherche:', data);
                        } catch (error) {
                            console.error('Erreur lors de la recherche:', error);
                        }
                    }} 
                    className="bg-background text-beige px-6 py-2 rounded-lg hover:bg-background/90 transition-colors"
                >
                    Rechercher
                </button>
            </div>
        </div>
    );
}