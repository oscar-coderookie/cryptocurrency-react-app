import './UserMenu.scss';
import Avatar from "@mui/material/Avatar";
import { useState } from 'react';

const UserMenu = ({hasUser, user}) => {
    const [open, setOpen] = useState(false);


    return (
        <div className="user-menu">
            <span className={open ? "config-active fas fa-user-cog" : "config fas fa-user-cog"}></span>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={()=> setOpen(!open)} />
        </div>
    )
}

export default UserMenu
