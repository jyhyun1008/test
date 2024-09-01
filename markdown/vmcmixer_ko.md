# VMC Dual Cam Mixer [ko-KR]

## Language
* [en-US](./?p=vmcmixer_en)
* [ja-JP](./?p=vmcmixer_ja)
* [ko-KR](./?p=vmcmixer_ko)

# VMC Dual Cam Mixer

**VMC Dual Cam Mixer** 는, VMC(Virtual Motion Capture) 프로토콜을 사용하여, 두 대의 카메라로부터의 신호를 믹스하기 위해 설계된 프로젝트입니다. 이 툴은, 팔을 앞으로 뻗는 동작이나, 옆을 보면서 한쪽 다리를 들어올리는 동작과 같이, 한 대의 카메라로 정확하게 캡쳐하기 어려운 특정 모션캡쳐 시나리오를 수정하는 것에 특화되어 있습니다.

![](https://github.com/user-attachments/assets/59b3999b-c182-4667-a3ec-df437c61240e)

## 다운로드 및 실행

- [Booth 다운로드 링크]()
- [VMC Dual Cam Mixer의 실행방법](./?p=vmcmixer_run_ko)

## 데모 영상

- [데모 (August 31, 2024, KST)](https://www.youtube.com/watch?v=W1B7syI2zeA)
- [댄스 비디오 (August 31, 2024, KST)](https://www.youtube.com/watch?v=CjclBkex2lo)

## What Can It Do?

VMC Dual Cam Mixer의 주된 목표는, 두 개의 별도의 모션 캡쳐 프로그램을 사용해서, 한 대의 카메라로는 정확하게 인식하는 것이 어려운 동작을 수정하는 것입니다. 예를 들어, 한 대의 카메라가 특정한 동작을 캡쳐하는 것에 어려움을 겪을 때, 다른 한 대의 카메라가 그 갭을 메움으로써, 더욱 정확한 모션을 얻을 수 있습니다.

- 가운데의 캐릭터가 **왼쪽 캐릭터**의 움직임을 따라하고 있습니다:
  
  ![Left character movement](https://for.stella.place/D1/b4b8fda3-ce52-4434-8972-6fd7b1886839.webp)

- 가운데의 캐릭터가 **오른쪽 캐릭터**의 움직임을 따라하고 있습니다:

  ![Right character movement](https://for.stella.place/D1/22dda791-8eda-4bdf-ae97-3cc9749666ce.webp)

**주된 차이**: 다른 비슷한 소프트웨어와 달리, VMC Dual Cam Mixer는 각 본이 어떤 포트의 신호를 수신할지 개별 설정할 필요 없이, 모든 신호를 단순히 통합해 줍니다.

# Important Notes

- **현재 스테이터스**: 프로젝트는 아직 초기 단계에 있으며, 완전히 기능하지 않을지도 모릅니다. 
- 표정이나 손가락의 움직임은 **왼쪽에 놓여진 소프트웨어**로부터 수신합니다.
- 두 개의 프로그램 간의 상성이 나쁘거나 딜레이가 발생할 수 있기 때문에, 충분한 테스트가 필요합니다.
- 양방향의 카메라가 전신을 촬영할 수 있도록 하는 것이 중요합니다. 그렇지 않을 경우, 결과가 부정확해질 가능성이 있습니다. 최대한 넓은 공간에서 거리를 두고 전신을 촬영해 주세요.
- **추천 시각**: 45 - 70도.
- Node.js 프로젝트입니다만, ~~시스템에 Node.js가 설치되어 있어야 합니다.~~ 현재는, .exe 파일을 다운로드하여 시스템에서 직접 실행할 수 있습니다!

# Recent Updates

- **August 29, 2024 (KST)**: 더욱 스무스한 모션을 얻을 수 있게 되었습니다.
- **August 30, 2024 (KST)**: 코드 효율을 개선했습니다. + Root Bone이 인식되지 않는 문제를 수정했습니다.
- **August 30, 2024 (KST)**: 본의 방향이 자주 뒤집히고, 뒤를 돌아보고 있을 때 앞을 바라보고 있는 것처럼 잘못 인식되는 문제를 수정했습니다.
- **August 31, 2024 (KST)**: 인식 범위와 프레임 레이트를 조정했습니다.