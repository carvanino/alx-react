import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import withLogging from '../HOC/withLogging';

function CourseList({listCourses}) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell={'Available courses'} isHeader/>
        <CourseListRow textFirstCell={'Course name'} textSecondCell={'Credit'} isHeader />
      </thead>

      <tbody>
        {listCourses?.length > 0 ? (
          listCourses.map(({id, name, credit}) => (
            <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
          )
        )) : (
          <CourseListRow textFirstCell={'No course available yet'} />
        )} 
      </tbody>
    </table>
  )
}

CourseList.defaultProps = {
  listCourses: [],
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default withLogging(CourseList);