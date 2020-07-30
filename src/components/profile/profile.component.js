import React, {Component} from 'react';


export default class Profile extends Component{
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
            <div class="profile-cards">

                <div class="card mb-3">
                    <img src="https://www.microsoft.com/security/blog/wp-content/uploads/2020/03/Inclusion-banner-4.png" class="card-img-top" alt="banner"></img>
                    <div class="card-body">
                        <h5 class="card-title">Alisha Powell</h5>
                        <p class="card-text">Ardent coder passionate about empwering women in STEM.</p>
                        <p class="card-text"><small class="text-muted"><b>Sophomore</b> at <b>Morgan State University</b></small></p>
                        <p class="card-text"><small class="text-muted"/><b>GPA</b>: 3.98 <b>| Scholar Index: 98%</b></p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" style={{ margin: 'auto'}}>Faculty Endorsements</div>
                    <div class="card-body">
                    <h5 class="card-title"><em>Endorsed by 6 Faculty</em></h5>
                    <a href="https://www.linkedin.com" class="btn btn-primary">View all</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" style={{ margin: 'auto'}}>Awards</div>
                    <div class="card-body">
                    <h5 class="card-title">Generation Google Scholarship Recipient</h5>
                    <p class="card-text">Was one of 10 students selected out of over 5000 applicants
                        for a prestigious Google scholarship aimed at empowering first Generation
                        students in tech.</p>
                    <a href="https://www.linkedin.com" class="btn btn-primary">View</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" style={{ margin: 'auto'}}>Certifications</div>
                    <div class="card-body">
                    <h5 class="card-title">AWS Certified Cloud Practitioner </h5>
                    <p class="card-text">Passed a certification exam (89%) after completing 100 hours of project-based learning.</p>
                    <a href="https://www.linkedin.com" class="btn btn-primary">View</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" style={{ margin: 'auto'}}>Affiliations</div>
                    <div class="card-body">
                    <ul>
                        <li>
                            <h5 class="card-title">Fellow at <b><em>Girls Who Code</em></b> </h5>
                            <a href="https://www.linkedin.com" class="btn btn-primary">View</a>
                        </li>
                        <br></br>
                        <li>
                            <h5 class="card-title">Programs Chair at <b><em>NSBE</em></b> </h5>
                            <a href="https://www.linkedin.com" class="btn btn-primary">View</a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" style={{ margin: 'auto'}}> Experiences</div>
                    <div class="card-body">
                    <ul>
                        <li>
                            <h5 class="card-title">Forbes 30 Under 30 Scholar </h5>
                            <p class="card-text"><small class="text-muted"/>October 2019</p>
                            <a href="https://www.linkedin.com" class="btn btn-primary">Learn More</a>
                        </li>
                        <br></br>
                        <li>
                            <h5 class="card-title">Google STEP Intern</h5>
                            <p class="card-text"><small class="text-muted"/>August 2018</p>
                            <a href="https://www.linkedin.com" class="btn btn-primary">Learn More</a>
                        </li>
                    </ul>
                    </div>
                </div>

            </div>
        )
    }
}