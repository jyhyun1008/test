# How to Run VMC Dual Cam Mixer [en-US]

[Back](./?p=vmcmixer_en)

## Language
* [en-US](./?p=vmcmixer_run_en)
* [ja-JP](./?p=vmcmixer_run_ja)
* [ko-KR](./?p=vmcmixer_run_ko)

The VMC Dual Cam Mixer is an executable file based on Node.js, with slight differences in the execution paths between Windows and Mac.

# On Windows

1. Extract the files, and place the `vmcdualcammixer` folder in the **same directory** as the `vmcdualcammixer-win.exe`.
2. Modify the config file inside the `vmcdualcammixer` folder. (On Windows, it’s normal not to see the file extension in File Explorer.)

# On Mac

1. Extract the files, and move the `vmcdualcammixer` folder to your **root directory** (the one with your username and the home icon in the sidebar).
2. Modify the `config.txt` file inside the `vmcdualcammixer` folder. (On Mac, it’s normal to see the file extension in Finder.)

# Modifying the config.txt File

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

Do not change the number of lines in this `config.txt` file! You can add content below, but do not press Enter at the top.

## LEFTIP / LEFTPORT

These are the internal IP address and port for the software capturing your **left side**. Enter the IP address and port of the device running the mixer, i.e., the IP and port you set as the **destination** in the software.

In my case, I handled this locally (on the same computer), so I set the variable to localhost and entered 127.0.0.1. However, it's fine to do the opposite.

If you’ve opened all the ports from 39531 to 39540, you can also connect via an external IP, but it’s recommended to work within the same network without port forwarding.

## RIGHTIP / RIGHTPORT

These are the internal IP address and port for the software capturing your **right side**. Again, enter the IP address and port you set as the destination in the software.

In my case, since I was using an iPhone, I entered its internal IP, but if you want to receive data from software running on the same computer, enter 127.0.0.1.

## SENDIP / SENDPORT

These are the destination IP and port for the mixed signal. Enter the internal IP of the device running the output software (e.g., Blender).

Typically, VMC protocol uses port 39539 for this.

## P.S

This port is occupied by the software. You can enter any available port! The default is 39538.

# Error Handling

1. **On Windows, the exe file closes immediately after opening!**: Check the config file. Only the numbers should be changed from the initial state. Ensure that you didn’t press the spacebar, add quotation marks, or change the number of lines. Also, make sure the IP addresses are correct, and if you’ve entered an external IP, check that port forwarding is correctly set up.
2. **If you believe you’ve configured the config file correctly,** open Command Prompt in the folder where the executable is located, and run the command `cmd /k vmcdualcammixer-win.exe`. Capture the result and send it to `jayhyun1008@gmail.com`.
3. **If you encounter an error on Mac!**: Check the same points as in step 1, and if the error persists, capture the error screen and send it to `jayhyun1008@gmail.com`.
4. **If you encounter an error on Linux!**: Unfortunately, I haven’t tested this in a Linux environment, so it’s difficult to provide assistance. However, given that you’re using Linux, I believe you’re more capable of identifying the cause of the error. If you think there’s an issue with my code, feel free to contact me at `jayhyun1008@gmail.com`. Let’s work together to create a great program.