import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import Share from '../../assets/icon/icon-share.svg';
import Message from '../../assets/icon/icon-message-small.svg';
import { StyledProfileInfo, CircleBtn } from './styled';
import useAuthContext from '../../hooks/useAuthContext';

function ProfileInfo({ accountName }) {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [followersCount, setFollowersCount] = useState(undefined);

  const accountId = userInfo.accountname;
  const [isFollow, setIsFollow] = useState(undefined);

  useEffect(() => {
    setLoading(true);

    fetch(`https://mandarin.api.weniv.co.kr/profile/${accountName}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInfo(res.profile);
        setIsFollow(res.profile.isfollow);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [auth, accountName]);

  const followAPI = useCallback(async () => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/profile/${accountName}/follow`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const result = await res.json();

      setIsFollow((isfollow) => !isfollow);
      setFollowersCount(result.profile.followerCount);
      return result;
    } catch (e) {
      return new Error(e);
    }
  }, [accountName, auth.token]);

  const unFollowAPI = useCallback(async () => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/profile/${accountName}/unfollow`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const result = await res.json();

      setIsFollow((isfollow) => !isfollow);
      setFollowersCount(result.profile.followerCount);
      return result;
    } catch (e) {
      return new Error(e);
    }
  }, [accountName, auth.token]);

  const handleFollowState = () => {
    if (isFollow) {
      unFollowAPI();
    } else {
      followAPI();
    }
  };

  if (loading) {
    return <div>Loading중입니다...</div>;
  }

  if (error) {
    return <div>Error메세지: {error}</div>;
  }

  const shareProfile = (event) => {
    navigator.clipboard.writeText(window.location.href);
    alert('주소가 복사되었습니다!');
  };

  return (
    <StyledProfileInfo>
      <TopBasicNav />
      <div className="ProfileHeader">
        <p className="followers">
          <button
            onClick={() => {
              navigate('./followers', {
                state: {
                  accountName,
                },
              });
            }}
          >
            {followersCount === undefined
              ? userInfo.followerCount
              : followersCount}
          </button>
          <span>followers</span>
        </p>
        <img src={userInfo.image} alt="프로필 사진" />
        <p className="followings">
          {userInfo.followingCount}
          <span>followings</span>
        </p>
      </div>

      <div className="ProfileMain">
        <p>
          {userInfo.username}
          <span>@ {userInfo.accountname}</span>
        </p>
      </div>

      <div className="ProfileSub">
        <p>{userInfo.intro}</p>
      </div>

      <div className="ProfileFooter">
        {auth.accountName === accountName ? (
          <>
            <Link to={`/profile/${accountId}/edit`}>
              <Button size="sm" active={true}>
                프로필 수정
              </Button>
            </Link>
            <Link to="/campaignupload">
              <Button size="sm" active={true}>
                활동 등록
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/chatlist">
              <CircleBtn>
                <img src={Message} alt="메시지 보내기" />
              </CircleBtn>
            </Link>
            <Button size="md" active={isFollow} onClick={handleFollowState}>
              {isFollow ? '언팔로우' : '팔로우'}
            </Button>
            <CircleBtn onClick={shareProfile}>
              <img src={Share} alt="공유하기" />
            </CircleBtn>
          </>
        )}
      </div>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
