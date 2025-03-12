import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import Dashboard from "../pages/dashboard";
import Reports from "../pages/reports";
import Settings from "../pages/settings";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes