import { useEffect, useState } from 'react';
import { Theme, useTheme } from '../../../contexts/themeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

/* TODO Maybe make a hook for the intialRenderComplete
 * This file contains the initialRenderComplete state. This allows the first render
 * to just render null as right at the start before react loads, the theme is not loaded,
 * and thus will be seen as different between the server and the UI.
 * See more here:
 * https://traviswimer.com/blog/error-hydration-failed-because-the-initial-ui-does-not-match-what-was-rendered-on-the-server/
 */

export default function ThemeToggle() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
		// Updating a state causes a re-render
		setInitialRenderComplete(true);
	}, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  if (!initialRenderComplete) {
		// Returning null will prevent the component from rendering, so the content will simply be missing from
		// the server HTML and also wont render during the first client-side render.
		return null;
	} else {
		return (
      <button className='btn-square w-8 h-8' onClick={toggleTheme}>
        { theme === Theme.DARK && <SunIcon color='#6200EA' /> }
        { theme === Theme.LIGHT && <MoonIcon color='#2962FF' /> }
      </button>
    );
	}
}
