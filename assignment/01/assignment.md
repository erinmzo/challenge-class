## 리액트란?

### 01. 소개

UI 제작을 도와주는 자바스크립트 라이브러리

### 02. 등장배경

1. **유지보수의 어려움** : 웹 어플리케이션이 커져서 코드간의 상호작용이 복잡해지고 이를 유지보수하기 어려워 짐.
2. **DOM 조작의 비효율성**: DOM을 조작하는 것 자체가 성능저하를 이르킨다.
3. **재사용성 부족:** 재사용성이 낮고, 동일한 기능을 다른 부분에 사용하기 위해 반복 작성해야하는 경우가 있음.

## MPA → SPA

multi page application → sing page application

MPA: http 통신을 할때 html 문서 자체가 왔다 갔다 함.

SPA: 한번의 페이지 로드로 모든 콘텐츠를 동적으로 렌더링하는 방식. 상호작용에 필요한 부분만 다시 렌더링 됨.

## SSR → CSR

html의 내용을 누가 만드느냐 의 차이

SSR: html 완성하는 것을 서버 사이드에서 해줌

CSR: html 완성하는 것을 클라이언트 사이드에서 해줌

**CSR의 단점**: SEO(Search Engine Optimization)의 단점이 치명적임

## React 프로젝트 만들기

### CRA(Create React App)

```bash
npx create-react-app [프로젝트명]
```

### VITE

```bash
npm create vite@latest
```

(\*Gatsby → 진입장벽이 있음 , Next.js →프레임워크)

## React 주요 개념

1. **가상 DOM**
   - **실제 DOM을 흉내낸 가상 DOM**. 실제 DOM보다 빠르게 UI 변경사항을 관리해 줌. 가상돔이 최소 2개가 필요해서 변경된 부분만 실제 DOM에 반영해줘서, 페이지 전체를 새로 불러오는 것 보다 훨씬 효율적임.
2. **JSX**
   - javascript 를 확장한 문법. html 태그와 완전히 다른 것임.
     createElement 를 호출하는 간편한 방법.
     자바스크립트와 결합 할 수 있음 ({} 중괄호를 사용) . 컴포넌트 구조를 명확하게 알 수 있다.
   - 주의 사항 ! 브라우저는 jsx를 읽을 수 없고, javascript 만 이해한다. 트랜스파일러를 사용하여 jsx를 javascript 로 변환하여야 한다.
3. **Component 와 Element**

   component : 쉽게 말해 함수

   ```jsx
   function Greeting() {
     return <div>Hello World</div>;
   }
   ```

   element : 함수를 jsx 로 표현한 것

   ```jsx
   <Component />
   ```

4. **State**
   - 컴포넌트 내부의 데이터를 state로 관리한다.
     state가 바뀌면 컴포넌트는 리렌더링을 한다.
     리렌더링 → 함수가 재실행 됨. 상태값은 어딘가에서 계속 기억되고 있다.
5. **Props**
   - 부모 컴포넌트로부터 자식 컴포넌트에 전달하는 데이터
     **리렌더링의 조건**
     1. state 가 변경되면 컴포넌트는 리렌더링된다.
     2. 부모로 부터 전달 받은 props 값이 변경되면 컴포넌트는 리렌더링된다.
     3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트는 리렌더링된다. → 개선 방법 : `React.memo(자식 컴포넌트)`
     4. props는 부모가 주는 그대로 사용해야함. 읽기전용으로 사용해야한다.
6. 생애주기

   - 대상이 만들어지고 없어질 때까지의 주기.
     1. Mount
     2. Update
     3. Unmount → 페이지 변경 같은 경우 / 클린업(?)

   **생애 주기마다 무언가 하고싶기 때문에 중요함.**
