import { NavLink } from "@remix-run/react";
import type { HeaderItem } from "../resources/headerItems";
import { HeaderItems } from "../resources/headerItems";
import clsx from "clsx";

interface IAllHeaderItems {
    horizontal?: boolean;
}

const AllHeaderItems = ({ horizontal = false }: IAllHeaderItems) => {
    const recursiveHeaders = (item: HeaderItem) => {
        if (!item.children) {
            return (
                <li key={item.title}>
                    <NavLink to={item.location} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        {item.title}
                    </NavLink>
                </li>
            )
        }

        return (
            <li tabIndex={0} key={item.title} className="active:bg-secondary-300 focus:bg-secondary-300">
                <a className={clsx(horizontal ? 'justify-between' : '')}>
                    {item.title}
                    {horizontal ?
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        :
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    }
                </a>
                <ul className="p-2 bg-primary-900">
                    {
                        item.children.map((child) => {
                            return recursiveHeaders(child)
                        })
                    }
                </ul>
            </li>
        )
    }
    return (
        <>
            {
                HeaderItems.map((item) => {
                    return recursiveHeaders(item);
                })
            }
        </>
    )
}

export default AllHeaderItems;
