import React from 'react';

//prop types
import {elapsedPropTypes} from '../spec/propTypes'

const Elapsed = (props) => {
  let {currentAudioTime} = props;

  return (
    <span className="audio-player-elapsed">
      {currentAudioTime}
    </span>
  )
}

Elapsed.propTypes = elapsedPropTypes;

export default Elapsed;