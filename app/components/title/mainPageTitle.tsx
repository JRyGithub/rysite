import React from "react";

const MainPageTitle = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center rounded-sm bg-primary-500 drop-shadow-md md:h-[65vh] md:w-[70rem]">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col justify-start">
          <div className="flex flex-row justify-between">
            <div>
            <h6 className="text-left text-base font-bold leading-none">
                Joshua
              </h6>
              <h6 className="text-left text-base font-bold leading-none">
                Ryland
              </h6>
            </div>
            <div>
              <h6 className="text-right text-base font-bold leading-none">
                My Timeline
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-center font-bold leading-none text-5xl">
            Just another developer portfolio...
          </h3>
          <h3 className="text-center font-bold leading-none text-5xl">
            and a blog
          </h3>
        </div>
        <div className="flex flex-row justify-between">
        <div className="p flex flex-col justify-start pb-2 text-white">
          <h6 className="text-left text-base font-bold leading-none">
            Paris, France
          </h6>
          <h6 className="mb-0 text-left text-base font-bold leading-none">
            London, England
          </h6>
          <h6 className="mb-0 text-left text-base font-bold leading-none">
            Remote, My Study
          </h6>
        </div>
        <div className="p flex flex-col justify-start pb-2 text-white">
          <h6 className="text-right text-base font-bold leading-none">
            Frontend
          </h6>
          <h6 className="mb-0 text-right text-base font-bold leading-none">
            Software Engineer
          </h6>
          <h6 className="mb-0 text-right text-base font-bold leading-none">
            Backend
          </h6>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageTitle;

/**
 * Inspo
 * chnaged a few letters colour, interacivity, have a time linebutton somehwere in the corner, a menu button, a description etc
 * dont show the header and footer
 * cool idea on hover of my name a cloud though comes of with my photo in a amask
 */
