import { UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto p-4">
      <NavLink to={"/dashboard"} className="text-2xl text-blue-400 font-bold">
        Testing Clerk
      </NavLink>
      <div className="self-end">
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
