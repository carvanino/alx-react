import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import withLogging from '../HOC/withLogging';
import {StyleSheet, css} from 'aphrodite';

function CourseList({listCourses}) {
  return (
    <table className={css(styles.CourseList)}>
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

const styles = StyleSheet.create({
  CourseList: {
    width: '90%',
    margin: '0 auto',
    border: '2px solid #f5f5f5',
  }
});

export default withLogging(CourseList);