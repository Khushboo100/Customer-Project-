import { AppBar,Toolbar,styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #99EDC3
`;

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color: inherit;
    text-decoration: none;
`

const NavBar=()=>{
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Shopify</Tabs>
                <Tabs to ='all'>All Customers</Tabs>
                <Tabs to = 'add'>Add Customers</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;