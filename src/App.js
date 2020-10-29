import React, { useEffect, useState } from 'react';
import './App.scss';

import '@fortawesome/fontawesome-free/js/all';
import TopBar from './components/navbar/TopBar';
import Bio from './components/Bio/Bio';
import useWindowDimensions from './hooks/windowDims';

import './App.scss';
import Showcase from './components/Showcase/Showcase';
import Rainbow from './components/Rainbow/Rainbow';


function App() {
    const { breakpoint } = useWindowDimensions();
    return (
        <div>
            <div bg="dark" variant="dark" className="mainContainer _container">
                <TopBar breakpoint={breakpoint} />

                <Bio />

                <Showcase />

                <Rainbow />
            </div>
        </div>
    );
}

export default App;
