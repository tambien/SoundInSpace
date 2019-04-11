Ambisonics are are an encoding of spatial audio. With an ambisonic encoder you can capture the sound as it's heard from a centered listener and reproduce it with a spherical loudspeaker system. 

Ambisonics are qualified by the spatial resolution which they capture and reproduce. For example first order ambisonics can be encoded with just 4 channels, while 3rd order ambisonics (also called higher order ambisoncs) takes 16 channels to encode. 

Ambisonics has the advantage of being able to be reproduced on any number of channels since it doesn't encode channels into the format, just spatial resolution. 

A typical ambisonic setup will have an object-based model where the composer can set the position along a sphere of where the sound should exist. The parameters are not in 3d cartesian coordinates (x, y, z), but instead using angle and elevation. To get a distance affect, you could simply reduce the gain value to make it feel further away. 

https://editor.p5js.org/yotam/sketches/3OHMJO8wH