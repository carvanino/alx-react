import React from "react";
import CourseList from "./CourseList";
import PropTypes from "prop-types";

const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired
});

export default CourseShape;
