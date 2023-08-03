<details>
<summary>Step-2.-Week-1</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**
```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```
</br>

# 1주차 과제

## 과제1

### 페이지별 구성

| 번호 | 페이지 이름 | 핵심기능  | 기능 상세 설명 | 인터페이스 요구사항 |
| --- | --- | --- | --- | --- |
| 1 | 로그인 | 로그인 요청 및 사용자 로그인 정보 저장 | 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다. | 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다. |
| 1-1 | 로그아웃 | 로그아웃 및 서비스 종료 | 버튼 클릭 시 로그인 이전 상태로 변경 | 로그아웃 버튼 클릭 |
| 1-2 | 회원가입 | 서비스 이용을 위한 회원 가입 | 카카오 계정 서비스 약관 → 번호 인증 → 이메일, 비밀번호 유효성 검사 | 이메일, 비밀번호, 비밀번호 확인 후 회원가입 버튼 클릭 |
| 2 | 메인 | 전체적인 기능을 사용자의 화면 안에 모두 보여줌 | 전체 상품 조회 및 화면 출력 | 전체 상품 출력 |
| 3 | 상품 검색 결과 | 원하는 상품을 검색하여 결과에 만족하는 상품들을 모두 출력 | 검색창에 키워드 입력 후 해당하는 상품을 가져와서 출력 | 입력칸에 원하는 키워드 입력 |
| 4 | 개별 상품 상세 | 특정 상품 선택 시, 해당 상품에 대한 정보 출력 | 전체 상품 혹은 검색하여 상품을 검색 → 해당 상품에 대한 상세 정보와 옵션을 가져와 출력 | 상품 목록에서 특정 상품 클릭 |
| 5 | 주문 목록 | 상품 옵션 선택 | 상품 옵션 선택 → 이미 선택한 옵션은 선택 불가 | 옵션 리스트에서 옵션 클릭 |
| 5-1 | 수량 결정 | 선택한 옵션의 주문 수량 결정 | 선택한 옵션의 매수 증감(최소 1) 및 삭제 | 옵션별 +- 버튼으로 수량 변경 |
| 6 | 장바구니 | 장바구니에 담긴 상품을 확인 | 장바구니에 다긴 상품의 내용(상품명, 수량, 할인여부) 확인 | 개별 상품 페이지에서 장바구니 버튼을 클릭하여 담기 / 페이지 상단에서 장바구니 버튼을 클릭하여 이동 |
| 7 | 주문하기 | 결제 전 배송지 및 결제 수단 확인 | 배송지 정보, 결제수단, 현금영수증 여부 등 동의 및 확인 후 결제 진행 가능 | 주문하기 버튼 클릭 |
| 8 | 결제 | 상품을 주문한 것으로 처리 | 선택한 결제 수단으로 결제 진행 | 결제하기 버튼 클릭 |
| 9 | 마이페이지 | 사용자의 주문 정보 및 진행중인 주문내역 확인 | 사용자의 등급, 현재 진행중인 주문이나 찜한 상품 및 스토어 취소/교환/반품 조회 등 리스트 출력 | 프로필 클릭 후 MY쇼핑 클릭 |

### 로그인
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/71b687c5-8dc4-42ab-a1a4-ebe118864a4e" width="300" height="300"/>

---

### 메인

<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/35d5c414-5431-4551-8daf-333b19a4cb88" width="400" height="300"/>

---

### 상품 검색 결과
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/349ff61b-ebbd-49b8-88e2-34860f3f6d02" width="400" height="300"/>

---

### 개별 상품 상세
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/6d41e195-94af-4558-86bb-2d65c827ef1b" width="400" height="300"/>

---

### 주문 목록
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/9616662d-8c17-4978-927e-9f4970148b24" width="200" height="400"/>

---

### 장바구니
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/6670676a-a2c6-4c50-9f25-9b7e8f79fe7e" width="400" height="300"/>


---

### 주문하기

<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/dd1f305a-a451-42e6-9c71-ff1f550062ca" width="400" height="300"/>

---

### 결제
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/5575ea51-08cc-463c-9a53-9df21b68b97a" width="300" height="300"/>

---

### 마이페이지
<img src="https://github.com/Jiho-Park-0/AI_Chatbot_Website/assets/79912184/7534373e-933a-40d8-b74f-2dbf81b39057" width="300" height="300"/>

---

### 디렉토리 구조

```python
└─ public : 정적 파일들이 포함되는 폴더
└─ src
 ├─ components : 재사용 가능한 컴포넌트들이 위치하는 폴더
 ├─ assets : 이미지 혹은 폰트와 같은 파일들이 저장되는 폴더
 ├─ hooks (= hoc) : 커스텀 훅이 위치하는 폴더
 ├─ pages : 라우팅을 적용할 페이지 컴포넌트들이 위치하는 폴더
 ├─ styles : css 파일들이 포함되는 폴더
 ├─ services (= api) api관련 로직의 모듈 파일, auth와 같이 인증과 관련된 파일
 ├─ utils 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더
 ├─ App.js
 └─ index.js
```


## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다. 
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다. 
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_1주차 과제

</br>

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제
</br>

## **과제명**
```
1. 코드 디자인 패턴과 상태 관리
```
</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용** 
```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발** 

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용** 

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.

2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.

3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_2주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제
</br>

## **과제명**
```
1. 비동기 통신 활용과 레이아웃
```
</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**
```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요. 
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_3주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**
```
상세 페이지 개발과 라이브러리
```
</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**
```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요. 
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_4주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제
</br>

## **과제명**
```
주문 결제 개발 
```
</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**
```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다. 
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_5주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>


---


<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제
</br>

## **과제명**
```
프로젝트 마무리
```
</br>

## **과제 설명**

✅**과제 1. 배포**
```
- 카카오 배포환경을 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3.  README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.

2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.

3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_6주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

