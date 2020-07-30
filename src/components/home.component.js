import React, {Component} from 'react';
import logo from '../new_logo.jpeg';

export default class Home extends Component{
    constructor(props) {
        super(props);

        this.state={
            name: ''
        };
    };

    componentDidMount(){
        this.setState({
            name: 'Deron'
        })
    }

    render(){
        return (
            <div class="homepage">                
                {/* <div class="card" style={{ margin: 'auto', width: '18rem' }}>
                    <img src={logo} class="card-img-top" alt="header"></img>
                    <div class="card-body">
                    <h5 class="card-title">Welcome to Diversity Scholars</h5>
                    <p class="card-text">Ready to get connected to amazing opportunities? Sign up below to get started!</p>
                    <a href="/signUp" class="btn btn-primary">Sign Up</a>
                    </div>
                </div> */}
            

                <div class="card mb-3" style={{'max-width': "540px", margin: 'auto', 'boxShadow': '0px 0px 25px 1px black'}}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={logo} class="card-img" alt="header"></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Welcome to Diversity Scholars - HBCU</h5>
                                <p class="card-text"><small class="text-muted">The Diversity Scholars Platform for HBCUs</small></p>
                                <p class="card-text">Ready to get connected to amazing opportunities? Sign up below to get started!</p>

                                <a href="/signUp" class="btn btn-primary">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}