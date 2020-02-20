import React from "react";

import '../../components/directory/directory.styles.scss';
import '../../components/menu-item/menu-item.styles.scss';
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const Homepage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default Homepage;

