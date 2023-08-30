import React from "react";

const Header = () => {
  return (
    <div>
      <div className="border-b border-aff-blue bg-white sm:mt-0 sm:py-12 ">
        <div className="m-auto max-w-7xl px-6">
          <header className="hidden text-center text-3xl font-bold sm:block">
            Create Your Player!
          </header>
        </div>
      </div>
      {/* <h2 className="mx-auto max-w-2xl pt-6 text-center text-neutral-700">
        This is our player creation center. Once you've finished making your
        player's profile, he will be entered into the next years draft class,
        from where he will begin his career in the American Football Federation.
      </h2> */}
    </div>
  );
};

export default Header;
