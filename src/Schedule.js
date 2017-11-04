import React, { Component } from 'react';
import ScheduleData from './mockschedule';
import PropTypes from 'prop-types';
import './Schedule.css';


const renderDateStringAsTime = (datestring) => {
  const d = new Date(Date.parse(datestring));
  console.log(d);
  return d.toLocaleTimeString('de');
};

const TalkRow = ( { talk: {startsAt, endsAt, title, speakers} } ) =>
    <tr className='scheduleRow'>
      <td>{renderDateStringAsTime(startsAt)}</td>
      <td>{renderDateStringAsTime(endsAt)}</td>
      <td>{title}</td>
      <td>{speakers.join(', ')}</td>
      <td>SPEAKBUTTON</td>
      <td>GENERATEBUTTON</td>
    </tr>;

TalkRow.propTypes = {
  talk: PropTypes.object.isRequired
};

class Schedule extends Component {
  render() {
    const talks = ScheduleData.schedule;
    return (
      <div className='schedule'>
        <table className='table'>
          <thead className='table-header'>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Title</th>
              <th>Speaker</th>
              <th>Tell me the summary</th>
              <th>Generate summary</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
              talks.map( (talk, i) => <TalkRow key={i} talk={talk}/> )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Schedule;
