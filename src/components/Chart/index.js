/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'

function Chart({ data, captions }) {
  const props = {
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 20,
      fontFamily: 'sans-serif',
    }),
  }
  return <RadarChart captions={captions} data={data} size={250} {...props} />
}

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  captions: PropTypes.object.isRequired,
}

export default Chart
