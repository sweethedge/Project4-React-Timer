# First meet with React

https://sweethedge.github.io/Project4-React-Timer/

@ still needs to be worked to be seen more attractive, modernized.
need some CSS knowledge to achieve that.


# React Timer Project

리액트 프로젝트 생성 연습

## 리액트 프로젝트 생성 순서

    1. npx create-react-app app name
    2. cd app name
    3. npm start
    4. public-index.html 정리

## 컴포넌트 생성 참고사항

    1. 컴포넌트 function제작시 app name 첫글자는 대문자로
    2. function 에는 return이 필수
    3. export default app name 필수
    4. html같아보이지만 jsx문법(ex> className='', <></> 등)
    5. 생성한 컴포넌트는 <app name />으로 App.js에 추가
    6. 추가한 컴포넌트는 import 필수
    7. 컴포넌트를 추가할 때 App.js의 돔 안에 추가해야함. 돔 밖에 추가할 경우 <></>로 감싸주기
    8. 새로운 css파일 생성시 import

## 깃 허브 배포

    1. 프로젝트의 로컬 디렉토리로 이동
    2. 깃허브에 리포지토리 생성
    3. git remote add origin 새로생성한레포지토리주소// git push -u origin master
    4. gh-pages 설치 (npm install gh-pages --save-dev)
    5. package.json파일 수정
    5-1. Script에 "predeploy": "npm run build", "deploy": "gh-pages -d build" 추가
    5-2. Script 밑에 "homepage": ＂깃허브주소", 추가
    6. npm run deploy
