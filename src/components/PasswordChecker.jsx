import React from "react";
import {
  InputGroup,
  FormControl,
  ProgressBar,
  ListGroup
} from "react-bootstrap";

class PasswordChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPassword: "",
      passwordStrength: 0,
      charVarient: "danger",
      specialCharVarient: "danger",
      numVarient: "danger",
      capitalVarient: "danger"
    };
  }

  handleTextChange = inputChange => {
    this.setState({ inputPassword: inputChange.target.value });
    this.checkPasswordStrength(inputChange.target.value);
  };

  checkPasswordStrength(password) {
    var charVarient = "danger";
    var specialCharVarient = "danger";
    var numVarient = "danger";
    var capitalVarient = "danger";

    let passwordStrength = this.state.passwordStrength;

    const passwordLength = password.length;

    switch (true) {
      case passwordLength < 2:
        passwordStrength = 0;
        break;
      case passwordLength < 4:
        passwordStrength = 10;
        break;
      case passwordLength < 8:
        passwordStrength = 30;
        break;
      case passwordLength < 12:
        charVarient = "success";
        passwordStrength = 50;
        break;
      case passwordLength > 11:
        charVarient = "success";
        passwordStrength = 70;
        break;
      default:
        passwordStrength = 0;
        break;
    }

    let caps = password.match(/[A-Z]/g);
    if (caps != null) {
      if (caps.length > 0) {
        capitalVarient = "success";
        passwordStrength += 10;
      }
    }

    let nums = password.match(/[0-9]/g);
    if (nums != null) {
      if (nums.length > 0) {
        numVarient = "success";
        passwordStrength += 10;
      }
    }

    let specialChars = password.match(/[^a-zA-Z0-9]/g, "");
    if (specialChars != null) {
      if (specialChars.length > 0) {
        specialCharVarient = "success";
        passwordStrength += 10;
      }
    }

    this.setState({
      passwordStrength,
      charVarient,
      specialCharVarient,
      numVarient,
      capitalVarient
    });
  }

  render() {
    const {
      passwordStrength,
      charVarient,
      specialCharVarient,
      numVarient,
      capitalVarient
    } = this.state;
    return (
      <div>
        <h3>Test your password</h3>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Password"
            aria-label="Password"
            onChange={this.handleTextChange}
            type="password"
          />
        </InputGroup>
        <ProgressBar animated now={passwordStrength} />
        <ListGroup>
          <ListGroup.Item variant={charVarient}>8+ characters</ListGroup.Item>
          <ListGroup.Item variant={specialCharVarient}>
            1+ symbol
          </ListGroup.Item>
          <ListGroup.Item variant={numVarient}>1+ number</ListGroup.Item>
          <ListGroup.Item variant={capitalVarient}>
            1+ capital letter
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default PasswordChecker;
