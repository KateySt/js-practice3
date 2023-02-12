import {useState} from 'react';

const UseNavigation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return {
        anchorEl,
        open,
        handleClose,
        handleClick,
    };
}

export default UseNavigation;