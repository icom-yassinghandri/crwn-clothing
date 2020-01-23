import React from "react";

import './homepage.styles.scss';
import '../../components/directory/directory.styles.scss';
import '../../components/menu-item/menu-item.styles.scss';
import Directory from "../../components/directory/directory.component";

const Homepage = () => (
    <div className={'homepage'}>
        <Directory />
    </div>
);

export default Homepage;

