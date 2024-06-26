import { useEffect, useState } from 'react';

function useTheme(){
    const [theme, setTheme] = useState('light');

    function setMode(mode: string){
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    function toggleTheme(){
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        setTheme(localTheme!)
    }, []);

    return {
    theme,
    setMode,
    toggleTheme,
    }
}

export {useTheme};