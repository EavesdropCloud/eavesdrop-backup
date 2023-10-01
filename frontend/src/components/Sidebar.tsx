import Link from "next/link";
import React from "react";

const Sidebar = () => (
    <div className="flex flex-col content-center bg-raisin-100 border-r border-r-raisin-200 text-powder w-40">
        <div className="my-3 mx-20 opacity-50 transition duration-300 ease-in-out bg-transparent hover:opacity-100">
            <Link href="/library">Library</Link>
        </div>
        <div className="my-3 mx-20 opacity-50 transition duration-300 ease-in-out bg-transparent hover:opacity-100">
            <Link href="/upload">Upload</Link>
        </div>
    </div>
);

export default Sidebar;