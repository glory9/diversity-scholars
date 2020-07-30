import React, { Component } from 'react';
// import logo from '../new_logo.jpeg';

export default class Next extends Component{
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
                <div class="card" style={{ margin: 'auto', width: '18rem' }}>
                    <img src="" class="card-img-top" alt="header"></img>
                    <div class="card-body">
                    <h5 class="card-title"> Diversity Scholars</h5>
                    <p class="card-text">Thank you for applying. We will be in touch with next steps! </p>
                    <a href="/profile" class="btn btn-primary">Continue</a>
                    </div>
                </div>
            </div>
        )
    }
}