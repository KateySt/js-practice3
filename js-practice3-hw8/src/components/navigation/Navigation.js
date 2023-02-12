import {NavLink} from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import useNavigation from "../../hooks/useNavigation";

const Navigation = () => {
    const {anchorEl, open, handleClose, handleClick} = useNavigation();

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>
                    <NavLink to='/users'>
                        Users
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink to='/albums'>
                        Albums
                    </NavLink>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Navigation;