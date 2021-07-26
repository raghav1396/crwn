import React from "react";
import { withRouter } from 'react-router-dom'
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`menu-item ${size?size:''}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
		<div className="background-image" style={{
			backgroundImage: `url(${imageUrl})`
		}}/>
    <div className="content">
      <h2 className="title">{title}</h2>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
