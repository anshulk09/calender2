import React, { Component } from 'react';
import Modal from './Modal';

export default class calender extends Component {
  constructor() {
    super();
    this.state = {
      table: [
        {
          hour: 0,
          mon: { data: '', margin: 0 },
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
          sun: '',
        },
        {
          hour: 1,
          mon: { data: '', margin: 0 },
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
          sun: '',
        },
        {
          hour: 2,
          mon: { data: '', margin: 0 },
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
          sun: '',
        },
        {
          hour: 3,
          mon: { data: '', margin: 0 },
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
          sun: '',
        },
        {
          hour: 4,
          mon: { data: '', margin: 0 },
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
          sun: '',
        },
        {
          hour: 5,
          mon: { data: '', margin: 0 },
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
          sun: '',
        },
      ],
      isVisible: false,
      stdate: new Date(),
      endate: new Date(),
      marginMon: 0,
    };
  }

  handleInput = (e, hour, day) => {
    console.log(e, hour, day);

    this.setState({ stdate: e.target.value }, () => {
      let stTime = this.state.stdate.toString().substring(11, 13);
      let stMinute = this.state.stdate.toString().substring(14, 16) * 2;
      // this.setState({ marginMon: stMinute });
      this.setState((state) => {
        return state.table.map((item) => {
          console.log(item, stMinute);
          return item.hour === hour && (item[day]['margin'] = stMinute);
        });
      });
    });
  };

  openModal = (e) => {
    e.stopPropagation();
    this.setState({ isVisible: true });
  };

  hideModal = (e) => {
    this.setState({ isVisible: false });
  };
  hide = (e) => {
    e.stopPropagation();
    this.setState({ isVisible: false });
  };

  handleDateChange = (e) => {
    console.log(e.target.value.toLocaleString());
    this.setState({ stdate: e.target.value }, () => {
      let stTime = this.state.stdate.toString().substring(11, 13);
      let stMinute = this.state.stdate.toString().substring(14, 16) * 2;
      this.setState({ margin: stMinute });
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {this.state.table.map((row, i) => {
              return (
                <tr key={i}>
                  <td>{row.hour}</td>
                  <td>
                    <div
                      // onClick={(e) => this.openModal(e, row.hour, "mon")}
                      style={{
                        marginTop: row.mon.margin + 'px',
                        height: '120px',
                        width: '100px',
                        top: 24 + 120 * row.hour + row.hour * 3,
                        position: 'absolute',
                        border: '1px solid',
                      }}
                    >
                      <input
                        type='datetime-local'
                        style={{ width: '80px' }}
                        onChange={(e) => this.handleInput(e, row.hour, 'mon')}
                      />
                    </div>
                  </td>
                  <td>{row.tue}</td>
                  <td>{row.wed}</td>
                  <td>{row.thu}</td>
                  <td>{row.fri}</td>
                  <td>{row.sat}</td>
                  <td>{row.sun}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal visible={this.state.isVisible} onClose={this.hideModal}>
          <div className='mr-40'>
            <i className='fa fa-times' onClick={this.hide}></i>
          </div>
          <input
            type='datetime-local'
            value={this.state.stdate}
            onChange={(e) => this.handleDateChange(e)}
          />
          <input
            type='datetime-local'
            value={this.state.endate}
            onChange={(e) => this.handleDateChange(e)}
          />
          <div className='text-xs text-green-300 font-bold mb-4'>
            Repeats every day
          </div>
          <div>
            <button className='bg-yellow-500 hover:bg-yellow-700 text-white border border-white font-bold py-1 px-3 rounded mr-5'>
              Reschedule
            </button>
            <button className='bg-red-500 hover:bg-red-700 text-white border border-white font-bold py-1 px-4 rounded mr-5'>
              <i className='fa fa-times-cicle'></i>Cancel
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
