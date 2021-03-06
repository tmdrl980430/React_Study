import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

//router에는 BrowserRouter와 HashRouter가 있다.
const App = () => {
    return (
    <Router>
        <Routes>
            <Route exact path="/movie/:id" element={<Detail/> }/>
        </Routes>
        <Routes>
            <Route exact path="/" element={<Home/>} />
        </Routes>
    </Router>
    );
}

export default App;
