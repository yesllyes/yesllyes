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
  7. [트러블 슈팅](#truble)
  8. [추후 계획](#plan)
  9. [폴더 트리](#tree)
</div>
</details>

<br/>

## 1. <span id = "intro"> 프로젝트 소개 </span>
(배포 URI)

- ### 🌱 대표 ID 및 Password
  - `ID` : prugioh@likelion.org
  - `PW` : vnfmwl5!! (푸르지5!!)
  
![Final ScreenImage](https://user-images.githubusercontent.com/112460306/210586178-f56ed39e-c6ae-4cc2-b0b6-4a6ea412afcc.png)


### 1.1 개요
- 🌏 `버드나다` 는 환경보호에 관심이 많으며 제로웨이스트를 직접 실천하고 싶은 사람들이 모인 온라인 플랫폼입니다.  
- 🙌 직접 캠페인을 만들어 홍보하거나 참여하여 다른 사람들과 친환경 정보를 공유할 수 있습니다.  
- 🌳 사용자들에게 자신이 실천했던 환경 운동을 공유하거나 직접 만든 천연 키트를 판매할 수 있는 서비스를 제공합니다.  
- 🌻 다른 사람들과의 채팅을 통해 상품 거래 및 캠페인 참여 의향 여부를 소통할 수 있습니다.  


### 1.2 개발 환경

|구분|설명|
|:------:|---|
|FrontEnd|<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-E33332?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">|
|BackEnd|제공된 API 사용|
|협업 도구|<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Trello-3776AB?style=for-the-badge&logo=Trello&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"> |

### 1.3 Version
```
react: ^18.2.0
react-router-dom: ^6.4.5
styled-components: ^5.3.6
styled-reset: ^4.4.4
eslint-config-naver: ^2.1.0
eslint-config-prettier: ^8.5.0
prettier: 2.8.1
```
### 1.4 Link
| 구분 | 설명 |
|:------:|---|
| 🔗 [GitHub](https://github.com/yesllyes/yesllyes) | 본 프로젝트 깃허브 링크입니다.  |
| 🔗 [Trello](https://trello.com/b/KqnPxQjc/yes11yes) | 프로젝트 진행 상황과 개발 중 발생한 이슈를 공유하고 해결할 수 있는 칸반 보드를 활용했습니다.  |
| 🔗 [Figma](https://www.figma.com/file/nBS6UPDFpRCPL3PghkKA19/11%EC%A1%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%99%94%EC%9D%B4%ED%8C%85-%EC%96%8D?node-id=0%3A1) | 프로젝트 UI 개발에 활용한 피그마 파일입니다. |

### 1.5 개발 일정 (2022.12.09 ~ 2023.01.04)
- 12.09 ~ 12.16 : 프로젝트 기본 세팅 및 공통 컴포넌트, UI 제작
- 12.17 ~ 12.25 : UI 제작 마무리 및 Context API 도입
- 12.26 ~ 01.01 : 주요 기능 개발
- 01.02 ~ 01.04 : 버그 픽스 및 1차 마무리
<br/>
<br/>

## 2. <span id = "members">팀원 소개</span>

버드나다 팀은 프론트엔드 개발자 4명으로 구성되었습니다.  
팀원 이름은 기여순이 아닌 가나다 순으로 정렬하였습니다.

| FE 박선영| FE 윤슬기| FE 이정호| FE 한상혁| 
|:--:|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/62597615/210385080-3542da71-595d-47db-b4dc-b746c2b7b815.png" height=180 width=180> | <img src="https://user-images.githubusercontent.com/62597615/210387976-caeac61e-367d-4f65-9d4a-13215b7c2dba.png" height=180 width=180>  | <img src="https://user-images.githubusercontent.com/62597615/210386762-cc51917d-868c-4cf8-8ca9-f144a67d9fc2.png" height=180 width=180>  | <img src="https://user-images.githubusercontent.com/62597615/210388190-3f3a880e-90ab-4b0b-81bb-9e6b9454bddb.png" height=180 width=180>|
| <center>🙋 팀원 </center><br/>🔗 [syoungp273](https://github.com/syoungp273) | 🙋 팀장<br/> 🔗 [icstuckyi](https://github.com/icstuckyi) | 🙋 팀원<br/> 🔗 [LeeJeongHooo](https://github.com/LeeJeongHooo) | 🙋 팀원<br/>🔗 [Han-Sang](https://github.com/Han-Sang) |
| 디자인 및 피그마 제작 | 프로젝트 기획 및 진행, 문서화 | 기술 문제 해결과 최적화 집중 | 유효성 검사 및 UI 집중 개선 |


### 2.1 역할 분담
![image](https://user-images.githubusercontent.com/85055608/210366562-56bd00ae-cc02-494e-870e-cc144cc89738.png)
<br/>
<br/>

## 3. <span id = "requirement">요구사항</span>

- **🙂 Account**
  - 유효성 평가
  - 로그인/로그아웃 
  - 회원가입 
  - 프로필 정보 설정

- **✍️ Post** 
  - 모달창 
  - 등록/수정/삭제
  - 이미지 업로드
  - 게시글 목록
  
- **📢 Commemt**
  - 등록/삭제/수정
  - 신고하기

- **🔎 Search** 
  - 유저 검색

- **🌹 Follow**
  - 팔로우/언팔로우
  - 팔로우/팔로잉 리스트

- **♥️ Like**
  - 게시물 좋아요 및 취소

- **🌴 Campaign**
  - 캠페인 등록 
  - 참여 인원
  - 현재 참여 상태 여부 
  - URL 해당 링크 연결
<br/>
<br/>

## 4.<span id = "ui">기능 UI</span>
- ### Splash, 회원가입, 로그인

|Splash|회원가입|프로필 설정|로그인| 
|:--:|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/112460306/210581438-458252a1-f68a-4258-b728-0cc58282b6b9.gif" height=462 width=220> | <img src="https://user-images.githubusercontent.com/112460306/210581469-6ad66b6b-a69f-4b02-a0be-d876a6dd5530.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210581448-dd066ad0-1d90-4969-99cf-75b32c3884f8.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210581510-1ddc59dc-1b12-4aba-86c2-6a57265a58a8.gif" height=462 width=220>|

- ### 게시글

|게시글 등록|게시글 수정|게시글 삭제|
|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/112460306/210581849-3416db63-d9fe-4969-abdc-93e100cb8e1c.gif" height=462 width=220> | <img src="https://user-images.githubusercontent.com/112460306/210581838-ff842d32-d6f4-4f01-99a7-f33a8fa01857.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210581921-63a73630-1ca8-4b19-8633-d5847bee0317.gif" height=462 width=220>  |

- ### 캠페인

|캠페인 등록|캠페인 수정|캠페인 삭제|
|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/112460306/210582657-2503ac74-9846-405b-ab23-e4e09f98a64a.gif" height=462 width=220> | <img src="https://user-images.githubusercontent.com/112460306/210582663-8f335544-7f98-412f-a63b-3a18ac68c138.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210585205-f06568c2-5efa-4076-9d49-d41750cf7906.gif" height=462 width=220>  |

- ### 댓글

|댓글 등록|댓글 신고|댓글 삭제|
|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/112460306/210582821-818de7fa-be2e-4ded-a35d-0d7e43720769.gif" height=462 width=220> | <img src="https://user-images.githubusercontent.com/112460306/210582837-78abe03c-6db2-427a-9858-f49695f2ac15.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210582839-4f257d54-dbfd-4add-b38d-4c1196da08c8.gif" height=462 width=220>  |

- ### 프로필 수정, 다른 유저와 프로필 화면 차이

|프로필 수정|나의 프로필|다른 유저의 프로필|
|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/112460306/210582987-ea3d9eb0-6efa-401b-9af1-50b42f6d6eed.gif" height=462 width=220> | <img src="https://user-images.githubusercontent.com/112460306/210583001-4f3a6ce8-a7d9-4c6c-b14a-0029b72222fa.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210583008-9749636f-0dc0-4483-8926-e3ff5c042622.gif" height=462 width=220>  |

- ### 채팅, NotFound 페이지, 로그아웃

|채팅|NotFound 페이지|로그아웃|
|:--:|:--:|:--:|
|<img src= "https://user-images.githubusercontent.com/112460306/210583156-527a18f4-4e66-47a4-9e1c-f0ff9b64b427.gif" height=462 width=220> | <img src="https://user-images.githubusercontent.com/112460306/210583128-7487da53-7e60-4120-8c2f-4bb48478510c.gif" height=462 width=220>  | <img src="https://user-images.githubusercontent.com/112460306/210583189-b35f889a-a546-424d-a9b6-146c102c607c.gif" height=462 width=220>  |

<br/>
<br/>

## 5.<span id = "convention"> 컨벤션</span>

- 가장 대표적인 **네이버 코딩 컨벤션** 사용

1. 코드의 가독성을 높이기 위해
2. 코드의 유지보수성을 높이기 위해
3. 팀원들 간 코드 컨벤션의 일관성을 유지하기 위해

```json
// package.json
"devDependencies": {
  "eslint-config-naver": "^2.1.0",
  "eslint-config-prettier": "^8.5.0",
  "prettier": "2.8.1"
}
```

- 폴더 이름
  - `assets`, `components` 등의 상위 폴더는 소문자로 작성
  - `jsx` 파일이 들어간 하위 폴더는 대문자로 작성

### 5.2 Git & GitHub 컨벤션

- 효율적인 커밋 메시지를 관리하기 위해서 `.gitmessage.txt` 템플릿을 제작
- vscode 터미널창에서 `git commit` 입력 시 템플릿을 확인하며 커밋 메시지를 작성할 수 있도록 설정

```bash
git config commit.template .gitmessage.txt
git config core.editor "code --wait"
```

<br/>
<br/>

## 6. <span id = "code">주요 코드</code>

### 6.1 Context API
- `Context API`를 사용하여 props drilling을 해결할 수 있고, 전역으로 객체를 사용할 수 있음  
- 파일을 3개로 구분해서 `dispatch`, `reducer`의 가독성을 높여주도록 구현  

```bash
# context 폴더 구조
├── ActionTypes.js
├── Auth.jsx
└── AuthReducer.js
```
<br>

**1. ActionTypes.js**
- `ActionType` 상수를 만들어서 `dispatch`, `reducer`의 `ActionType` 유지보수성을 증가시킴

```js
const ActionTypes = {
  LOGIN: 'login',
  LOGOUT: 'logout',
};
```

<br>

**2. Auth.jsx**
- 새로고침이 발생한 경우 전역으로 관리되고 있는 객체가 없어지기 때문에 초기 유저정보를 `localStorage`에서 가져오게 설정하였으며, `useReducer` 훅과 함께 사용하여 전역에서 객체를 쉽게 관리할 수 있도록 함

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

**3. AuthReducer.js**
- 실제 외부에서 `dispatch`함수를 통해 호출되어 객체를 변화시키는 역할을 담당하며, 
LOGIN, LOGOUT이 되었을 경우 각 상황에서 객체의 데이터를 설정

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
<br>

- **useAuthContext**  

  +  `Context API`를 편리하게 사용하기 위한 `useAuthContext` 커스텀 훅 생성

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

- **LoginPage.jsx**  

  + `useAuthContext` 훅을 활용하여 login시 API통신 후 login콜백함수를 통하여 내부적으로 `Dispatch`함수를 호출하여 전역에서 관리하고 있는 유저 정보를 편리하게 업데이트

```jsx
// AuthContext, useAuthContext 훅 사용예시
const { login } = useAuthContext();
...
localStorage.setItem('data', JSON.stringify(localData));
login(user.token, user.accountname, user.image);
```
<br/>
<br/>

## 7. <span id = "truble">트러블 슈팅</span> 
[GitHub wiki](https://github.com/yesllyes/yesllyes/wiki)
<br/>
<br/>

## 8. <span id = "plan">추후 계획</span>
- 
<br/>
<br/>

## 9. <span id = "tree">폴더 트리</span>

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
