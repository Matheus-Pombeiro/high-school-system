import { Outlet } from "react-router-dom";

const DefaultPage = () => {
    return (
        <main className="w-full">
            <Outlet />
        </main>
    );
};

export default DefaultPage;