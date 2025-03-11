import React from "react";
import PropTypes from "prop-types";

const headerStyle = {
  backgroundColor: "#deb5b545"
}
const rowStyle = {
  backgroundColor: "#f5f5f5ab"
}
export default function CourseListRow({ isHeader, textFirstCell, textSecondCell, className }) {
  const style = isHeader ? headerStyle : rowStyle 
  return (
    <tr style={style}>
      {isHeader ?
        !textSecondCell ?
          <th className={className} colSpan="2">{textFirstCell}</th>
          :
          <>
            <th className={className}>{textFirstCell}</th>
            <th className={className}>{textSecondCell}</th>
          </>
        :
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
