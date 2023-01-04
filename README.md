# 버드나다 Budnada
 <strong> <span style='background-color:#dcffe4'>'버드나다'</span>는 새봄에 새순(Bud)이 자라 울창한 나무가 되는 것처럼 작은 실천을 모아 공유하고자 하는 환경운동 SNS입니다. </strong>
 <details>
  <summary>목차</summary>

  1. [프로젝트 소개](#intro) 
  2. [팀원 소개](#members)
  3. [요구사항](#requirement)
  4. [기능 UI](#ui)
  5. [컨벤션](#convention)
  6. [주요 코드](#code)
  7. [폴더 트리](#tree)
  8. [트러블 슈팅](#truble)
  9. [계획 및 후기](#plan)
</div>
</details>


## 1. <span id = "intro"> 프로젝트 소개 </span>
(배포 URl)

- ### 🌱 대표 ID 및 Password
  - ID : prugioh@likelion.org
  - PW : vnfmwl5!! (푸르지5!!)
 - ### 🖥️개발 일정 : 2022.12.01 ~ 2023.01.06
![ScreenImage](https://user-images.githubusercontent.com/62597615/210389928-cbe89d1d-8499-47a5-a550-35a5ed641bda.png)





### 1-1. 개요

🌏 `버드나다` 는 환경보호에 관심이 많으며 제로웨이스트를 직접 실천하고 싶은 사람들이 모인 온라인 플랫폼입니다. 

🙌 직접 캠페인을 만들어 홍보하거나 참여하여 다른 사람들과 친환경 정보를 공유할 수 있습니다.

🌳 사용자들에게 자신이 실천했던 환경 운동을 공유하거나 직접 만든 천연 키트를 판매할 수 있는 서비스를 제공합니다.

🌻 다른 사람들과의 채팅을 통해 상품 거래 및 캠페인 참여 의향 여부를 소통할 수 있습니다.


### 1-2. 개발 환경

|구분|설명|
|------|---|
|FrontEnd|<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-E33332?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">|
|BackEnd|제공된 API 사용|
|협업도구|<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"> <img src="https://img.shields.io/badge/Trello-3776AB?style=for-the-badge&logo=Trello&logoColor=white">|


Version:
```
react: `^18.2.0`
react-router-dom: `^6.4.5`
styled-components: `^5.3.6`
styled-reset: `^4.4.4`
prettier: `2.8.1`
```
<br/>

 🔗[버드나다 GitHub](https://github.com/yesllyes/yesllyes)
 <br/>
 🔗[버드나다 Trello](https://trello.com/b/KqnPxQjc/yes11yes) 
 <br/>
 🔗[버드나다 Figma](https://www.figma.com/file/nBS6UPDFpRCPL3PghkKA19/11%EC%A1%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%99%94%EC%9D%B4%ED%8C%85-%EC%96%8D?node-id=0%3A1) 

## 2. <span id = "members">팀원 소개</span>

| 박선영| 윤슬기| 이정호| 한상혁| 
|--|--|--|--|
|<img src= "https://user-images.githubusercontent.com/62597615/210385080-3542da71-595d-47db-b4dc-b746c2b7b815.png" height=180 width=180> | <img src="https://user-images.githubusercontent.com/62597615/210387976-caeac61e-367d-4f65-9d4a-13215b7c2dba.png" height=180 width=180>  | <img src="https://user-images.githubusercontent.com/62597615/210386762-cc51917d-868c-4cf8-8ca9-f144a67d9fc2.png" height=180 width=180>  | <img src="https://user-images.githubusercontent.com/62597615/210388190-3f3a880e-90ab-4b0b-81bb-9e6b9454bddb.png" height=180 width=180>|
| 🔗 [GitHub](https://github.com/syoungp273), 팀원 | 🔗 [GitHub](https://github.com/icstuckyi), 팀장 | 🔗 [GitHub](https://github.com/LeeJeongHooo), 팀원 | 🔗 [GitHub](https://github.com/Han-Sang), 팀원 |


### 2-1.역할 분담
![image](https://user-images.githubusercontent.com/85055608/210366562-56bd00ae-cc02-494e-870e-cc144cc89738.png)


## 3. <span id = "requirement">요구사항</span>

- **🙂Account**
  - 유효성 평가
  - 로그인/로그아웃 
  - 회원가입 
  - 프로필 정보 설정

- **✍️Post** 
  - 모달창 
  - 등록/수정/삭제
  - 이미지 업로드
  - 게시글 목록
  
- **📢Commemt**
  - 등록/삭제/수정
  - 신고하기

- **🔎Search** 
  - 유저 검색

- **🌹Follow**
  - 팔로우/언팔로우
  - 팔로우/팔로잉 리스트

- **♥️Like**
  - 게시물 좋아요 및 취소

- **🌴Campaign**
  - 캠페인 등록 
  - 참여 인원
  - 현재 참여 상태 여부 
  - URL 해당 링크 연결



## 4.<span id = "ui">기능 UI</span>
(선영님의 GIF)

## 5.<span id = "convention"> 컨벤션</span>


### 5.1 코딩 컨벤션

- 가장 대표적인 **네이버코딩컨벤션** 사용

1. 코드의 가독성을 높이기 위해
2. 코드의 유지보수성을 높이기 위해
3. 팀원들간의 코드의 컨벤션의 일관성을 가지기 위해


package.json파일
```json
"devDependencies": {
  "eslint-config-naver": "^2.1.0",
  "eslint-config-prettier": "^8.5.0",
  "prettier": "2.8.1"
}
```

- 폴더이름
  - 폴더구조 asset,components등의 상위폴더 소문자로 작성
  - jsx파일이 들어간 폴더 대문자로 작성

### 5.2 Git & GitHub컨벤션

- 효율적인 커밋메시지를 관리하기 위해서 .gitmessage.txt 템플릿을 제작
- vscode 터미널창에서 git commit 입력 시 아래의 템플릿을 확인 후 커밋메시지를 작성할 수 있도록 설정

<br>

템플릿 등록 후 vscode에서 커밋메시지 작성을 하기위해 config설정 커멘드
```bash
git config commit.template .gitmessage.txt
git config core.editor "code --wait"
```


## 6. <span id = "code">주요코드</code>


### 6.1 Context API

Context API를 사용하여 props drilling을 해결할 수 있었고, 전역으로 객체를 사용 가능

<br>

- context 폴더구조

```bash
.
├── ActionTypes.js
├── Auth.jsx
└── AuthReducer.js
```

3가지로 파일을 구분해서 dispatch, reducer의 가독성을 높여주도록 구현

<br>

- **ActionTypes.js**

ActionType 상수를 만들어서 dispatch, reducer의 ActionType명의 유지보수성을 증가시킴

```js
const ActionTypes = {
  LOGIN: 'login',
  LOGOUT: 'logout',
};
```

<br>

- **Auth.jsx**

새로고침이 발생한 경우 전역으로 관리되고 있는 객체가 없어지기 때문에 초기 유저정보를 localStorage에서 가져오게 설정하였으며, useReducer 훅과 함께 사용하여 조금 더 쉽게 전역에서 객체를 관리할 수 있게 설정

```jsx
const authContext = createContext();

const initFunction = () => {
  const localData = JSON.parse(localStorage.getItem('data'));

  if (localData) {
    return {
      token: localData.token,
      accountName: localData.accountName,
      image: localData.image,
      isUser: true,
    };
  }
  return { token: null, accountName: '', image: '', isUser: false };
};

function AuthContextProvider({ children }) {
  const [auth, authDispatch] = useReducer(AuthReducer, initFunction());

  const value = useMemo(
    () => ({
      auth,
      login: (token, accountName, image) => {
        authDispatch({
          type: ActionTypes.LOGIN,
          payload: { token, accountName, image },
        });
      },
      logout: () => {
        authDispatch({ type: ActionTypes.LOGOUT });
      },
    }),
    [auth]
  );

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
```
<br>

- **AuthReducer.js**

실제 외부에서 dispatch함수를 통해 호출되서 객체를 변화시키는 역할을 담당하며
LOGIN, LOGOUT이 되었을 경우 각각의 맞는 상황에서의 객체의 데이터 설정

```js
const AuthReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        isUser: true,
        token: action.payload.token,
        accountName: action.payload.accountName,
        image: action.payload.image,
      };
    case ActionTypes.LOGOUT:
      return { isUser: false, token: null, accountName: '', image: '' };
    default:
      return state;
  }
};
```

Context API 편하게 사용하기 위해 useAuthCustom훅 생성

<br>

- **useAUthContext**

```jsx
import { useContext } from 'react';
import { authContext } from '../context/Auth';

const useAuthContext = () => {
  const { auth, login, logout } = useContext(authContext);

  return { auth, login, logout };
};

export default useAuthContext;
```

<br>

AuthContex와 useAuthCustom훅 사용예시

useAuthCustom훅을 활용하여 login 후 API통신 후 login콜백함수를 통하여 내부적으로 Dispatch함수를 호출하여 전역에서 관리하고 있는 유저정보를 편리하게 업데이트 시킴


- **LoginPage.jsx**

```jsx
const { login } = useAuthContext();

...

localStorage.setItem('data', JSON.stringify(localData));
login(user.token, user.accountname, user.image);
```


## 7. <span id = "tree">폴더 트리</span>
```bash
├── 🗻public
└── 🗻src
    ├── 🌲assets
    │   ├──🌿icon
    │   └──🌿image
    ├── 🌲components
    │   ├── ☘️AlbumPost
    │   ├── ☘️Button
    │   ├── ☘️CampaignCard
    │   ├── ☘️Comment
    │   ├── ☘️LikeCommentButton
    │   ├── ☘️Modal
    │   │   ├── 🍀Alert
    │   │   └── 🍀ModalType
    │   ├── ☘️Navbar
    │   ├── ☘️Profile
    │   ├── ☘️TabMenu
    │   ├── ☘️TextInput
    │   ├── ☘️TextPost
    │   ├── ☘️UserInfo
    │   ├── ☘️UserList
    │   ├── ☘️UserPost
    │   └── ☘️Wrapper
    ├── 🌲context
    ├── 🌲hooks
    ├── 🌲pages
    │   ├── 🍃CampaignUpload
    │   ├── 🍃Chat
    │   ├── 🍃Follow
    │   ├── 🍃HomeFeed
    │   ├── 🍃IntroLogin
    │   ├── 🍃Login
    │   ├── 🍃NotFound
    │   ├── 🍃Post
    │   ├── 🍃Profile
    │   ├── 🍃ProfileEdit
    │   ├── 🍃ProfileSignup
    │   ├── 🍃Search
    │   ├── 🍃Signup
    │   └── 🍃Splash
    ├── 🌲routes
    ├── 🌲services
    └── 🌲styles
```

## 8. <span id = "truble">트러블 슈팅</span> 
(문제 / 해결 세션)

## 9. <span id = "plan">계획 및 후기</span>

### 추후 계획
- 
-
