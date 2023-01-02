import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledCommentList, StyledCommentli, Scrollwrap } from './styled';
import { StyledPostMessage } from '../TextPost/styled';
import useAuthContext from '../../hooks/useAuthContext';
import MoreVertical from '../../assets/icon/icon-more-vertical-small.svg';

export default function CommentList() {
  const { postId } = useParams();
  const { auth } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [commentData, setCommentData] = useState([]);
  const navigate = useNavigate();

  const BASEURL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    if (auth.accountName) {
      fetch(
        `https://mandarin.api.weniv.co.kr/post/${postId}/comments?limit=999`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setCommentData(res.comments);
          setLoading(false);
        })
        .catch((e) => e);
    }
  }, [auth.accountName, auth.token, postId]);

  const goProfile = (author) => {
    navigate(`/profile/${author}`);
  };

  const getTimeGap = (time) => {
    const timeValue = new Date(time);
    const end = new Date();
    const diff = Math.floor((end.getTime() - timeValue.getTime()) / 1000); // 경과 시간 (초로 계산)

    // 60초 전
    if (diff < 60) {
      return '방금 전';
      // 1시간 미만 (60초 * 60분)
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)}분 전`;
      // 하루 미만 (24시간 -> 60초 * 60분 * 24시간)
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)}시간 전`;
      // 한달 미만 (대략 30일 -> 86400 * 30)
    } else if (diff < 2592000) {
      return `${Math.floor(diff / 86400)}일 전`;
      // 1년 미만 (12달 -> 86400 * 30 * 12달)
    } else if (diff < 31104000) {
      return `${Math.floor(diff / 2592000)}달 전`;
    } else {
      return '오래 전';
    }
  };

  // 댓글 삭제 함수 (추후 모달로 옮김)
  const commentDelete = async (commentId) => {
    const CommentDeleteReq = await fetch(
      `${BASEURL}/post/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await CommentDeleteReq.json();

    alert(result.message);
  };

  // 댓글 신고 함수 (추후 모달로 옮김)
  const commentReport = async (commentId) => {
    const CommentReportReq = await fetch(
      `${BASEURL}/post/${postId}/comments/${commentId}/report`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-type': 'application/json',
        },
      }
    );
    const result = await CommentReportReq.json();

    if (result.report) {
      alert(`댓글 id:${result.report.comment}가 신고되었습니다.`);
    } else {
      alert(result.message);
    }
  };

  return (
    <Scrollwrap>
      <StyledCommentList>
        {loading && <div>loading!!!</div>}
        {!loading && commentData !== undefined ? (
          commentData.map((comment) => (
            <StyledCommentli key={comment.id}>
              <div className="comment-info">
                <div className="profile-box">
                  <img
                    src={comment.author.image}
                    className="basic-profile"
                    alt="유저프로필이미지"
                    onClick={() => goProfile(comment.author.accountname)}
                  />
                </div>
                <div className="user-name">
                  <p onClick={() => goProfile(comment.author.accountname)}>
                    {comment.author.username}
                  </p>
                  <span className="comment-time">{`· ${getTimeGap(
                    comment.createdAt
                  )}`}</span>
                </div>
                <button className="moreBtn">
                  <img
                    src={MoreVertical}
                    alt="더보기 이미지"
                    // 댓글 삭제 함수(추후 모달로 옮김)
                    onClick={() => commentDelete(comment.id)}

                    // 댓글 신고 함수(추후 모달로 옮김)
                    // onClick={() => commentReport(comment.id)}
                  />
                </button>
              </div>
              <StyledPostMessage>
                <div className="comment-cont">{comment.content}</div>
              </StyledPostMessage>
            </StyledCommentli>
          ))
        ) : (
          <div>loading!!!</div>
        )}
      </StyledCommentList>
    </Scrollwrap>
  );
}
