import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types';
import './CourseList.css';
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell={'Available courses'} isHeader={true} />
                <CourseListRow textFirstCell={'Course name'} textSecondCell={'Credit'} isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length > 0 ?
                    listCourses.map((course) => {
                        return (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>)
                    }) :
                    <CourseListRow textFirstCell="No available courses" />
                }
            </tbody>
        </table>
    )
}

CourseList.defaultProps = {
    listCourses: []
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList;