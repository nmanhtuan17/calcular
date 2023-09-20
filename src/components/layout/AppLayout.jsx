import React from 'react';
import { Outlet} from 'react-router-dom'
import SiteBar from '../sidebar/SiteBar'
const AppLayout = () => {
    return (
        <div style={{
            padding: '50xp 0px 0px 370px'
        }}>
            <SiteBar />
            <Outlet />
        </div>
    );
}

export default AppLayout;
