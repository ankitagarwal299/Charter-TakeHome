import React from 'react';
import { UI_TEXT } from '../../constants/rewardsConfig';

const Header = () => {
    return (
        <header className="header">
            <h1>{UI_TEXT.TITLE}</h1>
            <p>{UI_TEXT.SUBTITLE}</p>
        </header>
    );
};

export default Header;
