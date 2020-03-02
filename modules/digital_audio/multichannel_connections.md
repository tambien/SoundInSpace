## Web Audio API

The Web Audio API (and Tone.js) natively supports multichannel routing. The basic connections are handled using the 'connect' method. 

The first argument of 'connect' is object that you want to connect to. The second argument is the output you want to connect from, and the third output is the inlet you want to connect to. 

```javascript
// create a 4 channel merger
const merge = new Merge(4).toDestination()
const oscillator = new Oscillator()
// connect the oscillator to the second channel
oscillator.connect(merge, 0, 1)
```

https://codesandbox.io/s/multichannel-output-7ku6i

## Max/MSP

Max/MSP has a similar way to carry multichannel audio as Web Audio using the `mc` objects. Multichannel audio is merged and split into a multichannel connection using `mc.pack` and `mc.unpack`. 

[example](../../max/quad/)

