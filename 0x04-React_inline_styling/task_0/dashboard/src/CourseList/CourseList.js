import React from "react";
import CourseListRow from "./CourseListRow";
// import './CourseList.css'
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
    table: {
        margin: "0 auto",
        width: "80%",
        textAlign: "left",
        border: "1px solid #e8e8e8"
    },
    th: {
        borderBottom: "10px solid e8e8e8",
    },
    thCol2: {
        textAlign: "center",
        borderBottom: "2px solid #e8e8e8"
    }

})

export default function CourseList({ listCourses }) {
    return (
        < table id="CourseList" className={css(styles.table)}>
            <thead>
                <CourseListRow className={css(styles.thCol2)} textFirstCell="Available Courses" isHeader={true} />
                <CourseListRow className={css(styles.th)} textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
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