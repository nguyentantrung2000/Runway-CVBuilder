import { Elevation, TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from "rmwc";
import './Navbar.css';

export function NavBar(){
    return (
        <TopAppBar>
            <Elevation z={6}>
                <TopAppBarRow>
                    <TopAppBarSection>
                        <TopAppBarTitle style={{'fontFamily':'Maven Pro'}}>Runway CV Builder</TopAppBarTitle>
                    </TopAppBarSection>
                </TopAppBarRow>
            </Elevation>
        </TopAppBar>
    )
}