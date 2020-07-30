import React, { Component } from 'react';

export default class SignUp extends Component{
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
        return(
            <div style={{ padding: "10vh"}}>
            <div class="signUp">
                <br></br>
                <br></br>

            <form action="/next">
                <div class="form-group">
                    <label for="newUserName">Full Name</label>
                    <input type="text" class="form-control" id="InputName"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">School Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email without your consent.</small>
                </div>
                <div class="form-group">
                    <label for="InputSchool">School</label>
                    <input type="text" class="form-control" id="InputSchool"/>
                </div>
                <div class="form-group">
                    <label for="UserGPA">GPA</label>
                    <input type="number" class="form-control" step='0.01' min='0' max='4' id="InputGPA"/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">I agree to Diversity Scholars Terms and Conditions.</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            </div>
            </div>
  
        )
    }
};