import React from 'react';

const MainPageTitle = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className='
        flex
        flex-col
        justify-start
        items-start
        shadow-xl
        shadow-primary-700
        h-3/4 box-border
        w-3/4
        bg-primary-800
        rounded-lg
        pl-10 bg-opacity-25 backdrop-filter backdrop-blur-md border border-primary-700'>
        <h1 className='text-[12rem] font-mono font-bold text-primary-300 leading-none'>JOSHUA</h1>
        <h1 className='text-[12rem] font-mono font-bold text-secondary-300 leading-none'>RYLAND</h1>
      </div>
    </div>
  );
};

export default MainPageTitle;

/**
 * Inspo
 * chnaged a few letters colour, interacivity, have a time linebutton somehwere in the corner, a menu button, a description etc
 * dont show the header and footer
 */
