import { Outlet } from "react-router-dom";
import LeftSideBar from "../leftsidebar";
import RightSideBar from "../rightsidebar";

export default function Main() {
    return (
        <div className="w-[1265px] flex mx-auto min-h-screen">
            <LeftSideBar />
            <main className="flex-1 flex justify-between">
                <main className="max-w-[600px] flex-1 border-x border-[#2f3336]">
                    <Outlet />
                </main>
                <RightSideBar />
            </main>

        </div>
    )
}