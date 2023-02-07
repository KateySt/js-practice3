import {Navigate, Route, Routes} from "react-router-dom";
import UserDetailsPage from "./UserDetailsPage";
import ListUsersPage from "./ListUsersPage";
import UserUpDatePage from "./UserUpDatePage";

const UsersModule = () => {
    return (
        <Routes>
            <Route path='/' element={<ListUsersPage/>}/>
            <Route path='/:id' element={<UserDetailsPage/>}/>
            <Route path='/update/:id' element={<UserUpDatePage/>}/>
            <Route path='*' element={<Navigate to='/notfound' replace/>}/>
        </Routes>
    );
}

export default UsersModule;