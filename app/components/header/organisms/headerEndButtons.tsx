import { NavLink } from "@remix-run/react";
import ThemeToggle from "../molecules/themeToggle";

const HeaderEndButtons = () => {
    return (
        <>
            <ThemeToggle />
            <NavLink to='notCreated' className="
                btn
                bg-primary-700 border-primary-700 text-primary-text
                hover:bg-primary-600 hover:border-primary-600">Login</NavLink>
        </>
    )
}

export default HeaderEndButtons;
