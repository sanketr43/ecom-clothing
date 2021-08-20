import React from 'react';
import './homepage.styles.scss';
import Directory from './../../components/directory/directory.components';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;