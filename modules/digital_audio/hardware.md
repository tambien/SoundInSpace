# Signals

In an ideal sense, an audio signal is a continuous representation of a sound source. Silence is at the center of the signal, and the signal modulates between values -Amplitude and +Amplitude. For analog signals, that amplitude value is typically a electrical voltage, and for digital signals that value is usually between -1 and 1. 

## Math

When two signals meet their values are summed together. If the signals are phase inverted with each other, they will cancel each other out and produce silence. (this is how noise cancelling headphones work).

![Two signals canceling each other](https://www.prosoundweb.com/images/uploads/Fig2DrumPhaseDH.jpg)

If two signals are in phase with each other their amplitudes will double. The troughs combine with the other signals troughs and the peaks combine with the other signal's peaks. 

![Two signals summing](https://www.prosoundweb.com/images/uploads/Fig1DrumPhaseDH.jpg)

### Mixers (+)

When two signals meet at a junction, the resulting signal is the sum of the inputs. 

### Gain (*)

Gain is the ratio between the input and the output signal. 

# Cables

Cables are one way to transmit these signals. Audio cables are generally **3 wire** cables, where one wire is ground (typically used an electrical shield), one wire is the signal, and the last wire is the phase-inverted signal. The +Signal and -Signal balance out letting the cables 

![A representation of a an audio cable showing the shielding, signal and a phase inverted (i.e. flipped) signal](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kabel-Symetrisch.png/2560px-Kabel-Symetrisch.png)

# Speakers

Speakers takes an electrical signal and translate it into vibrations in the air. A common approach is to use a suspended variable electromagnet. 

![A cutaway of a loudspeaker](https://upload.wikimedia.org/wikipedia/commons/7/79/Loudspeaker-bass.png)

# Microphones

Microphones and speakers are essentially inverses of each other and work through very similar means. Instead of signal turning waves in the air, waves in the air turn into signal. The biggest difference is the weight and sensitivity of the voicecoil. In microphones, you want it to be as light as possible so that it responds quickly to changes in the air. 

# A/D

Digitally, audio is represented as a streaming array. Usually the values are between -1 and 1. To make it easier to work with, this array is often chunked into shorter sections which are processed all at once. 

In order to move from the analog to the digital, we have to go through the process of sampling. An analog to digital converter is responsible for sampling a continuous signal and turning it into a digital representation. 

![A continuous signal split into many evenly-spaced segments](https://upload.wikimedia.org/wikipedia/commons/5/50/Signal_Sampling.png)

According to Nyquist, the sampling rate needs to twice the rate of the highest frequency that you'd like to capture. So if you want to capture up to 20,000 Hz, you're sampling rate needs to be above 40,000 Hz. 

# D/A

Digital to analog converters playback the encoded sound at the correct rate and often will dither or lowpass the output to get rid of the sharp edges of the quantized, sampled signal. 

## Interaces

Practically speaking, audio interfaces go from audio cables (like XLR) to digital cables (like USB) by sampling the audio input. 

![an example of an audio interface](https://assets.pcmag.com/media/images/343751-focusrite-scarlett-18i8.jpg?width=333&height=245)


For this class, we will transmit audio over an ethernet network using an application called [Dante](https://www.audinate.com/solutions/dante-overview)