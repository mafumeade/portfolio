import React, { useEffect, useState } from 'react';
import './styles.scss';

export default function Rainbow({ speed = 5, varName = 'hue' }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
                document.documentElement.style.setProperty(`--${varName}`, Date.now() / speed);
            }, speed);
        } else {
            document.documentElement.style.removeProperty(`--${varName}`);
        }
        return () => clearInterval(interval);
    }, [active, speed, varName]);

    return (
        <div className={`rainbowButton ${active ? 'active' : 'inactive'}`} onClick={() => setActive(!active)}>
            <span role="img" aria-label="Toggle Rainbow">
                🌈
            </span>
        </div>
    );
}
