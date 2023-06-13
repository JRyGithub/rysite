import type { LinksFunction } from '@remix-run/node';
import mainStyles from './styles.css';

export const StyleLinks: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: mainStyles,
    }
  ];
};
