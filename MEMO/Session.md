# Session

> ~~삭선은 이렇게 쓰느니라~~ 맹자

##How to ASK
- 질문하기 위해 글로 적는게 문제를 분해하는 방법이다.
- 좋은 질문을 만들어내는게 능력.
- 다른 사람이 하는 검색의 방법도 알아야 한다.
- 무엇을 검색 및 시도했는지 히스토리를 트래킹해서 전달한다.
####Step1 키워드를 정확히하는게 핵심.
####Step2 질문이 배척받아도 결국 하는 사람이 이긴다.
- 어떻게 설명할지 모른다. 무엇을 모르는지 모른다.
- 질문을 읽는 사람이 읽고 싶은 글을 써야한다 .How to Ask. 질문의 퀄리티를 올려야 한다.
- 그럼에도 미움받을 용기
####Step4 질문의 첫번쨰 조건은 좋은 제목
- 바쁜 동료에게 하는 질문처럼 정리
####Step 5 당신이 처해있는 정보를 다른 사람이 재연할 수있도록 정보를 제공 (클라우드에 코드를 올려서 질문을 할수도 있다)
- - -
##구글검색
* ```- * ? site:```
* ```ES5 -express``` 처럼 빼는 테크닉도 있다.
- - -

##Recursion

#### this bind
* 화살표함수, bind -> call, apply -> 나머지 우선순위로 this가 바인딩 된다.
* 즉 순위가 높은건 유저가 지정한다고 확신할 수 있는 케이스다.
* 잡아먹는다는 것이고 낮은건 엔진이 스스로 지정하는 경우다.

#### SCOPE
* 함수단위로 scope가 생겨나고 Arrow를 하면 현재 함수만을 보게 된다. === 딴데 가서 호출되어도 this를 새로 할당 받지 않는다. ===  이미 바인드 되었다.
```
var obj {
  c: function() {
    console.log(this)
}
```
* 객체가 어떻게 되든 c가 함수스코프가 되고 *this* 는 *obj* 가 된다. 그래서 메소드호출은 언제나 객체가 this가 된다. 대신 객체 안이라도 => 익명함수가 되면 스코프가 생겨나지 않고 생겨나지 않으면 기본은 window.
* 즉 다르게 말하면 애로우를 작성하면 함수가 작성된 시점의 스코프로 고정된다. 안바뀐다. 애로우로 안하면 실행되는 시점에서 함수스코프다 >> 객체는 스코프를 만들지 않는다. 그걸 생각해라.


##chatterBOX
* SQL 공격에 사용될 수 있는 패턴 ```<img src="image.gif" onerror="prompt('으아')">```
* innerHTML을 사용하지 않도록 한다. ContentsText가 브라우저에서 성능도 좋으니까 그거 쓰자.


##Data Structure
* 알고리즘을 생각할때 첫 생각은 자료구조로 시작한다.
* 미로찾기에 stack을 쓴다. 막히면 pop 하다보면 성공한 방법만 나온다.
* 자바스크립트 array는 linkedList로 만들어짐
* 결국 자료구조는 알고리즘을 구성하는 방법이자 데이터의 형태이기도 하다.
* Graph를 사용하면 엣지의 가중치에 따른 요금차이 구현이 가능.

##Instance 가 가능한 객체( new가 되는것)만 construct 를 가진다. 예를 들어  math는 construct가 없다. 계산만을 위한거다.
* 부모의 컨스트럭터를 실행하는게 super 키워드 → 명시적 실행. ES6 부터는 없어도 실행된다. 바벨 옵션에 따라 없어도 알아서 수행된다. create-react-app에는 옵션이 적용되어 있다.

##프로토타입 표현
__proto__ 은 [[prototype]]와 같은거. 표기방식이 다른거다. 읽는건 프로토타입체인,프로토링크
super 키워드로 부모에 접근
git rm -r --cached .


 git stash 명령어를 실행하면 현재의 변경사항이 저장되고 워킹디렉토리는 HEAD 상태로 돌아가게 됩니다.

git branch -b toy1
git checkout master
git pull --rebase upstream master 		// 업데이트된걸 다시 덮어쓰기

git reset --soft 스테이징된걸 끄집어 내린다.	헤드^를 붙이면 커밋롤백 + 스테이징상태 => 잘못 커밋했을때 다시 하기좋겠다.  + 스테이징된거 끌어 내릴떄.
git reset --mixed [default] 하면 스테이징에서 끌어내린다. 헤드를 붙이면 커밋롤백 + 언스테이지 => 커밋 조차도 잘못 했을때 스테이징에서 끌어내릴떄.
git reset --hard 하면 스테이지 끌어내리고 파일도 바구고 다끝

인스턴스 메서드
프로토타입 메서드

* asnc 가 AJAX 의 핵심단어. DOM과는 독립적으로 HttpRequest 객체로 데이터를 처리한다. 페이지속도가 빨라지고 로드를 처리하는게 부드러워진다.
* API . applicaitoin Programing Interface (메뉴판)
* XMLHttpRequest가 자바스크립트가 HTML요청을 처리하기 위한 객체이고 jQuery로도 다룰 수도d있다.
* Fatch같은 좀 더 최신의 API
URI는 Uniform Resource Identifier


<< CSS >>
부모의 CSS 속성이 없으면 자식에 %같은거 넣어도 동작안한다.

<채터>>
- Server Client 구조를 이해하는게 스프린트의 목표. 이제부터 서버와의 통신의 시작 그림을 이해하자.

<<리액트 자습>>
React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트합니다.

개념적으로 컴포넌트는 JavaScript 함수와 유사합니다. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환합니다.

<엘리먼트 <컴포넌트>> 감싼다음 렌더로 실행
ReactDom 이 볼때는 엘리먼트가 정의한 prop을 컴포넌트에 적용하는 모양으로 실행이된다.
=> DOM.render (  Component ) 이곳의  C- 는 마치 console.log(그리는 논리만 가진다.(prop)도 지정해준다.
* 컴포넌트는 순수함수의 정체성을 가지고 절대로 prop을 수정하지 말아야 한다.
setState() 를 하면 다시 렌더시키는 트리거가 된다. 값을 알아내기 위해


JSX ->> comp 내부에서 규칙
* if 사용금지
* {} 안에서 자바스크립트 로직
* 클래스이름은 className
* 하나의 엘리먼트블락으로 완료 <div><하하><하하<div>
*

>>  e.preventDefault(); 	<<- 실행방지, 실행되면 원래는 리프레시 된다. 순자바에선 return false;

>> this.handleClick = this.handleClick.bind(this);
// 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.

unreadMessages.length > 0 && <h2> {messages~} </he> 				//이런 테크닉으로 if 대체가능


  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
// (1) 상위 컴포넌트에서 선택적 렌더 (2) 하위 컴포넌트가 return 전에 검사해서 null을 보내기.

// 키는 컴포넌트 부를때 써주고, value는 구현할때 써주자.

“제어 컴포넌트 (controlled components)“ => 자바스크립트로 직접 폼의 value 만지작;


//Hint: props에 (state를 변경하는) event handler를 넘겨줘서 해결합니다! item1


재조정(Reconciliation) => 렌더 여부 결정



<< Node.js>>
V8 엔진을 서버에서도 사용할 수 있게 해놓은 자바스크립트 '러닝환경'.. 프레임워크 X

path Module -> 파일이름을 다루는 모듈. 입력된 경로를 가지고 다양한 포맷으로 다루게 해준다.

node --inspect-brk

or IDE의 디버그도 활용할 수 있다.
>> 읽기의 흐름이 어디로 가는지 알고 console을 찍어야 한다. 이상하면 의심해라.. 지금 컨텍스트와 종결지점을


// "데이터가 제대로 stringfy됐는지 검증해야함..;;"

exports == module.exports
require 는 path를 읽어서 return module.exports 를 한다.

module.exports = greet(){}  =유사=  module.exports.greet = function () {};
IIFE 이지만 한번의 모듈만 실행된다. require는 캐쉬된다.


{"username":"User","roomname":"cs00"}

직렬화한다 ==> stringify  통신의 기본 단위(chunk)로 쓰기위해!

pushd /겨로/'(현재 경로 기억 예 : pushd .) => pushd 다시 복귀

비동기작업들을

Promise 는 Pending 을 반환한다. catch를 붙여주면 앞에서 구현되지 않은 rej에 붙는다.
promise 내부는 콜스택에 올라왔을때 처리


jest --watchAll --verbose

클로져를 배열안에 집어넣고 타겟 (숫자)가 들어오면 실행시킨다. 간단한 아이디어인데 너무 복잡하게 풀려고 했어.. 문제를 잘 못 읽은 문제다. 제대로 파악해야하는데 혼자서 이건 어렵게 해야한다고 생각한거다.

오버패치 문제 => query가 해결.

PT파일 겁나 작으니까 크게 그려줘야함.


.then ( (r)

async 함수의 스코프 내에서만 await를 쓸 수 있다. 새로 then.( async(res) =>{ });
async await는 try catch로 에러를 잡는다.
사용하는 함수에 따라 fetchd의 400이나 500을 reject로 볼 수도 있고 아닐수도 있다.

await === promise().then 과 비슷하다.

pendding (비동 처리가 시작도 안했다) 그걸 동기적으로 하는곳에서 찍어보면 그렇게 나온다.안이 실행되면 fullfiled (res, rej)가 된다.

async의 리턴은 펜딩 프로미스 이걸로 또 이어서 사용가능
await의 리턴은 리졸브 값.

mulitipart로 submit을 할때는 그걸 스트링화하지도 않아야하고 contents-type도 제대로 지정되어야한다.

<< ES_LINT>>
rules: {
  "no-console": 1
}

나를 곤경에 빠트리게 하는게 있다면 그 모듈전체를 해결할 필요는 없다. 지금 있는 파트만큼은 처리하고 넘어가자.
RESTful 은 자원기반 서비스에 대한 베스트프랙티스 가이드. 이런 문서를 자주보면 REST풀하게 가는거다. 공통의 약속으로 향하는 것. 깃헙 API v3 참고


finally는 try 이후에 바로 실행되는 것이 보장된다. try의 부산물을 정리하는 용도;

new F ! => F를 컨스트럭터로 가지는. 생성자만 실행된 생빈 객체 인스턴스 생성.
object create를 하면 (arg)의 객체를 __proto__ 로 가르치는 (생성자만 실행된 객체 반환)

##아이디어
* 모두가 창업을 할 필요는 없지만 창업가 정신은 필요하다. (사람이 살아있는것처럼 느껴지고 만나는게 즐겁다)
* 창업을 나중에 하고 싶다면 기술적으로 뛰어나야한다.
* 창업에 관심이 없다면 사업과 경영과 리더십에 관심을 가져야한다.
* 90%가 스타트업에 취직을 한다. 그런 회사들은 모두 기업가 정신을 품은 회사다. 일반적인 대기업과 다르다. 개발자들이 CEO의 생각에 대해 자신도 관점을 가져야한다. 작은 조직에 있으면 의사결정에 참여하게 된다.
* 어느 쪽을 가든 사이드프로젝트를 해야한다.
* 패인킬러 vs 비타
* 문제를 상상하면 안된다. ~면 좋을것 같아. 술자리에서 나오는 사업
* 피드백을 받기도 어렵고 상황을 설명하기도 어렵다. 스티븐 잡스는 비타민 그렇다고 내가 비타민을 강요하지는 않을것. 하지만 대개 비타민은 성공하기 힘들다. 비타민같지만 패인킬러인것도 있다.
* 2주만에 만들고 2주동안 파인하게 만드는것도 가능하다.
* 사용자가 있는 포트폴리오는 의미있다. 돈 받으면 더 가치있고
* 데모사이트 만들어놓고 사전예약처럼 이벤트 받아서 처리한다. 관심을 확인하는게 창업의 첫순서. 요즘은 이렇게 사업이 변했다.
* 수익구조가 심플해야한다. 간단하게 설명할 수있어야 좋은 아이디어. 위대한 아이디어는 설명해도 모른다. 잘되는 사람은 자신을 매니페스트하는데 두려움이 없다. 계속 노출시킨다. 잘되는 사업도 그렇다. 노출시키고 빠르게 피드백을 받아서 개선시킨다. 빅피쳐보다는 고객의 관심이 답이다.
* 어찌되든 사이드프로젝트는 하고 공개해야한다. 그리고 남들이 쓰게해야한다. 개발주기는 짧게 해야한다.
* 제너랄한걸 노려도 되고 니치한걸 노려도 되고 돈을 안벌어도 인수되는 방법도 있다.
