import React from "react";
import { Link } from "react-router-dom";
import { urlLink } from "../../urlLink";

const LinkToCreateAccount = () => <Link to={urlLink.CREATE_USER}>Create Account</Link>

export default LinkToCreateAccount;