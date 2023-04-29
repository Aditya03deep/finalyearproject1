
import "./register.css"
import reg_bg from "../../pics/reg_bg1.jpg"
import { TextField } from "@mui/material"
const Register = () => {
  return (
    <main className="rectangle-top">
      <img className="frame-inner" alt="" src={reg_bg} />
      <div className="frame-item">
        <div className="rectangle-root">
          <span className="h1">ALREADY HAVE AN ACCOUNT</span>
          <span>LETS JUMP INTO THE ADVENTURE</span>
          <button className="create-btn">LOGIN</button>
        </div>
      </div>
      <div className="frame-child">
        <div className="rectangle-parent">
          <span>Lets Get Started</span>

          <div className="text_parent">
            <TextField
              className="text_field"
              // sx={{ width: 400 }}
              // color="primary"
              // variant="standard"
              type="text"
              label="Username"
              // placeholder="Placeholder"
              // size="medium"
              
            />

            <TextField
              className="text_field"
              // sx={{ width: 400 }}
              // color="primary"
              // variant="standard"
              type="text"
              label="Email"
              // placeholder="Placeholder"
              // size="medium"
             
            />
            <TextField
              className="text_field"
              // sx={{ width: 400 }}
              // color="primary"
              // variant="standard"
              type="text"
              label="Password"
              
              // placeholder="Placeholder"
              // size="medium"
             
            />
          </div>
          <div className="create">
            <button className="create-btn">Create</button>
          </div>

        </div>

      </div>


    </main>
  );
};

export default Register;
