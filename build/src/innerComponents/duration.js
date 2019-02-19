import React from 'react';

//prop types
import {durationPropTypes} from '../spec/propTypes'

const Duration = (props) => {
  let {duration} = props;

  return (
    <span className="audio-player-duration">
      {duration}
    </span>
  )
}

Duration.propTypes = durationPropTypes;

export default Duration;