import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css'
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";


export default function CourseList({ listCourses }) {
    return (
        < table id="CourseList" >
            <thead>
                <CourseListRow textFirstCell="Available Courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length < 1 ?
                    <CourseListRow textFirstCell="No courses available" /> :
                    listCourses.map(course => (
                        <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} key={course.id} isHeader={false} />
                    ))
                }
                {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader="false" />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader="false" />
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader="false" /> */}
            </tbody>
        </table >
    )
}

CourseList.propTypes = {
    CourseShape: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired
    }),
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
}