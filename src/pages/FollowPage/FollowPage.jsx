import React, { Children } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { TopBasicNav } from '../../components/Navbar/TopNavbar';
import TabMenu from '../../components/TabMenu/TabMenu';
import UserInfo from '../../components/User/UserInfo';
import {
  FollowerList,
  FollowerWrap,
  FollowerTit,
  List,
  TabMenuWrap,
} from './styled';

const FollowPage = () => (
  <FollowerWrap>
    <FollowerTit>Follower</FollowerTit>
    <TopBasicNav value="Followers"  />
    <FollowerList>
      <List>
        <li className="Follow">
          <UserInfo />
          <Button size="xsm" status="disabled">
            팔로우
          </Button>
        </li>
        <li className="Cancel">
          <UserInfo />
          <Button size="xsm" status="disabled">
            취소
          </Button>
        </li>
        <li className="Cancel">
          <UserInfo />
          <Button size="xsm" status="disabled">
            취소
          </Button>
        </li>
        <li className="Follow">
          <UserInfo />
          <Button size="xsm" status="disabled">
            팔로우
          </Button>
        </li>
      </List>
    </FollowerList>

    <TabMenuWrap>
      <TabMenu />
    </TabMenuWrap>
  </FollowerWrap>
);

export default FollowPage;
