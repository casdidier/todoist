import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
  const x = 1;

  return (
    <>
      <header className='header' data-testid='header'> This a header</header>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
};