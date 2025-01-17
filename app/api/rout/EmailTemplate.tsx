import React from "react";

interface WelcomeProps {
    greeting: string;
}

export const Welcome: React.FC<Readonly<WelcomeProps>> = ({ greeting }) => (
    <>
        <h1>{greeting}</h1>
    </>
);

export default Welcome;
