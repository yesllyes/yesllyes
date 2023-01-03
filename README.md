# 버드나다 Budnada
 <strong>'버드나다'는 새봄에 새순(Bud)이 자라 울창한 나무가 되는 것처럼 작은 실천을 모아 공유하고자 하는 환경운동 SNS입니다. </strong>

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
<br>

## 1. <span id = "intro"> 프로젝트 소개 </span>
(배포 URl)
 
- ### 🌱 대표 ID 및 Password
  - ID : prugioh@likelion.org
  - PW : vnfmwl5!! (푸르지5!!)

(이미지 및 QR코드 생성)

- ### 🖥️개발 일정 : 2022.12.01 ~ 2023.01.06


### 1-1. 개요
```
🌏 `버드나다` 는 환경보호에 관심이 많으며 제로웨이스트를 직접 실천하고 싶은 사람들이 모인 온라인 플랫폼입니다. 

🙌 직접 캠페인을 만들어 홍보하거나 참여하여 다른 사람들과 친환경 정보를 공유할 수 있습니다.

🌳 사용자들에게 자신이 실천했던 환경 운동을 공유하거나 직접 만든 천연 키트를 판매할 수 있는 서비스를 제공합니다.

🌻 다른 사람들과의 채팅을 통해 상품 거래 및 캠페인 참여 의향 여부를 소통할 수 있습니다.
```

### 1-2. 개발 환경

FrontEnd: React, React-router, Styled-Components
<br/>
BackEnd: 제공된 API 사용
<br/>
Version:
```
react: `^18.2.0`
react-router-dom: `^6.4.5`
styled-components: `^5.3.6`
styled-reset: `^4.4.4`
prettier: `2.8.1`
```
<br/>
<div align=left>
 <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> 
 <img src="https://img.shields.io/badge/styled-components-CC6699?style=for-the-badge&logo=styled-components&logoColor=white">
 <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
 <img src="https://img.shields.io/badge/ESLint-E33332?style=for-the-badge&logo=ESLint&logoColor=white">
</div>
</br>
<div align=left>
 <img src="https://img.shields.io/badge/Trello-3776AB?style=for-the-badge&logo=Trello&logoColor=white">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">
<div/>
</br>

 [버드나다 GitHub](https://github.com/yesllyes/yesllyes)
 <br/>
 [버드나다 Trello](https://trello.com/b/KqnPxQjc/yes11yes) 
 <br/>
 [버드나다 Figma](https://www.figma.com/file/nBS6UPDFpRCPL3PghkKA19/11%EC%A1%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%99%94%EC%9D%B4%ED%8C%85-%EC%96%8D?node-id=0%3A1) 

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

## 6. <span id = "code">주요코드</code>

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
