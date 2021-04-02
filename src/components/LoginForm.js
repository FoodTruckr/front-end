import useForm from './../utils/useForm';
import { TextField, Button, Panel } from 'react95';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userAction';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = (props) => {
  const [{ username, password }, handleChange] = useForm(initialValues);
  const { loginUser, user } = props;
  const { push } = useHistory();
  const { role, isLoggedIn } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      username: username,
      password: password,
    };
    loginUser(creds);
  };

  useEffect(() => {
    if (isLoggedIn && role === 'diner') {
      push('/diner');
    } else if (isLoggedIn && role === 'operator') {
      push('/operator');
    }
  }, [role, isLoggedIn, push]);

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '10%' }}>
      <div style={{ textAlign: 'center', marginBottom: '2%', width: '100%' }}>
        <Panel type={{ textAlign: 'center' }} active>
          Log In!
        </Panel>
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
          placeholder="Password"
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
        />
        {!props.isLoading ? (
          <Button
            style={{ marginLeft: '32%', marginTop: '5%' }}
            type="submit"
            primary>
            Submit
          </Button>
        ) : (
          <p
            style={{
              textAlign: 'center',
              marginTop: '5px',
            }}>
            Loading...
          </p>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoading: state.user.isLoading,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
