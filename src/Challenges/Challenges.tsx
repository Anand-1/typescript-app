import React, { useState, useEffect } from "react";
import "./Challenges.css";
import { LikeDislike } from "./LikeDislike";
import { CountryCapitalGame } from "./CountryCapitalGame";
import DynamicMenu from "./ShowHideMenu";
import SignupWizard from "./MultiStepform";
import DebouncedSearch from "./DebouncedSearch";

const Challenges = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const StartGame = () => {
        setGameStarted(true);
    }
    return (
        <section className="challenges-page">
            <header className="challenges-header">
                <h1>Challenges</h1>
                <p>Practice small interactive exercises and pattern challenges.</p>
                <button
                    onClick={StartGame}
                    className="capital-game__reset"
                >
                    Start Country-Capital Matching Game
                </button>
            </header>
            {gameStarted && (
                <>
                    <h3>Like-Dislike game</h3>
                    <LikeDislike initialLikes={100} initialDislikes={20} />
                    <h3>Country-Capital Matching Game</h3>
                    <CountryCapitalGame />
                    <hr />
                    <h3>Show/Hide Menu</h3>
                    <DynamicMenu menuStructure={menuData} />
                    <hr />
                    <h3>Multi-Step Form</h3>
                    <SignupWizard />
                    <p>Note: The Multi-Step Form is a simple example of a form wizard with basic validation. It demonstrates how to manage state across multiple steps and validate user input before proceeding.</p>
                    <p>Feel free to explore the other challenges as well!</p>
                    <hr />
                    <h3>Debounced Search</h3>
                    <p>Note: The Debounced Search is a simple example of a search input that waits for the user to stop typing before making an API call. It demonstrates how to manage state and side effects in React using hooks.</p>
                    <DebouncedSearch />
                </>
            )}
        </section>
    );
};

const menuData = [
    {
        id: 'home',
        label: 'Home',
        url: '/home'
    },
    {
        id: 'services',
        label: 'Our Services',
        children: [
            { id: 'web-dev', label: 'Web Development', url: '/services/web' },
            { id: 'design', label: 'UI/UX Design', url: '/services/design' },
            {
                id: 'marketing',
                label: 'Digital Marketing',
                children: [
                    { id: 'seo', label: 'SEO Optimization', url: '/services/marketing/seo' },
                    { id: 'social', label: 'Social Media', url: '/services/marketing/social' }
                ]
            }
        ]
    },
    {
        id: 'about',
        label: 'About Us',
        url: '/about'
    }
];






export default Challenges;
