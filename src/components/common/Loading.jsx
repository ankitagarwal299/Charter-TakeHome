import React from 'react';
import { UI_TEXT } from '../../constants/rewardsConfig';

const Loading = ({ message = UI_TEXT.LOADING }) => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>{message}</p>
        </div>
    );
};

export default Loading;
