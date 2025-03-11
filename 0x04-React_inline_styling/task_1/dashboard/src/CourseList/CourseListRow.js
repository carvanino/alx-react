import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return (
    <tr className={isHeader ? css(styles.headerStyle) : css(styles.rowStyle)}>
      { isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(styles.th)} colSpan={2}>{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  )
}

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },

  headerStyle: {
    backgroundColor: '#deb5b545',
  },
  
  th: {
    borderBottom: '2px solid #e6e6e6',
  }
})

export default CourseListRow;