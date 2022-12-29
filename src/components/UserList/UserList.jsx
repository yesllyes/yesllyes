import React, { Link } from 'react-router-dom';

import StyledUserList from './styled';

function UserList({
  searchList,
  keyword,
  userkey,
  image,
  username,
  accountname,
}) {
  // const itemId = searchList.accountname.slice(2);

  return (
    <StyledUserList>
      <Link to={`/myprofile`}>
        <li className="userList" key={userkey}>
          <img src={image} alt="" />
          <div className="userInfo">
            {username.includes(keyword) ? (
              <p className="username">
                {username.split(keyword)[0]}
                <span className="keyword">{keyword}</span>
                {username.replace(username.split(keyword)[0] + keyword, '')}
              </p>
            ) : (
              <p className="username">{username}</p>
            )}
            {accountname.includes(keyword) ? (
              <p className="accountname">
                {accountname.split(keyword)[0]}
                <span className="keyword">{keyword}</span>
                {accountname.replace(
                  accountname.split(keyword)[0] + keyword,
                  ''
                )}
              </p>
            ) : (
              <p className="accountname">{accountname}</p>
            )}
          </div>
        </li>
      </Link>
    </StyledUserList>
  );
}
export default UserList;
