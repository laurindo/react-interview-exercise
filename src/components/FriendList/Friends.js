import React, { Component } from 'react';
import commonStyles from '../../styles/general.css';
import styles from './styles/FriendList.css';
import FriendList from './FriendList';
import Form from '../Form/Form';
import AddFriendInput from './AddFriendInput';
import SelectBox from '../SelectBox';
import Button from '../Button';
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
      setFriendName,
      setGender,
      pagination,
      currentData,
      showMessage,
      friendTemporaryBasicInfo,
    } = this.props;

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <Form>
          <AddFriendInput
            pagination={pagination}
            setFriendName={setFriendName}
            addFriend={addFriend} />

          <SelectBox
            name="gender"
            title="Select a Gender"
            name="genders"
            id="gender"
            onChange={setGender}
            options={GENDER} />

          <Button
            disabled={!friendTemporaryBasicInfo.name || !friendTemporaryBasicInfo.gender}
            title="Add"
            onClick={addFriend} />
        </Form>

        <FriendList
          pagination={pagination}
          friends={currentData}
          actions={{...this.props}} />

        <PaginationApp />
      </div>
    );
  }
}

export default Friends;
