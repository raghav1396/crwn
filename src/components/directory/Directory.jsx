import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selectors"
import MenuItem from "../menuItem/MenuItem";
import "./Directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
