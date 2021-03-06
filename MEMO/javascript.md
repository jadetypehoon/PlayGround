# 자바스크립트 LESSON 1

> "기록해서 나 주자"
> 더 좋은 Cheat sheet 이 아니라 내 머리와 글이다."
: [My 블로그](https://medium.com/@jadetypehoon)

## 1장 BASIC
* 함수 == 타입 == 변수 == 1급함수
* 스트링은 str[1] = 'S' (X) 이런 접근은 안됨. read only.
* 콜백함수: 인자로 함수를 받아서 함수를 실행하는 구조에서 받는 함수를 뜻한다.

- - -
## 2장 object
* 모든 객체는 객체다.

* delete 키워드로 삭제를 할 수 있다. ( *iterator 작업시 문제가 생길 수도 있다* )  
* 메서드와 함수의 차이 ? Method → 객체에게 동작을 수행하라고 지시.   
 Function → 객체에게 동작을 수행하라고 명령 **( )** 하지 않아도 된다. 왜냐하면 함수 자체가 함수객체이기 때문이다.
 ` foo.sum` 은  메서드 프로퍼티로서의 정보만 반환하지만 `foo.sum()`을 하면 동작을 지시한것이다.

*  Built-in Object
많이 쓰는 기능들을 미리 만들어둔 오브젝트 (= global Objects); new Boolean (123) 은 new Object (true) 와 같은 값을 반환한다.
* Native ObjectHost Object (사용자 정의 객체)
* 함수 호출시. Parameter + this + Arguments를 전달받는다. 이것들이 실환환경에서 언제든지 call할 수 있는 상태로 있다. Parameter 들은 이때 해당 밸류를 지시하는 레퍼런스를 들고 있는 것이지 똑같은 변수는 아닌다.

## 3장 프로토타입
* prototype Object : 이 원형에다 추가하고 싶은 함수나 프로퍼티를 정의해서 쓰면된다. 이게 쓰여지면 new 또는 Object.create 로 생성된 인스턴스들은 자신의 원형이 되는 것에 접근하게끔 chain이 이어져있다. 그래서 프로토타입에 쓰여진 메서드나 프로퍼티인데도 자신의 것처럼 쓸 수 있게 된다.
* 'prototype link'라고 주로 부르는 프로토 타입은 `__proto__`  프로퍼티다. 이건 자신이 가지지 않은 함수나 프로퍼티를 조상을 쫒아가 반환해준다. 프로토타입을 쫓아간다고 할때 그 프로토타입은 바로 `__proto__`다.
* 즉 실체는 prototype object 실체로 이어지게 해주는 화살표는 `__proto__`
 `new Person`으로 정의된 kim이 있다면 Person.prototype을 가르키고, Person.prototype은 Object.prototype을 가르키는 구조. 이 구조 순서대로 인터프렛의 방향이 이어나가는걸 알아야 한다. 나중에 for 에서 in 키워드를 쓰면 안되는 이유도 이것과 이어진다. in 은 프토로타입을 다 뒤져서 유효한 콜인지확인한다. (eslint에서 확인)
 [더 자세한 이야기는](https://medium.com/@jadetypehoon/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%98%A4%ED%95%B4%ED%92%80%EA%B8%B0-object-b4263fff078a)



## 컨택스트
* 실행중인 컨택스트를 callee라한다, 다른 컨택스트를 실행시키기 위해 필요한게 caller
* caller를 쓰면 자신을 호출한 컨텍스트에 접근할 수가 있다.

## variable
- 원시변수. string, null, Boolean, Number, String 은 PrimitiveType이고 고정된 메모리에 저장한다.
- 레퍼런스변수. Array, Object, Function은 레퍼런스를 가진다. 따라서 값이 값을 참고하는 복수의 레이블이 존재하면 값이 변하는걸 볼 수 있다.
- 원시타입은 객체형태의 메소드를 쓸때 표준 인스턴스 (ex: String)를 만들고호출하고 파괴하는 과정을 거친다. 이는 메모리에 상주하는 참조타입과 가장 큰 차이점이다. 이와같은 특징 때문에 string, number, boolean은 러닝 중 프로퍼티 작업을 할 수 없다. New 로 원시레퍼를 만들고 반환값을 활용하는 동작을 할 수는 있지만 혼란을 유발함.

## Hoisting
- 위에서 부터 순서대로 코드를 읽다보면 정의되지 않은 시점에서도 호출이 가능한 자바스크립트의 구성이 이상해 보인다. 코드 위치에 상관없이 함수선언이 유효하게 되어버리는 함수 호이스팅 효과. 단 이건 function - 함수 정의식에만 해당 var func = func.. 이런 함수 표현식에는 미해당.

## Scope chanining
- for, if는 유효범위에 무관. 오직 함수만이 유효범위의 단위>> 이 유효범위를 관리하는게 스코프. 스코프는 함수 실행 컨텍스트내에서 연결리스트의 형식으로 존재한다.

## 클로저
- 외부 함수의 변수를 참조하는 함수.
- 컨텍스트가 끝날 함수 안에서 리턴을 함수로 던져줘서 내부내용이 조회가능하게 함.
- 외부를 참조 안하면 클로저가 아니다
- 이렇게 참조를 하면 외부함수가 실행되더라도 남아있다.  (원래는 라이프사이클 종료)

return에 내부 함수(익명함수) 를 실행하도록 지정해라
function aaa {
var a;
mFuction (aaa) { console.log(a) };
return myFution();
}

## 블록함수
```
(funtion(){
	var variable = "go";
})();
```
- 이런 방식을 사용하면 변수가 전역이 아니라 수행후 파괴된다.
- 협업때 유용한 방식

## 어떤 변수가 먼저 호출되는가?
지역변수는 함수 내에서 전역변수보다 높은 우선순위

## DOM 모델
- element  타입은 DOM 노드 중에서 attribute 프로퍼티를 갖는 유일한 타입이다.
#### APPEND
- \<ul> 태그 첫번째 차일드로 붙여주기
`target.insertBefore(msg$, target.childNodes[0]);`
- 비슷한 용도로 쓰는
`insertAdjacentHTML`


---

##인프런 - 함수프로그래밍 (1단계)
- 빌트인 메서드들은 arraylike 한 것들 (div)에서 사용을 못함. 따로 구현한 함수기준의 함수형프로그래밍은 그게 가능. => 함수를 먼저 구현하고 함수에 맞는 데이터를 집어넣는 다형성 구현의 예제.
- `document.querySelectAll('*')`
- Documents 쿼리는 nodelist 객체지만 key value 기반의 이터레이터이므로 동작한다.

#### 객체 지향은 데이터가 생겨야 기능을 수행
- 함수 지향은 함수가 먼저 존재하고 데이터가 들어온다. (평가시점이 유연)
- 외운다는 관점으로는 어차피 안된다. 원리를 인터프리트(평가)의 흐름을 읽는게 훨씬더 강력하고 자바스크립트- 함수형 프로그래밍의 본질에 가깝다. 잘 봐 한번
- `_.` 엄격한 평가. 전부 다 돌려서 체크. 수평으로 진행.
- L. 이렇게 파이프를 구성하면 val을 한개씩 던져서 마지막 수확단계에서 조건이 되는지 보는겁니다. 조건이 되면 끝내고 자원 최적화. 수직으로 진행
- 데이터 흐름 방식의 코드는 단순히 선언해주는 것만으로 병렬 처리가 가능해진다. (클러져 , 엘릭서)

- - -

## 변수
- var는 블록 상관없이 함수맥락으로 가버리고 let은 블록내에서만 유효하다. 단지 반복정의 가능성만 다른게 아니다. let이 좋은건 그런 특성으로 인해 충돌이 없다는점.
- 함수는 함수프로토 받아서 선언된 것들
- 메서드는 객체 안에서 value로 선언된것들. method invocation. 메서드 안에선 this는 항상 그 객체!!! 중요 중요 평가시점의 this의 부모가 실제 부모다. 눈으로 보이는 현재 소속 상태가 중요한게 안다.


#### 클로져 모듈 패턴
function makeCounter () {
let private = 0;
return {
	increment : function() {
		private ++;
	},
	decrement: function () {
		private --;
	}, 	getValue : function () { 		return private;
	}
}
var a = makeCounter();
a.increment();

#### 실행 컨텍스트 (Excute Conext)
- 함수단위로 생긴다. (block 아님)
- 실행시에 생김 
- context는 실행환경에서 컨트롤되고 (5가지 원칙)  scope는 타이핑되는 모양새(함수)에 따른다.
- `.` `['method']` 같은 호출이 콜러가 생기고 this가 생기는 부분. `()` 일땐 글로벌 컨텍스트를 유지한다.

#### this
- 글로벌이나 글로벌 레벨에서 사용되는 펑션은 window 실행컨텍스트
- 메소드로 불렸을떈? (오브젝트 키값이든 뭐든) 메서드 실행시점에서 직계 부모 `obj.aaa`이런  케이스는 aaa 메서드안의 this는 obj다!
- 컨스트럭션안에 있는 this는 new로 호출될때의 인스턴스
- call로 함수를 호출했을땐. aaa.call(me) ~> 여기 this는 me가 된다. this를 명시하여 넘기는게 이것!

###### 소단원
- 해당 함수가 객체의 함수(메소드) 로 호출되는지, 함수로 호출되는지에 따라 this 바인딩이 달라진다.
- excution 컨텍스트는 함수단위로 움직인다. 함수는 즉 콜스택이다. 컨텍스트에 담긴건 caller(근원), arguments, variable in (global, local), >>this<<
- this 는 모든 함수 스코프 내에서 자동으로 정해지는 특별한 식별자.

###### not found 왜 에러가 나는가?
- setTimeOut 같은곳에 ( 즉 콜백함수를 비동기적으로 쓰는 ) 상황을 생각해보자. 비록 콜백함수를 method 형식으로 호출한다해도.. 비동기가 되면 일단 현재의 컨텍스트와는 동떨어져 있다가 나중에 다시 처리된다. 낙동강 오리알이다. 이럴땐 수동으로 지정해주지 않는이상 this는 글로벌이 된다.

- this를 필요로 하는 클래스 메소드로 작업하는 경우, bind를 통해 컨텍스트를 바인딩합니다. 인스턴스를 유지하기 위해 === 비동기함수에선 수동으로 지정하기위해 쓴다.

- call, apply 가 컨텍스트와 arg를 당장 적용해 실행하기 위해서 쓴다면 bind는 함수에 적용해서 컨텍스트와 들어오는 값을 미리정하는 역할.
~~~
var slice = Array.prototype.slice;
slice.apply(arguments);
[].slice
~~~

### ES6
- forEach는 배열전용 (call로 컬렉터도 가능)  for in은 객체에 적용되는 열거속성 회전. 대신 iterator 속성 상관없이 돈다. 그래서 Proto껄 가지고 오기도 한다.

- for of는 객체에 적용되는 열거속성을 지정한것만 회전.

### 클로저
- 외부함수의 변수에 접근할 수 있는 !내부 함수!가 => 클로져
- 콜백이든 뭐든 클로져의 모양이 되면 같혀있는 자기 외부함수께 우선순위다.


### 원시변수가 값을 비교하면 레퍼런스변수는 주소를 비교한다.
- 참조타입을 args로 넘겨주면 args 조작이 원본의 변경으로 이어진다.



## 상속
Object.create() 는 프로토라인을 잇는 의미만 있다. 독립적 프로퍼티를 주는건 아니다.
Object.create(\*.prototype) 프로토타입은 주지만 생성자를 실행하지않는다. new는 실행도 한다. 연결도 해주고
- - -

## 클래스 CLASS
class {
	var c
	methos a ( (b), var c)
	method b (get c)
}

a()하면 메소드 b에서 c를 찾을때 클래스 변수가 사용될까? 메소드 b를 호출한 메소드 a의 지역 변수 i가 사용될까? 클래스 변수를 사용한다.<< 메소드 내(b)에서 지역변수가 존재하지 않는다면 그 메소드가 소속된 클래스의 전역변수를 사용한다! 이것이 lexcal scope 동작방식이다.


## Async 관련
- 핸들러..? 스레드 ( 비동기로 날린거 )가 서로 다르게 동작하는데. 중간에 입을 맞출 필요가 있다. 통신하기 위한 것이 핸들러. 웹페이지에 클릭하는 이벤트와 자바스크립트를 연동시키야 할 필요가 있다. 그럼 그때 구현한 클릭리스터는 핸들러다. 이벤트를 핸들! 하는 핸들러
- 동기작업들은 콜스택에 쌓여있는것들부터 하나하나 처리된다. 다 하는 동안 브라우저의 API 들이 콜백큐(excuiton context)에 하나씩 올려놓고 콜스택이 처리가 되면 이벤트루프가 작동. 콜백큐를 처리하게 된다.


## lexical scope
##### 암묵적 전역 (implied globals)
- var 안쓰고 변수 쓰면 다음 호출될때 var로 지정해버림. (global 맥락에)
- lexical (어휘의) -> 코드에서 정의될때 기준으로 scope를 지정한다.

## MOCHA
- html로 하면 스크립트가 실행되면서 로드된것들을 테스트한다.
- npm test 로 cli 기준으로 볼 수도 있다.


## << 화살표 함수>>
#### 특징
-일반적 함수는 함수가 어떻게 호출되는냐에 따라 this가 결정된다. 이를 정적으로 할 수 있는게 화살표함수
- x => this.x * x 에서 this는 글로벌이다.
- 화살표 함수는 call, applay, bind 메소드를 사용하여 this를 변경할 수 없다. 우선순위가 높음. 우선 순위가 높다라고 표현할 수도 있지만 사실 화살표 함수는 실행 컨텍스트를 바꾸지 않는다는게 더 정확한 표현

## <테스트>
- 테스트를 하면 it 안의 지시는 전체 describe 처리된 다음 돈다. 그래서 var를 쓰면 잘못된 방식으로 처리가 된다.


#### 자바 스크립트
## deep, shallow
예시
const object1 = {
 a: 1,
 b: 2,
};
const object2 = Object.assign({}, object1, {a: 100});

##typeSCRIPT
* es6 컴파일: tsc person -t es6

- POST /article 유저 작성 article 본문(article_text) 및 선택 option(burn / publish / 타임캡슐 - will_public_at) DB 저장 (/write comp)
