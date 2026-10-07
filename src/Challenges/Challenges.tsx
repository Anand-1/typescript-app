import React, { useState, useEffect } from "react";
import "./Challenges.css";
import { LikeDislike } from "./LikeDislike";
import { CountryCapitalGame } from "./CountryCapitalGame";
import DynamicMenu from "./ShowHideMenu";
import SignupWizard from "./MultiStepform";
import DebouncedSearch from "./DebouncedSearch";
import ProductCatalog from "./ProductCatalog";

const startGame = {
    countryCapital: false,
    likeDislike: false,
    showHideMenu: false,
    multiStepForm: false,
    debouncedSearch: false,
    productCatalog: false
}

const Challenges = () => {
    const [gameStarted, setGameStarted] = useState(startGame);
    const StartGame = (gameType: keyof typeof startGame) => {
        setGameStarted(prev => ({
            ...prev,
            [gameType]: true
        }));
    }
    return (
        <section className="challenges-page">
             <h1>Challenges</h1>
            <header className="challenges-header">    
                <button onClick={() => StartGame('countryCapital')}>
                    Start Country-Capital Matching Game
                </button>
                <button onClick={() => StartGame('likeDislike')}>
                    Start Like-Dislike Game
                </button>
                <button onClick={() => StartGame('showHideMenu')}>
                    Start Show/Hide Menu Challenge
                </button>
                <button onClick={() => StartGame('multiStepForm')}>
                    Start Multi-Step Form Challenge
                </button>
                <button onClick={() => StartGame('debouncedSearch')}>
                    Start Debounced Search Challenge
                </button>
                <button onClick={() => StartGame('productCatalog')}>
                    Start Product Catalog Challenge
                </button>
            </header>
            {gameStarted.likeDislike && (
                <>
                    <div className="game-container">
                        <h3>Like-Dislike game</h3>
                        <LikeDislike initialLikes={100} initialDislikes={20} />
                    </div>
                    <hr />
                </>
            )}
            {gameStarted.countryCapital && (
                <>
                    <div className="game-container">
                        <h3>Country-Capital Matching Game</h3>
                        <CountryCapitalGame />
                    </div>
                    <hr />
                </>
            )}
            {gameStarted.showHideMenu && (
                <>
                    <div className="game-container">
                        <h3>Show/Hide Menu</h3>
                        <DynamicMenu />
                    </div>
                    <hr />
                </>
            )}
            {gameStarted.multiStepForm && (
                <>
                    <div className="game-container">
                        <h3>Multi-Step Form</h3>
                        <SignupWizard />
                        <p>Note: The Multi-Step Form is a simple example of a form wizard with basic validation. It demonstrates how to manage state across multiple steps and validate user input before proceeding.</p>
                        <p>Feel free to explore the other challenges as well!</p>
                    </div>
                    <hr />
                </>
            )}
            {gameStarted.debouncedSearch && (
                <div className="game-container">
                    <h3>Debounced Search</h3>
                    <p>Note: The Debounced Search is a simple example of a search input that waits for the user to stop typing before making an API call. It demonstrates how to manage state and side effects in React using hooks.</p>
                    <DebouncedSearch />
                </div>
            )}
            {gameStarted.productCatalog && (
                <>
                    <hr />
                    <div className="game-container">
                        <h3>Product Catalog</h3>
                        <ProductCatalog />
                    </div>
                </>
            )}
        </section>
    );
};
export default Challenges;
