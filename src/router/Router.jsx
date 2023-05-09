import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoonContainer from "../containers/ComingSoonContainer";

export default function Router(){
    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ComingSoonContainer/>}/>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes/>
    )
}