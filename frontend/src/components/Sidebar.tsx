import Link from "next/link";
import React from "react";

const Sidebar = () => (
    <div className="flex flex-col content-center bg-raisin-100 border-r border-r-raisin-200 text-powder w-40">
        <div className="mx-5 pl-2 my-2 w-20">
            <Link className="pl-3 opacity-50 transition duration-300 ease-in-out bg-transparent hover:opacity-100 focus:border-l-2 
                    focus:border-l-pinkman focus:font-bold focus:opacity-100" href="/library">Library</Link>
        </div>
        <div className="ml-5 pl-2 mb-2">
            <Link className="pl-3 opacity-50 transition duration-300 ease-in-out bg-transparent hover:opacity-100 focus:border-l-2 
                    focus:border-l-pinkman focus:font-bold focus:opacity-100" href="/upload">Upload</Link>
        </div>
    </div>
);

export default Sidebar;