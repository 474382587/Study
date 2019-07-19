import React, { Component } from 'react';
// React-Router
import { Link } from 'react-router-dom';
// Request library
import axios from 'axios';
// Utils
import { ERROR, openNotification } from '../../utils/notification';
// UI Components
import { Spin, Divider, Card, Select } from 'antd';
const { Option } = Select;

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountsArray: [],
      selectedAccount: '',
      loading: true
    };
  }

  componentDidMount() {
    // Retrieve data from server
    axios
      .get('/accounts')
      .then(res => {
        const accounts = res.data;
        this.setState({
          loading: false,
          accountsArray: accounts
        });
      })
      .catch(err => {
        //   error handling
        console.log('err', err);
        openNotification(ERROR);
      });
  }

  // Select Account callback
  handleSelectAccount = account => {
    this.setState(state => {
      return {
        selectedAccount: state.accountsArray.find(
          item => item.id === account.key - 0
        )
      };
    });
  };

  render() {
    return this.state.loading ? (
      <div className="align-center">
        <Spin size="large" />
      </div>
    ) : (
      <div className="container">
        <h2>Please select an account:</h2>
        <Select
          showSearch
          className="full-width"
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {this.state.accountsArray.map(account => {
            return (
              <Option
                onClick={this.handleSelectAccount}
                key={account.id}
                value={account.id}
              >
                {account.name}
              </Option>
            );
          })}
        </Select>

        {this.state.selectedAccount ? (
          <div>
            <Divider />
            <Card
              title="Account"
              extra={
                <Link to={`account/${this.state.selectedAccount.id}`}>
                  More Detail
                </Link>
              }
              className="full-width"
            >
              <span className="special-content">
                {this.state.selectedAccount.name}
              </span>
            </Card>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Account;
