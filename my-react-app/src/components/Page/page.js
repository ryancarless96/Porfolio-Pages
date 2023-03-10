import React from 'react';
import PageContent from "../Page Content";
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case 'aboutMe':
                return < AboutMe />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <AboutMe />;
        }
    };

    return (
        <section>
            <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent> {renderPage()}</PageContent>
        </section>
    );
}

export default Page;