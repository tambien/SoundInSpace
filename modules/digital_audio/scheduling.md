## Scheduling values

A very important feature of Tone.Signal is that it sample-accurate. Scheduled changes will occur precisely when they are supposed to.

Tone.Signal includes all of the same scheduling methods which the `AudioParam` does such as:

* `setValueAtTime` - to schedule a value change at a precise time.
* `linearRampToValueAtTime` - to ramp to a value starting from the previously scheduled value.
* `exponentialRampToValueAtTime` - same as the above, but with an exponential curve instead of a linear curve.
* `setTargetAtTime` - unlike the `RampValueAtTime` methods, in `setTargetAtTime`, the time attribute is when it should start ramping towards the value instead of arrive at the value. It takes a third parameter which is the time constant at which it will change.
* `setValueCurveAtTime` - sets an array of values which will be evenly invoked over the course of the duration.
* `cancelScheduledValues` - cancels all values after the specified time.

Additionally, Tone provides methods for ramping and scheduling values at the current time. These simplify the above methods by canceling all values after the current time and setting an automation point at the current value.

* `linearRampToValue` - set a value and a ramp time and the signal will begin linearly ramping towards that value.
* `exponentialRampToValue` - same as above but exponential ramp.
* `rampTo` - same interface as the above methods, but will automatically decide to use linear or exponential based on the units of the signal.

## Transport

Instead of scheduling events along the AudioContext time, the Transport allows you to schedule events along a seekable/restartable timeline.

This is done by scheduling a **callback** to be invoked right before the event is supposed to be scheduled and then using the time in that callback to schedule the event.

```javascript
var synth = new Tone.Synth().toMaster()
//schedule an event to happen 1 second after the transport is started
Tone.Transport.schedule(function(time){
	//use the time passed in to schedule the method
	synth.triggerAttackRelease("C4", "8n", time);
}, 1)

//start the transport to hear the event
Tone.Transport.start()
```

https://jsfiddle.net/yotammann/swwvywvg/5/

https://jsfiddle.net/yotammann/eprvL0nq/1/

https://jsfiddle.net/yotammann/o3d076mz/1/

## Loop

Loop is an abstraction on the schedule method which allows you to create looped segments.

```javascript
//create a loop which is invoked every second
var loop = new Tone.Loop(function(time){
	synth.triggerAttackRelease("C2", "8n", time)
}, 1)

//start the loop two seconds after the transport is started
loop.start(2)

//start the transport to invoke the loop
Tone.Transport.start()
```

## Sequence

https://jsfiddle.net/tseqv132/

https://jsfiddle.net/tseqv132/2/