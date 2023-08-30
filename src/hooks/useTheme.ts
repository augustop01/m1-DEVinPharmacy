import { useEffect, useState } from 'react';

function useTheme(){
    const [theme, setTheme] = useState('');

    function setMode(mode: string){
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    function toggleTheme(){
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme === null){
            return setTheme('light')
        }
        setTheme(localTheme!)
    }, []);

    return {
    theme,
    setMode,
    toggleTheme,
    }
}

export {useTheme};