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
import { connect } from 'react-redux';
import useForm from '../utils/useForm';

const NavBar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [{ searchText }, handleChanges] = useForm('');

  return (
    <AppBar style={{ zIndex: '1' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}>
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
              {props.isLoggedIn && (
                <ListItem>
                  <span role="img" aria-label="🚚">
                    🚚
                  </span>
                  Show All Trucks
                </ListItem>
              )}
              {props.isLoggedIn && props.role && (
                <ListItem>
                  <span role="img" aria-label="🚛">
                    🚛
                  </span>
                  Favorite Trucks
                </ListItem>
              )}
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
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

export default connect(mapStateToProps, {})(NavBar);
