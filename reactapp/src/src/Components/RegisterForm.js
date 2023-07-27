import React from 'react';
import axios from 'axios';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  async getTokenFromSTS() {
    const { fields } = this.state;
    const credentials = {
      username: fields.username,
      password: fields.password,
      // Add other required credentials if needed by your STS endpoint
    };

    try {
      // Replace 'your_sts_endpoint_url' with the actual URL of your STS endpoint
      const response = await axios.post('your_sts_endpoint_url', credentials);

      // Handle the response and extract the token or other relevant data
      const token = response.data.access_token; // Replace 'access_token' with the key containing the token in the response

      // Do whatever you need to do with the token (e.g., store it in state or localStorage)

      // For now, let's just print the token in the console
      console.log('Received Token:', token);

      // After successfully obtaining the token, you can perform any other actions like saving it to state or localStorage

    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error fetching token from STS:', error);
    }
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      this.setState({ fields });

      // Call the function to fetch the token from STS
      this.getTokenFromSTS();

      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
  
    // Validation for the "username" field
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your First_Name.";
    } else if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["username"] = "*Please enter alphabet characters only.";
    }
  
    // Validation for the "name" field
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your Last_Name.";
    } else if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["name"] = "*Please enter alphabet characters only.";
    }
  
    // Validation for the "emailid" field
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    } else if (!fields["emailid"].match(/^\S+@\S+\.\S+$/)) {
      formIsValid = false;
      errors["emailid"] = "*Please enter a valid email-ID.";
    }
  
    // Validation for the "gender" field
    if (!fields["gender"]) {
      formIsValid = false;
      errors["gender"] = "*Please select your gender.";
    }
  
    // Validation for the "stream" field
    if (!fields["stream"]) {
      formIsValid = false;
      errors["stream"] = "*Please enter your Stream.";
    }
  
    // Validation for the "mobileno" field
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    } else if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter a valid 10-digit mobile no.";
    }
  
    // Validation for the "age" field
    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "*Please enter your age.";
    } else if (!fields["age"].match(/^[0-9]{2}$/)) {
      formIsValid = false;
      errors["age"] = "*Please enter a valid age.";
    }
  
    // Validation for the "education" field (optional, you can add your validation rules here)
  
    // Validation for the "Years_of_experience" field
    if (!fields["Years_of_experience"]) {
      formIsValid = false;
      errors["Years_of_experience"] = "*Please enter the years of experience.";
    } else if (!fields["Years_of_experience"].match(/^[0-9]+$/)) {
      formIsValid = false;
      errors["Years_of_experience"] = "*Please enter a valid number of years.";
    }
  
    // Validation for the "password" field
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    } else if (
      !fields["password"].match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
      )
    ) {
      formIsValid = false;
      errors["password"] = "*Please enter a secure and strong password.";
    }
  
    // Validation for the "Confirm" (confirm password) field
    if (!fields["Confirm"]) {
      formIsValid = false;
      errors["Confirm"] = "*Please confirm your password.";
    } else if (fields["Confirm"] !== fields["password"]) {
      formIsValid = false;
      errors["Confirm"] = "*Passwords do not match.";
    }
  
    // Update the "errors" state based on the validation results
    this.setState({ errors });
  
    return formIsValid;
  }
  
  

  render() {
    return (
       <div className="p">
    <div id="main-registration-container">
    <h1>ADVISOR REGISTRATION FORM</h1>
    <div id="register">
    <h3>Registration page</h3>
    <form method="post" name="userRegistrationForm" onSubmit=
    {this.submituserRegistrationForm} >
    <div className="errorMsg">{this.state.errors.username}</div>
    <label>First_Name</label>
    <input type="text" name="username" value={this.state.fields.username}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.username}</div>
    <label>Last_Name</label>
    <input type="text" name="name" value={this.state.fields.name}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.name}</div>
     <lable>Email_Id</lable>
     <input type="text" name="emailid" value={this.state.fields.emailid}
     onChange={this.handleChange}/>
     <div className="errorMsg">{this.state.errors.email}</div>
    <label>Mobile_No</label>
    <input type="text" name="mobileno" value={this.state.fields.mobileno}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.mobileno}</div>
    <div className="gender">
    <label>Gender</label>
    <select name="gender" id="id_gender" value={this.state.fields.gender}>
      <option value="m" >Male</option>
      <option value="f">Female</option>
    <input type="text" name="gender" value={this.state.fields.gender}
    onChange={this.handleChange}/>
    </select>
  </div>
    <label>Age</label>
    <input type="text" name="age" value={this.state.fields.age}
    onChange={this.handleChange}/>
    <div className="errorMsg">{this.state.errors.age}</div>
    <label>Education_Qualification</label>
    <input type="text" name="education" value={this.state.fields.education}
    onChange={this.handleChange}/>
    <div className="errorMsg">{this.state.errors.education}</div>
    <lable>Years_of_experience</lable>
    <input type="text" name="Years_of_experience" value={this.state.fields.Years_of_experience}
    onChange={this.handleChange}/>
    <div className="errorMsg">{this.state.errors.Years_of_experience}</div>
    <label>Stream</label>
    <input type="text" name="stream" value={this.state.fields.stream}
    onChange={this.handleChange}/>
    <div className="stream">
    <select name="stream" id="id_stream" value={this.state.fields.gender}>
      <option value="Education" >Education Consultant</option>
      <option value="Business">Sociallife Consultant</option>
      <option value="Health">Finance Consultant</option>
      <option value="family">Mental Health Consultant</option>
    </select>
  </div>
    <label>Password</label>
    <input type="password" name="password" value={this.state.fields.password}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.password}</div>
    <label>Confirm_Password</label>
    <input type="password" name="Confirm" value={this.state.fields.Confirm}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.password}</div>
    <Link to='/home'><button type="register" >Register</button></Link>
      
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
