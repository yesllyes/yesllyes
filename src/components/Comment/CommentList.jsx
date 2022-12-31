import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledCommentList, Scrollwrap } from './styled';
import { StyledPostMessage } from '../TextPost/styled';
import StyledUserInfo from './../UserInfo/styled';
import useAuthContext from '../../hooks/useAuthContext';
import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

export default function CommentList() {
  const { postId } = useParams();
  const { auth } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [commentData, setCommentData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accountName) {
      fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/comments`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setCommentData(res.comments);
          setLoading(false);
        })
        .catch((e) => e);
    }
  }, [auth]);

  const goProfile = () => {
    navigate('/profile');
  };

  return (
    <Scrollwrap>
      <StyledCommentList>
        {loading && <div>loading!!!</div>}
        {!loading && commentData !== undefined ? (
          commentData.map((comment) => (
            <>
              <li key={comment.id}>
                <div className="comment-info">
                  <div className="profile-box">
                    <img
                      src={comment.author.image}
                      className="basic-profile"
                      alt="유저프로필이미지"
                      onClick={goProfile}
                    />
                  </div>
                  <div className="user-name">
                    <p onClick={goProfile}>{comment.author.username}</p>
                    <span className="comment-time">· 댓글단시간</span>
                  </div>
                  <button className="moreBtn">
                    {/* // onClick={삭제, 신고모달 토글 */}
                    <img src={MoreVertical} alt="더보기 이미지" />
                  </button>
                </div>
                <StyledPostMessage key={comment.id}>
                  <div className="coment-cont">{comment.content}</div>
                </StyledPostMessage>
              </li>
            </>
          ))
        ) : (
          <div>loading!!!</div>
        )}
      </StyledCommentList>
    </Scrollwrap>
  );
}
