'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

  :root {
    --font-display: 'Nunito', sans-serif;
    --font-body: 'Inter', sans-serif;

    /* Emerald */
    --color-emerald-10: #dff2ed;
    --color-emerald-20: #b2dfd0;
    --color-emerald-30: #80cab1;
    --color-emerald-40: #4fb494;
    --color-emerald-50: #29a480;
    --color-emerald-60: #018762;
    --color-emerald-70: #007756;
    --color-emerald-80: #014c37;

    /* Green */
    --color-green-10: #ebf9f0;
    --color-green-20: #c4eed1;
    --color-green-30: #9ce2b2;
    --color-green-40: #75d693;
    --color-green-50: #4ecb74;
    --color-green-60: #00b15c;
    --color-green-70: #298a46;
    --color-green-80: #113b1e;

    /* Gray Colors */
    --color-gray-10: #ffffff;
    --color-gray-20: #f0f0f0;
    --color-gray-30: #cfcfcf;
    --color-gray-40: #bfbfbf;
    --color-gray-50: #737373;
    --color-gray-60: #515151;
    --color-gray-70: #2d2d2d;
    --color-gray-80: #131313;

    /* Typography */
    --text-headline-sm: 1.5rem;
    --text-headline-base: 2rem;
    --text-headline-lg: 2.5rem;
    --text-headline-xl: 3rem;

    --text-text-sm: 0.875rem;
    --text-text-base: 1rem;
    --text-text-xl: 1.125rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-gray-10);
    color: var(--color-gray-70);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }

  button {
    cursor: pointer;
    font-family: var(--font-display);
  }
`;

export default GlobalStyles;
