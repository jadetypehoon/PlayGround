##네트워크
- 사설대역
`172.16.0.0/12 ~ 172.31.255.255/12`
-  루프백
`127.0.0.0/8 ~ 127.255.255.255/8`


##웹서비스 설계
- nginx 를 express 서버 앞에 두고 프록시로 연결하면 보안성 향상기대
- HTTP1.1, WebSocket 지원호환 이슈가 있음.
이렇게 웹서버를 이중으로 두는 프록시 설계가 static 파일을 서비스 측면에선 우수(캐시)