import { useHistory } from 'react-router-dom';
import { Panel, Button } from 'react95';

const Landing = () => {
  const { push } = useHistory();
  return (
    <div className="landing-page">
      <div
        className="wrapper"
        style={{
          width: '100%',
          height: '480px',
          backgroundImage: 'url(https://tinyurl.com/4ssdmdda)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginBottom: '3%',
          borderBottom: '3px solid #c6c6c6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Panel style={{padding: '0 2% 0 2%', marginBottom: '1%'}}>
        <h1
          style={{
            fontSize: '6.5rem',
            color: 'black',
          }}>
          Food Truckr
        </h1>
        </Panel>
        <Panel style={{padding: '0 1% 0 1%'}}>
        <p
          style={{
            fontSize: '1.8rem',
            color: 'black',
          }}>
          On the go? So are they! Use Food Truckr to find your favorite food
          trucks fast!
        </p>
        </Panel>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
        }}>
        <Panel
          variant="outside"
          shadow
          style={{ padding: '0.5rem', lineHeight: '1.5', width: 600 }}>
          <Panel
            variant="well"
            style={{
              marginTop: '1rem',
              padding: '0.1rem 0.25rem',
              width: '100%',
            }}>
            <h3 style={{ textAlign: 'center', fontSize: '2.8rem' }}>
              ABOUT US!
            </h3>
          </Panel>
          <Panel variant="inside" style={{ margin: '1rem', padding: '1rem' }}>
            <p>
              FoodTruck TrackR was designed to make finding and eating at a food
              truck fast, easy and fun. Quickly see all of our Operator
              partners' nearby food trucks that currently open, view their
              current real-time GPS location, know the scheduled arrival and
              departure times, view photos, read customer reviews and much more,
              all in our easy to use app. Try FoodTruck TrackR today, and enjoy
              the best food your city has to offer.
            </p>
          </Panel>
        </Panel>
        <Panel
          variant="outside"
          shadow
          style={{ padding: '0.5rem', lineHeight: '1.5', width: 600 }}>
          <Panel
            variant="well"
            style={{
              marginTop: '1rem',
              padding: '0.1rem 0.25rem',
              width: '100%',
            }}>
            <h3 style={{ textAlign: 'center', fontSize: '2.8rem' }}>
              JOIN US!
            </h3>
          </Panel>
          <Panel variant="inside" style={{ margin: '1rem', padding: '1rem' }}>
            <p>
              FoodTruck TrackR is home to many users and truck operators. Sign
              back in or sign up now for a new account!
            </p>
          </Panel>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            }}>
            <Button
              primary
              onClick={() => push('/login')}
              style={{ padding: '4% 6% 4% 6%', fontSize: '1.3rem' }}>
              Log In
            </Button>
            <Button
              onClick={() => push('/signup')}
              primary
              style={{ padding: '4% 6% 4% 6%', fontSize: '1.3rem' }}>
              Sign Up
            </Button>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Landing;
