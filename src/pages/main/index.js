import React, { Fragment } from 'react';

import Map from '../../components/Map';
import LeftSideBar from '../../components/LeftSideBar';
import AddUser from '../../components/AddUser';

const Main = () => (
  <Fragment>
    <Map />
    <LeftSideBar />
    <AddUser />
  </Fragment>
);

export default Main;
