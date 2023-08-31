import Link from "next/link";
import React from "react";

const Sidebar = () => (
    <div className="bg-blue-800 text-blue-100 w-64">
        <div>
            <Link href="/">Library</Link>
        </div>
        <div>
            <Link href="/upload">Upload</Link>
        </div>
    </div>
);

export default Sidebar;