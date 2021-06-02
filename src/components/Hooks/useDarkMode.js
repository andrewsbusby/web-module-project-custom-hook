import {useLocalStorage} from './useLocalStorage.js';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'false')

    return [darkMode, setDarkMode];

}