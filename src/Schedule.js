import React, { Component } from 'react';
// import ScheduleData from './mockschedule';
import PropTypes from 'prop-types';
import './Schedule.css';
import axios from 'axios';

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
      <td>
          <audio controls>
            <source src={'https://s3-eu-west-1.amazonaws.com/dschmitz/devcon/speech/' + encodeURI(title) + '.mp3'} type="audio/mpeg"/>
          </audio>
      </td>
    </tr>;

TalkRow.propTypes = {
  talk: PropTypes.object.isRequired
};

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      talks: []
    };
  }

  componentDidMount() {
    axios.get('https://ommq47nahb.execute-api.eu-west-1.amazonaws.com/prod/schedule', { crossdomain: true })
      .then(res => {
        this.setState({ talks: res.data.talks });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='schedule'>
        <table className='table'>
          <thead className='table-header'>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Title</th>
              <th>Speaker</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
              this.state.talks.map( (talk, i) => <TalkRow key={i} talk={talk}/> )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Schedule;
