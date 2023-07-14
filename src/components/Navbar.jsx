import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
  background: #111111
`;

const TAB = styled(NavLink)`
font-size : 20px;
margin-right : 20px;
color:inherit;
text-decoration:none;
`;



const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>   
                <TAB to='/'>All Users</TAB>
                <TAB to ='/add'>Add User</TAB>
            </Toolbar>
        </Header>
    )
}
export default NavBar;