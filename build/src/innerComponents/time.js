import React from 'react';
import Elapsed from './elapsed';
import Duration from './duration';

//prop types
import {timePropTypes} from '../spec/propTypes'

const Time = (props) => {
  let {currentAudioTime, duration} = props;

  return (
    <div className="audio-player-time">
      <Elapsed currentAudioTime={currentAudioTime}/>/<Duration duration={duration}/>
    </div>
  )
}

Time.propTypes = timePropTypes;

export default Time;