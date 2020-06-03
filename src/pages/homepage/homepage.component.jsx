import React from 'react'; 
import Directory from '../../components/directorty/directory.component'; 

import './homepage.styles.scss';

const HomePage = (props) => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}

export default HomePage; 