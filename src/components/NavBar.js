import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider,
  TextField,
} from 'react95';
import { connect, useDispatch } from 'react-redux';
import useForm from '../utils/useForm';
import logo from './../assets/logo.png';
import { logoutUser } from '../actions/userAction';
import { useHistory } from 'react-router';
import { toggleFavoriteBar } from '../actions/truckDinerAction';

const NavBar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [{ searchText }, handleChanges] = useForm({ searchText: '' });
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    props.logoutUser();
    push('/');
  };

  return (
    <AppBar style={{ zIndex: '1' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
          }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}>
            <img
              src={logo}
              alt="react95 logo"
              style={{ height: '20px', marginRight: 4 }}
            />
            🛻 Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%',
              }}
              onClick={() => setOpen(false)}>
              {props.role && (
                <ListItem onClick={() => push(`/${props.role}`)}>
                  <span role="img" aria-label="🚚">
                    🚚
                  </span>
                  Show All Trucks
                </ListItem>
              )}
              {props.role === 'diner' ? (
                <ListItem onClick={() => dispatch(toggleFavoriteBar())}>
                  <span role="img" aria-label="🚛">
                    🚛
                  </span>
                  Favorite Trucks
                </ListItem>
              ) : null}
              {props.role === 'operator' ? (
                <ListItem>
                  <span role="img" aria-label="🚛">
                    🚛
                  </span>
                  My Trucks
                </ListItem>
              ) : null}
              <Divider />
              {props.role && (
                <ListItem onClick={handleLogout}>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Logout
                </ListItem>
              )}
              {!props.role && (
                <ListItem onClick={() => push('/login')}>
                  <span role="img" aria-label="🔜">
                    🔜
                  </span>
                  LogIn
                </ListItem>
              )}
              {!props.role && (
                <ListItem onClick={() => push('/signup')}>
                  <span role="img" aria-label="✉️">
                    ✉️
                  </span>
                  SignUp
                </ListItem>
              )}
            </List>
          )}
        </div>
        <TextField
          placeholder="Search..."
          width={150}
          value={searchText}
          onChange={handleChanges}
          name="searchText"
        />
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    role: state.user.role,
  };
};

export default connect(mapStateToProps, { logoutUser })(NavBar);
