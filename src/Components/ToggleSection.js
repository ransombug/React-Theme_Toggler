import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';

const ToggleSection = () => {

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <div
            style={{
                padding : "1rem",
                backgroundColor : `${currentTheme.backgroundColor}`,
                color : `${currentTheme.textColor}`
            }}
        >
            <h1>Theme Toggler - Context API</h1>
            <p>See the Magic !!</p>

        </div>
    )
}

export default ToggleSection;