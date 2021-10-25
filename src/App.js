//DEIVIDAS URBANAVICIUS 2021-10
//ADEOWEB TASK
import PageFooter from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SinglePage from './components/SinglePage';
import './styles/Style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import { addUrl, removeUrl } from './actions';
import store from './store/store';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { urls: state.urls };
}

const AppMain = ({ urls }) => {

  //This function adds new url to state when user goes to any link
  const doAddUrl = (currentUrl) => {
    store.dispatch(addUrl({ url: currentUrl, time: Date.now() }));
  }

  //This function removes the latest url from state when user clicks on BACK button and with this function user can get back to the all previous pages
  const doRemoveUrl = () => {
    store.dispatch(removeUrl());
  }

  //YOU CAN SEE ALL NEW URLS THAT USER BROWSED IN CONSOLE
  console.log('URLS:', urls)

  return (
    <>
      <Router>
        <header>
          <Navigation doAddUrl={doAddUrl} />
        </header>

        <main>
          <div className='mainWrapper'>
            <Switch>
              <Route exact path='/'>
                <Main doAddUrl={doAddUrl} />
              </Route>

              <Route exact path='/menu'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Menu'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/some-text'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Some Text'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/another-item'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Another Item'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/one-more'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'One More'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/and-last-one'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'And Last One'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/service'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Services'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/works'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'All Works'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/works/graphic'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Graphic'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/works/design'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Design'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/works/logo'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Logo'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/works/website'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Website'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/about-me'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'About Me'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/contact'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Contact'} doRemoveUrl={doRemoveUrl} />
              </Route>
              <Route exact path='/welcome'>
                <SinglePage doAddUrl={doAddUrl} pageTitle={'Welcome'} doRemoveUrl={doRemoveUrl} />
              </Route>

              <Route path='*'>
                <Page404 />
              </Route>
            </Switch>
          </div>
        </main>

        <footer>
          <PageFooter doAddUrl={doAddUrl} />
        </footer>
      </Router>
    </>
  );
}

const App = connect(mapStateToProps)(AppMain);
export default App;
