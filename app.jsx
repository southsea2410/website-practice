import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'



export default function App(){
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
            </Router>
        </div>
    )
}