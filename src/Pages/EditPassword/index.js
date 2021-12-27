import React from'react';
import MenuInside from '../../Components/MenuInside';
import EditPass from '../../Components/EditPassword'
import TopInsideBar from '../../Components/TopInsideBar';

import {Grid} from '../Rooms/style'

const EditPassword = () => {
    return(
        <Grid>
            <MenuInside page="salas"/>
             <TopInsideBar />
             <EditPass />
        </Grid>
    )
}

export default EditPassword;