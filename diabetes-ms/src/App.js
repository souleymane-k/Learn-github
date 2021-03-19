import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css'
import Option from './Option/Option';
// import AddResults from './AddResults/AddResults';
 import InputListItem from './InputListItem/InputListItem';
 import Header from './Header/Header';
import LogInForm from './LogInForm/LogInForm';
import SignUpForm from './SignUpForm/SignUpForm';
import HomePage from './HomePage/HomePage'
//  import {API_ENDPOINT} from '../config';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterOption: ''
    }

    //  componentDidMount() {
    //    setTimeout(() => this.setState(dummyStore), 600)
    //  }

  //    componentDidMount(){
  //   fetch(`${API_ENDPOINT}/meals`).then((response) => response.json()).then((json)=> this.setState({filterOption: json}));
  //   }
   }

  updateFilterOption = (event) => {
    this.setState({
      filterOption: event.target.value
    })
  }


  render() {
  return (
    <>
    <header>
      <Header />
    </header>
   
    <main className='App'>
      <Switch>
    <Route exact path='/SignUpForm' component={SignUpForm} />
    <Route exact path='/logInForm' component={LogInForm} />
    <Route exact path='/' component={HomePage}/>
      <Option
       filterOption={this.state.filterOption}
       handleFilterChange={this.updateFilterOption}/>
{/* <Route exact path={'/InputListItem'} component={InputListItem}/> */}
      </Switch>
      <InputListItem 
      months ={this.props.months}
      filterOption={this.state.filterOption}/>
    </main>

    </>
   
  );
 }

}

export default App;


    