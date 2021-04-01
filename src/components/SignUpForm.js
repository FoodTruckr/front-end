import useForm from './../utils/useForm';
import {
  Fieldset,
  Radio,
  TextField,
  Window,
  WindowContent,
  Button,
  Panel,
} from 'react95';

import { connect } from 'react-redux';
import { signUpUser } from '../actions/userAction';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const initialValues = {
  username: '',
  password: '',
  role: '',
  email: '',
};

const SignUpForm = (props) => {
  const [{ username, email, role, password }, handleChange] = useForm(
    initialValues
  );
  const { signUpUser, user } = props;
  const { push } = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const creds = {
      username: username,
      password: password,
      role: role,
      email: email,
    };
    signUpUser(creds);
  };

  useEffect(() => {
    if (user.isSignedUp) {
      push('/login');
    }
  }, [user.isSignedUp, push]);

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '10%' }}>
      <div style={{ textAlign: 'center', marginBottom: '2%', width: '100%' }}>
        <Panel type={{ textAlign: 'center' }}>Sign up Below!</Panel>
      </div>
      <div style={{ width: '200px', margin: '0 auto' }}>
        <div style={{ display: 'flex' }}>
          <TextField
            value={username}
            placeholder="Username"
            onChange={handleChange}
            name="username"
            type="text"
            fullWidth
          />
        </div>
        <TextField
          placeholder="E-mail"
          onChange={handleChange}
          name="email"
          type="text"
          value={email}
        />
        <TextField
          placeholder="Password"
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
        />
        <Window>
          <WindowContent>
            <Fieldset label="Role">
              <Radio
                checked={role === 'diner'}
                onChange={handleChange}
                value="diner"
                label="🍔 Diner"
                name="role"
              />
              <br />
              <Radio
                checked={role === 'operator'}
                onChange={handleChange}
                value="operator"
                label="👷🏽‍♂️ Operator"
                name="role"
              />
              <Button type="submit" primary>
                Submit
              </Button>
            </Fieldset>
            {user.error && <p>{user.error}</p>}
          </WindowContent>
        </Window>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { signUpUser })(SignUpForm);
