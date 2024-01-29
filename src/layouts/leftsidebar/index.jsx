import Logo from "./logo";
import Menu from "./menu";

export default function LeftSideBar() {
    return (
        <aside className="w-[275px] px-2">
            <Logo />
            <Menu />
        </aside>
    )
}