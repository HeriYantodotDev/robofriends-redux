import React, { Component } from "react";
import {connect} from 'react-redux'
import Cardlist from "../components/Cardlist";
import generateRobots from "../robots";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import './App.css'
import InputBox from "../components/InputBox";
import ErrorBoundry from "../components/ErrorBoundry";
import { requestRobots, setSearchField } from "../actions";


//generate how much robots:

// const App = () => { 
//     return (
//     <div className="tc">
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <Cardlist robots={robots}/>
//     </div>
//     );
// }

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error : state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        clearSearchField : (event) => dispatch(setSearchField(event.target.parentElement.parentElement.children[2].children[0].value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    constructor () {
        super();
        this.state = {
            totalRobot : 0,
            robotsGenerate: [],
            //we don't need searchfield since we already have it on Redux
            // searchfield: ''    
        }
    }

// the short line
componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}));

    this.setState({robotsGenerate: []});
    // console.log(this.props.store.getState())

    this.props.onRequestRobots();  
    
}

// the long line
// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             return response.json();
//         })
//         .then(users => {
//             this.setState({robots: users});
//          })
// }

//we can remove this now, since we already have Redux for it
    // onSearchChange = (event) => {
    //     this.setState({searchfield: event.target.value});
    // }

    onClickGenerateRobots = (event) => {
        // console.log(event.target.parentElement.parentElement.children[2].children[0].value);
        console.log(this.props.robots);
        event.target.parentElement.parentElement.children[2].children[0].value = '';

        //we don't set state manually - let's figure it out later
        // this.setState({searchfield:event.target.parentElement.parentElement.children[2].children[0].value });
        this.props.clearSearchField(event);
        if (event.target.parentElement.children[1].value > 200 ) {
            alert("Can't have more than 200 robots!");
            event.target.parentElement.children[1].value = 0;
            this.setState({robotsGenerate:[]})
        } else {
            this.setState({robotsGenerate: generateRobots.generate(event.target.parentElement.children[1].value)});
        }
    }



    render () {
        const {robotsGenerate} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robotsGenerate.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); 
        })
        

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <InputBox clickGenerate = {this.onClickGenerateRobots} checkRobot = {this.checkNumberofRobots}/>
                <SearchBox searchChange = {onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots}  />
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
            }
        }

export default connect(mapStateToProps, mapDispatchToProps)(App);