import React from "react";
import { Link } from "react-router-dom";
import { urlLink } from "../../urlLink";

const LinkToLogIn = () => <Link to={urlLink.LOGIN}>Log In</Link>

export default LinkToLogIn;