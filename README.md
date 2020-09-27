# MukGo Mobile with React Native
MukGo Mobile with React Native

## 1. 사전 설치 사항
  ### 1.1. Node.js
   [https://nodejs.org/en/](https://nodejs.org/en/)

  ### 1.2. Android Studio / XCode for Simulator
   [https://developer.android.com/studio](https://developer.android.com/studio)

  ### 1.3. Visual Studio Code
   [https://code.visualstudio.com/](https://code.visualstudio.com/)

  ### 1.4. Expo
    npm install expo-cli --global
    npm install -g expo-cli

  ### 1.5. Git
   [https://git-scm.com/](https://git-scm.com/)


## 2. 프로젝트 folk & clone
  ### 2.1. git clone
    git clone [repository URL]

  ### 2.2. intall package
    npm install

  ### 2.3. copy config.js
    cp config.sample.js config.js
    &
    input Google API_KEY and CHANNEL_ID

  ### 2.4. start app
    npm start / expo start

## 3. Contribution
  ### 3.1. upstream branch 설정
    git remote - v 
    git remote add upstream https://github.com/MukGo/mukgo-mobile.git
    
  ### 3.2. upstream 브랜치 ( 원본 remote branch ) 를 folk 해온 브랜치에 동기화
    git fetch upstream
    git checkout master
    git merge upstream/master
    git push origin master

  ### 3.3. 신규 브랜치에 작업 후 Pull Request 만들기
    소스 수정 작업
    git status
    git checkout -b '신규브랜치명' 혹은 git branch '신규브랜치명 && git checkout '신규브랜치명'
    
    git branch
    git add . 혹은 git add 파일명
    git commit -m '커밋 메시지'
    git push
    git push -set-upstream origin 브랜치명


[https://frontdev.tistory.com/entry/GIT-Conflict%EC%B6%A9%EB%8F%8C-%EB%82%AC%EC%9D%84-%EB%95%8C-%EA%B0%95%EC%A0%9C%EB%A1%9C-Pull-%ED%95%98%EA%B8%B0](https://frontdev.tistory.com/entry/GIT-Conflict%EC%B6%A9%EB%8F%8C-%EB%82%AC%EC%9D%84-%EB%95%8C-%EA%B0%95%EC%A0%9C%EB%A1%9C-Pull-%ED%95%98%EA%B8%B0) (edited)

  ### 3.4. 소스 충돌 시 로컬 프로젝트를 덮어씌우기
    git fetch --all
    git reset --hard origin/master
    git pull origin master
    
[https://frontdev.tistory.com/entry/GIT-Conflict충돌-났을-때-강제로-Pull-하기](https://frontdev.tistory.com/entry/GIT-Conflict%EC%B6%A9%EB%8F%8C-%EB%82%AC%EC%9D%84-%EB%95%8C-%EA%B0%95%EC%A0%9C%EB%A1%9C-Pull-%ED%95%98%EA%B8%B0)
