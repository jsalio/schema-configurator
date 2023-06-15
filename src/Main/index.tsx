import LoginScreen from "../pages/login"
import {
    Link,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import { ApplicationLayout } from "../shared/layout";

export const Application = () => {
    return (
        <ApplicationLayout>
            <Link to="/app/auth">Login</Link>
            <Outlet />
            <Routes>
                <Route path="/app/auth" element={<LoginScreen />} />
            </Routes>
        </ApplicationLayout>
    )
}