import { Button, Elevation, TopAppBar, TopAppBarNavigationIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from "rmwc";
import { HomePage } from "../../pages/home_page/HomePage";
import './Navbar.css';

export function NavBar() {
    return (
        <TopAppBar fixed>
            <Elevation z={6}>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarNavigationIcon icon="menu" />
                        <TopAppBarTitle style={{ 'fontFamily': 'Maven Pro' }}>Runway CV Builder</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection alignEnd>
                        <HomePage />
                    </TopAppBarSection>
                </TopAppBarRow>
            </Elevation>
        </TopAppBar>
    )
}