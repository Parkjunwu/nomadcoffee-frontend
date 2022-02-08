import React from "react";
import { Link } from "react-router-dom";
import { urlLink } from "../../urlLink";

const LinkToFindUser = () => <Link to={urlLink.FIND_USER}>Find Username or Password</Link>

export default LinkToFindUser;