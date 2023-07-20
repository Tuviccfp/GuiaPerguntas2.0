import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Response from "./components/Response/Response";

export default function Navigation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/ask/:id" element={<Response />}/> 
            </Routes>
        </BrowserRouter>
    )
}