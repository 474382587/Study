import React, { Component } from 'react';
import { Spin, Card } from 'antd';
import axios from 'axios';
import { ERROR, SUCCESS, openNotification } from '../../utils/notification';

class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loading: true
    };
  }
  componentDidMount() {
    // get the param for request --> id of the account
    const id = this.props.match.params.id;
    // Retrieve data from server
    axios
      .get(`/accounts/${id}`)
      .then(res => {
        const data = res.data;
        console.dir(data);
        this.setState({
          loading: false,
          profile: data
        });
      })
      .catch(err => {
        //   error handling
        console.log('err', err);
        openNotification(ERROR);
      });
  }
  //   delete callback
  handleDelete = event => {
    event.preventDefault();
    // re-enable loading to prevent user to click delete button multiple times
    this.setState({
      loading: true
    });
    // get the param for delete request --> id of the account to be deleted
    const id = event.currentTarget.dataset.id;
    // delete the account with this id ^
    axios
      .delete(`/accounts/${id}`)
      .then(() => {
        // Notify user that this account is deleted
        openNotification(SUCCESS);
        setTimeout(() => {
          // redirect to homepage
          this.props.history.push('/');
        }, 1000);
      })
      .catch(err => {
        // display the card
        this.setState({
          loading: false
        });
        //   error handling
        console.log('err', err);
        openNotification(ERROR);
      });
  };

  render() {
    const { nameFirst, nameLast, gender, email, ip, id } = this.state.profile.id
      ? this.state.profile
      : {};

    return this.state.loading ? (
      <Spin size="large" />
    ) : (
      <div className="container">
        {id ? (
          <Card
            className="full-width"
            title="Account Detail"
            extra={
              <a href="/" data-id={id} onClick={this.handleDelete}>
                Delete
              </a>
            }
          >
            <ul className="left-align details">
              <li>
                <span>User ID:</span> {id}
              </li>
              <li>
                <span>First Name:</span> {nameFirst}
              </li>
              <li>
                <span>Last Name:</span> {nameLast}
              </li>
              <li>
                <span>Gender:</span> {gender}
              </li>
              <li>
                <span>Email:</span> <a href={email}>{email}</a>{' '}
              </li>
              <li>
                <span>IP:</span> <a href={ip}>{ip}</a>
              </li>
            </ul>
          </Card>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default AccountDetail;
