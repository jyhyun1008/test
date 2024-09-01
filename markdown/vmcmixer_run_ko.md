# VMC Dual Cam Mixer의 실행하는 법 [ko-KR]

[돌아가기](./?p=vmcmixer_ko)

## Language
* [en-US](./?p=vmcmixer_run_en)
* [ja-JP](./?p=vmcmixer_run_ja)
* [ko-KR](./?p=vmcmixer_run_ko)

VMC Dual Cam Mixer는 Node.js 기반으로 만들어진 실행파일로서, 윈도우즈와 맥에서 실행 경로가 조금씩 다릅니다.

# 윈도우즈의 경우

1. 압축을 푸시고, vmcdualcammixer-win.exe와 **같은 폴더**에 vmcdualcammixer 폴더를 둡니다.
2. vmcdualcammixer 폴더 안에 있는 config 파일을 수정합니다. (윈도우즈의 경우 파일 탐색기에서 확장자가 보이지 않는 것이 맞습니다.)

# 맥의 경우

1. 압축을 푸시고, vmcdualcammixer 폴더를 사용자의 **루트 디렉토리** (사이드바 에서 보시면 사용자 이름이 있고 홈 아이콘이 있는 바로 그 디렉토리) 로 옮겨줍니다.
2. vmcdualcammixer 폴더 안에 있는 config.txt 파일을 수정합니다. (맥의 경우 파인더에서 확장자가 보이는 것이 맞습니다.)

# config.txt 파일 수정

```
--- Connect your LEFT HAND SIDED device to: ---
LEFTIP (127.0.0.1)
127.0.0.1

LEFTPORT (39532)
39532
--- Please put this device on your left hand side ---

--- Connect your RIGHT HAND SIDED device to: ---
RIGHTIP (192.168.x.x)
192.168.45.122

RIGHTPORT (39531)
39531
--- And put this devide on your right hand side ---

--- Also, you want to send mixed data to: ---
SENDIP (127.0.0.1)
127.0.0.1

SENDPORT (39539)
39539
--- Now turn on your device, click the .exe file and enjoy! ---

P.S.
--- Port 39538 is occupied by this software. If you want to change this: ---
39538
```

절대 이 config.txt 파일의 줄 수를 바꾸시면 안됩니다! 아래에는 뭘 더 적어도 되는데 위쪽에서 엔터를 치신다든지 하면 안돼요.

## LEFTIP / LEFTPORT

당신의 **왼쪽 몸을 촬영하는** 소프트웨어가 연결될 내부IP 주소, 그리고 연결해 주는 포트 입니다.
해당 소프트웨어가 실행되고 있는 디바이스의 IP주소가 아닌, 믹서를 실행하는 디바이스의 IP주소, 즉 **소프트웨어에서 설정했던 목적지** IP주소와 **소프트웨어에서 설정했던** 포트를 입력해 주셔야 합니다.

저의 경우에는 원래 이 부분을 로컬 기기(같은 컴퓨터)에서 처리했기에 일단 변수명을 로컬호스트로 하고 127.0.0.1을 입력해 두었습니다. 그렇지만 반대로 하셔도 문제 없습니다.

그리고 39531 - 39540 포트를 전부 여셨으면 외부IP로 연결하셔도 상관은 없습니다만 되도록이면 포트포워딩을 하지 않고 같은 네트워크 에서 작업하시는 것을 추천드립니다.

## RIGHTIP / RIGHTPORT

당신의 **오른쪽 몸을 촬영하는** 소프트웨어가 연결될 내부IP 주소, 그리고 연결해 주는 포트 입니다.
마찬가지로, 소프트웨어에서 설정했던 목적지 IP주소 및 포트를 입력해 주세요.

저의 경우에는 아이폰을 물렸기에, 내부 IP를 입력했지만, 만약 같은 컴퓨터에서 실행하는 소프트웨어로부터 데이터를 받고 싶다면 127.0.0.1을 입력해주세요.

## SENDIP / SENDPORT

믹스된 신호가 나갈 목적지 IP와 포트입니다. 출력하는 소프트웨어(ex: 블렌더)를 실행할 디바이스의 내부 IP를 입력해주시면 됩니다.

일반적으로, VMC 프로토콜의 경우에는 이것을 39539로 둡니다.

## P.S

소프트웨어에 의해 어쩔 수 없이 점거하게 되는 포트입니다. 아무 빈 포트나 입력하셔도 괜찮습니다! 기본 설정은 39538 입니다.

# 에러 처리

1. 윈도우즈에서 exe파일을 열자마자 꺼져요!: config 파일을 확인해주세요. 처음 상태 그대로 숫자만 변경해야 합니다. 추가적으로 스페이스 키를 눌렀거나, 따옴표를 추가했거나, 줄 수를 변경하지 않았나 체크해 보세요. 아이피 주소도 제대로 입력했나, 외부IP를 입력했을 경우 포트포워딩은 제대로 이루어지고 있나 체크해 보세요.
2. config 파일을 제대로 만졌다고 생각하시는 경우에는, 실행파일이 있는 폴더에서 명령 프롬프트 실행 후, `cmd /k vmcdualcammixer-win.exe` 명령어를 실행한 결과창을 캡쳐해서 `jayhyun1008@gmail.com` 으로 보내주세요.
3. 맥에서 오류가 떠요!: 역시 1번과 같은 항목을 체크해 보시고, 그래도 오류가 나는 경우 2번과 같이 오류창을 캡쳐해서 `jayhyun1008@gmail.com` 으로 보내주세요.
4. 리눅스에서 오류가 떠요!: 사실 리눅스 환경에서 테스트해보지 않았기 때문에 도와드리기 어렵습니다. 하지만 리눅스를 사용하시는만큼 저보다 더 능숙하게 오류의 원인을 파악하실 수 있으실 거라고 생각합니다. 혹시 제 코드에 문제가 있다고 생각하신다면 주저 말고 `jayhyun1008@gmail.com` 으로 연락 주세요. 같이 좋은 프로그램을 만들어 나갑시다.