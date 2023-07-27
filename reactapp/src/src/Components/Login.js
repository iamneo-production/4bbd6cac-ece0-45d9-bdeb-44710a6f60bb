// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showRegister, setShowRegister] = useState(false);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     console.log('Username:', username);
//     console.log('Password:', password);

    
//     setUsername('');
//     setPassword('');
//   };

//   const handleRegisterClick = () => {
//     setShowRegister(true);
//   };

//   return (
// <div className="pp">
// <div className="login-container">
//     <div className="login-box-container"></div>
//         <div className="login-box">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <button type="submit"><Link to='/hom'>Login</Link></button>
//           </form>
//           {!showRegister && (
//           <p className="register-prompt">
//             Don't have an account?
//             {' '}
//             <br></br>
//             <br/>
//             <Link to='/register'><button type="register" onClick={handleRegisterClick}>Register</button></Link>
          
//           </p>
//          )}
//           {showRegister && (
//           <div className="register-area">
            
//             {}
//         </div>
//         )}
        
//     </div>
//     </div>
//     </div>
//   );
// };


// export default LoginPage;



// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { setEmail, setPass, setName } from './action';
// import axios from 'axios';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
   
  
//   },
//   login: {
//     width: '400px',
//     padding: '40px',
//     border: '2px solid black',
//     borderRadius: '4px',
//     backgroundColor: '#F7F7F7',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#333',
//     textTransform: 'uppercase',
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   button: {
//     width: '30%',
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#33bbff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginLeft:'140px',
//   },
//   registerLink: {
//     display: 'block',
//     marginTop: '10px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     color: '#333',
//   },
// };


// function Login({
//   email,
//   pass,
//   name,
//   setEmail,
//   setName,
//   setPass,
// }) {
//   const check = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/auth/authenticate",
//         {
          
//           email: email,
//           password: pass,
//         }
//       );

//       console.log(response.data);
//       localStorage.setItem('token', response.data.token);
//       console.log(localStorage.getItem('token'));

//       window.alert("Successfully Logged In "+email);

      

//       navigate("/home");
//     } catch (error) {
//       console.log(error);
//       window.alert("Invalid Credentials");
//     }
//   };

//   const navigate = useNavigate();
//   const [checkpass, setCheckPass] = useState(false);

//   return (
//     <div style={styles.container}>
//       <div style={styles.login}>
//         <form onSubmit={check}>
//           <h2 style={styles.title}>Login</h2>
         
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Email:</label>
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Password:</label>
//             <input
//               style={styles.input}
//               type="password"
//               name="pass"
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button style={styles.button} type="submit">
//             Login
//           </button>
//           {checkpass && alert('Successful login ' + name)}
//           {checkpass && navigate('/home')}
//           <Link to="/signup" style={styles.registerLink}>
//             Don't have an account? Register
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     email: state.login.email,
//     pass: state.login.pass,
//     name: state.login.name,
//   };
// };

// const mapDispatchToProps = {
//   setEmail,
//   setPass,
//   setName,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './loginaction';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Chela One',
    
    
    
  },
  login: {
    width: '400px',
    padding: '40px',
    border: '2px solid black',
    borderRadius: '4px',
    backgroundColor: 'white',
    borderRadius:'10%'
    
   
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '20%',
    borderColor:'black'
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#33bbff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'140px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      

      navigate("/home");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");  
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div className='loginAdv'>
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
         <button style={styles.button}type="submit">
            Login
          </button>

          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/Signups" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);