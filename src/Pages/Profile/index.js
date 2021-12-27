import React from'react';
import MenuInside from '../../Components/MenuInside';
import ProfileEdit from '../../Components/ProfileEdit';
import TopInsideBar from '../../Components/TopInsideBar';

import {Grid} from '../Rooms/style'

const Profile = () => {
    return(
        <Grid>
            <MenuInside page="salas"/>
             <TopInsideBar />
             <ProfileEdit />
        </Grid>
    )
}

export default Profile;
