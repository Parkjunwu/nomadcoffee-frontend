import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({titleName}:{titleName:string}) => {
  return (
    <Helmet>
      <title>
        {titleName} | Instaclone
      </title>
    </Helmet>
  )
}
export default PageTitle;