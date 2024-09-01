# VMC Dual Cam Mixerの実行方法 [ja-JP]

[戻る](./?p=vmcmixer_ja)

## Language
* [en-US](./?p=vmcmixer_run_en)
* [ja-JP](./?p=vmcmixer_run_ja)
* [ko-KR](./?p=vmcmixer_run_ko)

VMC Dual Cam MixerはNode.jsベースで作られた実行ファイルであり、WindowsとMacでは実行パスが若干異なります。

# Windowsの場合

1. ファイルを解凍し、`vmcdualcammixer-win.exe`と**同じフォルダ**に`vmcdualcammixer`フォルダを配置します。
2. `vmcdualcammixer`フォルダ内のconfigファイルを修正します。（Windowsでは、ファイルエクスプローラーで拡張子が表示されないのが通常です。）

# Macの場合

1. ファイルを解凍し、`vmcdualcammixer`フォルダをユーザーの**ルートディレクトリ**（サイドバーに表示されるユーザー名とホームアイコンがあるディレクトリ）に移動します。
2. `vmcdualcammixer`フォルダ内の`config.txt`ファイルを修正します。（Macでは、Finderで拡張子が表示されるのが通常です。）

# config.txtファイルの修正

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

この`config.txt`ファイルの行数を絶対に変更しないでください！下部に何かを追加することはできますが、上部でEnterキーを押してはいけません。

## LEFTIP / LEFTPORT

これは、**左側を撮影する**ソフトウェアが接続される内部IPアドレスとポートです。ソフトウェアで設定した**宛先**IPアドレスとポートを入力する必要があります。

私の場合、これはローカルのデバイス（同じコンピューター）で処理したため、変数名をlocalhostに設定し、127.0.0.1を入力しました。しかし、逆に設定しても問題ありません。

39531～39540のポートをすべて開いている場合は、外部IPで接続しても構いませんが、ポートフォワーディングを行わず、同じネットワークで作業することをお勧めします。

## RIGHTIP / RIGHTPORT

これは、**右側を撮影する**ソフトウェアが接続される内部IPアドレスとポートです。同様に、ソフトウェアで設定した宛先IPアドレスとポートを入力してください。

私の場合、iPhoneを使用していたため内部IPを入力しましたが、同じコンピューターで実行するソフトウェアからデータを受け取りたい場合は127.0.0.1を入力してください。

## SENDIP / SENDPORT

ミックスされた信号が送信される宛先のIPとポートです。出力ソフトウェア（例：Blender）を実行するデバイスの内部IPを入力してください。

通常、VMCプロトコルではこれを39539に設定します。

## P.S

このポートはソフトウェアによって占有されます。空いているポートならどれでも入力できます！デフォルトは39538です。

# エラー処理

1. **Windowsでexeファイルを開くとすぐに閉じてしまう！**：configファイルを確認してください。最初の状態から数字だけを変更する必要があります。スペースキーを押したり、引用符を追加したり、行数を変更していないか確認してください。また、IPアドレスが正しく入力されているか、外部IPを入力した場合、ポートフォワーディングが正しく行われているか確認してください。
2. **configファイルを正しく設定したと思われる場合**、実行ファイルがあるフォルダでコマンドプロンプトを開き、`cmd /k vmcdualcammixer-win.exe`コマンドを実行した結果画面をキャプチャして、`jayhyun1008@gmail.com`に送ってください。
3. **Macでエラーが発生した場合！**：1番と同じ項目を確認し、それでもエラーが発生する場合は、エラー画面をキャプチャして、`jayhyun1008@gmail.com`に送ってください。
4. **Linuxでエラーが発生した場合！**：Linux環境でのテストを行っていないため、サポートが難しいです。しかし、Linuxを使用されている分、エラーの原因を特定するスキルがあると考えています。もし私のコードに問題があると思われる場合は、遠慮なく`jayhyun1008@gmail.com`に連絡してください。一緒に素晴らしいプログラムを作りましょう。
