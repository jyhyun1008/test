# VMC Dual Cam Mixer [ja-JP]

## 言語
* [en-US](./?p=vmcmixer_en)
* [ja-JP](./?p=vmcmixer_ja)
* [ko-KR](./?p=vmcmixer_ko)

# VMC Dual Cam Mixer

**VMC Dual Cam Mixer**は、VMC（Virtual Motion Capture）プロトコルを使用して、2台のカメラからの信号をミックスするために設計されたプロジェクトです。このツールは、腕を前に伸ばす動作や、横を向きながら足を上げる動作など、1台のカメラで正確にキャプチャするのが難しい特定のモーションキャプチャシナリオを修正するのに特に役立ちます。

![](https://github.com/user-attachments/assets/59b3999b-c182-4667-a3ec-df437c61240e)

## ダウンロードと実行

- [Boothでダウンロード]()
- [VMC Dual Cam Mixerの実行方法](./?p=vmcmixer_run_ja)

## デモビデオ

- [デモ（2024年8月31日、KST）](https://www.youtube.com/watch?v=W1B7syI2zeA)

<iframe style="width:100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/W1B7syI2zeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- [ダンスビデオ（2024年8月31日、KST）](https://www.youtube.com/watch?v=CjclBkex2lo)

<iframe style="width:100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/CjclBkex2lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 何ができるのか？

VMC Dual Cam Mixerの主な目標は、2つの別々のモーションキャプチャプログラムを使用して、1台のカメラだけでは正確にキャプチャするのが難しい動作を修正できるようにすることです。例えば、1台のカメラが特定の動きをキャプチャするのが難しい場合、もう1台のカメラがそのギャップを埋め、より正確なモーション全体を実現します。

- 中央のキャラクターが**左側のキャラクター**の動きを追従します：

  ![左キャラクターの動き](https://for.stella.place/D1/b4b8fda3-ce52-4434-8972-6fd7b1886839.webp)

- 中央のキャラクターが**右側のキャラクター**の動きを追従します：

  ![右キャラクターの動き](https://for.stella.place/D1/22dda791-8eda-4bdf-ae97-3cc9749666ce.webp)

**主な違い**：他のソフトウェアとは異なり、各ボーンがどのポートから信号を受信するかを指定する必要はなく、VMC Dual Cam Mixerはすべての信号を単純に統合します。

# 重要な注意点

- **現在のステータス**：プロジェクトはまだ初期段階であり、完全には機能しないかもしれません。
- 表情と指の動きは**左側のソフトウェア**から受信されます。
- 2つのプログラム間の互換性と同期が異なる場合があり、十分なテストが必要です。
- 両方のカメラが全身をキャプチャできることが前提です。そうでない場合、結果が歪む可能性があります。広いスペースで十分な距離を取って全身をキャプチャしてください。
- **推奨視角**：45 - 70度。
- これはNode.jsプロジェクトですが、~~システムにNode.jsをインストールする必要があります。~~ 現在は、.exeファイルを取得し、コンピュータで直接実行できます！

# 最近のアップデート

- **2024年8月29日（KST）**：よりスムーズなモーションキャプチャ機能が向上しました。
- **2024年8月30日（KST）**：コードの効率を改善しました。 + Root Boneが認識されない問題を修正しました。
- **2024年8月30日（KST）**：Boneの方向が頻繁に反転し、振り返るときに前を向いていると誤認識される問題を修正しました。
- **2024年8月31日（KST）**：検出範囲とフレームレートを調整しました。