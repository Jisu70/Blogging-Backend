import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { style } from "@mui/system/Stack/createStack";
import { useState } from "react";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0 ",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  felx: 1;
  flex-direction: column;
  & > div,
  > button,
  > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`  
  text-transform: none;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.1);
`;

const signupInitialvalue = {
  name : '',
  username : '',
  password : '' 
}



const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, toggleAccount] = useState("login");


const [signup,setSignup] = useState(signupInitialvalue)



  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputchange = (e) => {
    setSignup({...signup,[e.target.name]:e.target.value})//(...) it is a spread operaotor When we want to copy the elements of a particular array into a new array without affecting the original array, we can use the spread operator.
  }

 const signupUser = () => {
  
 }



  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />

        {account === "login" ? (
          <Wrapper>
            <TextField variant="filled" label="Enter user Name" />
            <TextField variant="filled" label="Enter Password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SignupButton onClick={() => toggleSignup()}>
              Creat an Account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="filled" onChange={(e)=>onInputchange(e)} name='name' label="Enter Name" />
            <TextField variant="filled" onChange={(e)=>onInputchange(e)}  name='username' label="Enter Email" />
            <TextField variant="filled" onChange={(e)=>onInputchange(e)}  name='password' label="Enter Password" />


            <SignupButton onClick={()=>signupUser()} variant="contained">Signup</SignupButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <LoginButton onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
