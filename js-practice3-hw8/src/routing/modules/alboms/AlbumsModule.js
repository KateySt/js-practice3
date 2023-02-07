import {Navigate, Route, Routes} from "react-router-dom";
import AlbumsPage from "./AlbumsPage";
import AlbumsDetailsPage from "./AlbumsDetailsPage";

const AlbumsModule = () => {
    return (
        <Routes>
            <Route path='/' element={<AlbumsPage/>}/>
            <Route path='/:id' element={<AlbumsDetailsPage/>}/>
            <Route path='*' element={<Navigate to='/notfound' replace/>}/>
        </Routes>
    );
}

export default AlbumsModule;