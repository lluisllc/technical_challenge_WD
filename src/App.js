import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div>
            <div className="App">

                <Routes>
                    <Route exact path="/" element={
                        <HomePage />
                    }
                    />
                    <Route
                        exact
                        path="/phones"
                        element={
                            <PhonesListPage />
                        }
                    />
                    <Route
                        exact
                        path="/phones/:id"
                        element={
                            <PhoneDetailPage />
                        }
                    />

                </Routes>
            </div>
        </div>
    );
}
export default App;