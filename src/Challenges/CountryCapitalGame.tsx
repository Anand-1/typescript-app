import React, { useState, useEffect } from 'react';
type CountryCapitalPair = {
    country: string;
    capital: string;
};

type GameItemType = "country" | "capital";

type GameItem = {
    id: string;
    text: string;
    type: GameItemType;
    pair: string;
};
// Sample dataset of countries and their capitals
const DATASET: CountryCapitalPair[] = [
    { country: 'France', capital: 'Paris' },
    { country: 'Japan', capital: 'Tokyo' },
    { country: 'Brazil', capital: 'Brasilia' },
    { country: 'Australia', capital: 'Canberra' },
    { country: 'Egypt', capital: 'Cairo' },
    { country: 'Canada', capital: 'Ottawa' },
    { country: 'Germany', capital: 'Berlin' },
    { country: 'India', capital: 'New Delhi' },
    { country: 'Italy', capital: 'Rome' },
    { country: 'Russia', capital: 'Moscow' }
];

export function CountryCapitalGame() {
    const [items, setItems] = useState<GameItem[]>([]);
    const [selected, setSelected] = useState<GameItem[]>([]);
    const [matched, setMatched] = useState<string[]>([]);
    const [wrongMatch, setWrongMatch] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [gameWon, setGameWon] = useState(false);

    // Initialize and shuffle the game board
    const initGame = () => {
        const list: GameItem[] = [];
        DATASET.forEach((pair) => {
            list.push({ id: `${pair.country}-c`, text: pair.country, type: 'country', pair: pair.capital });
            list.push({ id: `${pair.capital}-cap`, text: pair.capital, type: 'capital', pair: pair.country });
        });
        // Shuffle algorithm
        const shuffled = [...list].sort(() => Math.random() - 0.5);
        setItems(shuffled);
        setSelected([]);
        setMatched([]);
        setWrongMatch([]);
        setScore(0);
        setGameWon(false);
    };

    useEffect(() => {
        initGame();
    }, []);

    // Check if the game is completed
    useEffect(() => {
        if (matched.length === DATASET.length * 2 && DATASET.length > 0) {
            setGameWon(true);
        }
    }, [matched]);

    const handleCardClick = (item: GameItem) => {
        // Ignore clicks on already matched items or during the wrong-match cooldown
        if (matched.includes(item.id) || wrongMatch.length > 0) return;

        // If clicking an already selected item, deselect it
        if (selected.find((s) => s.id === item.id)) {
            setSelected([]);
            return;
        }

        const newSelected = [...selected, item];
        setSelected(newSelected);

        // If two items are selected, check for a match
        if (newSelected.length === 2) {
            const [first, second] = newSelected;

            if (first.pair === second.text) {
                // Correct Match
                setMatched((prev) => [...prev, first.id, second.id]);
                setScore((prev) => prev + 10);
                setSelected([]);
            } else {
                // Incorrect Match
                setWrongMatch([first.id, second.id]);
                setScore((prev) => Math.max(0, prev - 5)); // Penalty, but not below 0

                // Brief delay so user can see the error color state
                setTimeout(() => {
                    setSelected([]);
                    setWrongMatch([]);
                }, 1000);
            }
        }
    };

    return (
        <section className="capital-game" aria-label="Country and capital matching game">
            <div className="capital-game__panel">

                {/* Header Section */}
                <div className="capital-game__topbar">
                    <div>
                        <h2>Capitals Match</h2>
                        <p>Match each country with its capital.</p>
                    </div>
                    <div className="capital-game__score" aria-live="polite">
                        <span>Score</span>
                        <strong>{score}</strong>
                    </div>
                </div>

                {/* Game Area */}
                {!gameWon ? (
                    <div className="capital-game__grid">
                        {items.map((item) => {
                            const isSelected = selected.some((s) => s.id === item.id);
                            const isMatched = matched.includes(item.id);
                            const isWrong = wrongMatch.includes(item.id);

                            // Conditional styles depending on state
                            let cardStyle = "capital-card";
                            if (isSelected) cardStyle += " capital-card--selected";
                            if (isMatched) cardStyle += " capital-card--matched";
                            if (isWrong) cardStyle += " capital-card--wrong";

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleCardClick(item)}
                                    disabled={isMatched}
                                    className={cardStyle}
                                    data-card-type={item.type}
                                >
                                    {item.text}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    /* Victory Screen */
                    <div className="capital-game__victory">
                        <div className="capital-game__trophy" aria-hidden="true">🏆</div>
                        <h2>Perfect Match!</h2>
                        <p>You successfully paired all options with a final score of <strong>{score}</strong> points.</p>
                        <button
                            onClick={initGame}
                            className="capital-game__primary-action"
                        >
                            Play Again
                        </button>
                    </div>
                )}

                {/* Reset Button */}
                {!gameWon && (
                    <button
                        onClick={initGame}
                        className="capital-game__reset"
                    >
                        Reset Board
                    </button>
                )}
            </div>
        </section>
    );
}