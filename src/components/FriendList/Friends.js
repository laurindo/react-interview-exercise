import React, { Component } from 'react';
import styles from './styles/FriendList.css';
import FriendList from './FriendList';
import Form from '../Form/Form';
import AddFriendInput from './AddFriendInput';
import SelectBox from '../SelectBox/SelectBox';
import PaginationApp from '../../containers/PaginationApp';
import { GENDER } from '../../constants/General';

class Friends extends Component {
  componentDidMount() {
    const { pagination, showFriendsByPageLimit } = this.props;
    showFriendsByPageLimit(pagination);
  }

  render() {
    const {
      addFriend,
      deleteFriend,
      starFriend,
      setFriendName,
      setGender,
      pagination,
      currentData,
      showMessage,
    } = this.props;

    const actions = {
      addFriend,
      setFriendName,
      deleteFriend,
      starFriend,
      setGender
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <div className="messageNotification">
          {
            (showMessage) ? <h1>success</h1> : null
          }
        </div>
        <Form>
          <AddFriendInput
            pagination={pagination}
            setFriendName={actions.setFriendName}
            addFriend={actions.addFriend} />

          <SelectBox
            name="gender"
            title="Select a Gender"
            name="genders"
            id="gender"
            onChange={actions.setGender}
            options={GENDER} />

          <button onClick={() => addFriend(pagination) }>Save</button>
        </Form>

        <FriendList
          pagination={pagination}
          friends={currentData}
          actions={actions} />

        <PaginationApp />
      </div>
    );
  }
}

export default Friends;
