import * as Tone from "tone";

Tone.Destination.volume.value = -10;

const osc0 = new Tone.Oscillator("C5", "square").connect(createPanner(0.5, 0));
const osc1 = new Tone.Oscillator("A3", "square").connect(createPanner(0.5, 180));

const delay0 = new Tone.FeedbackDelay(0.25, 0.1).connect(createPanner(0.1, 0, false));
osc0.connect(delay0);

const delayLFO = new Tone.LFO(0.5, 0.25, 0.5).connect(delay0.delayTime).start();

new Tone.Loop(time => {
	osc0.start(time).stop(time + 0.02);
}, 0.2).start().stop("3m");

new Tone.Loop(time => {
	osc1.start(time).stop(time + 0.02);
}, 0.15).start("1m").stop("4m");

new Tone.Sequence((time, note) => {
	osc0.frequency.rampTo(note, "16n", time);
}, ["C4", "E4", ["A2", "A4"], "C2"], "4n").start(0);

new Tone.Sequence((time, note) => {
	osc1.frequency.rampTo(note, "16n", time);
}, ["A4", "E4", "G4", "A3"], "4n").start(0);

function createPanner(frequency, phase, rateLFO = true) {
	const panner = new Tone.Panner3D().toDestination();
	panner.panningModel = "HRTF";
	const rotateX = new Tone.LFO({
		frequency,
		phase,
		min: -5,
		max: 5
	}).connect(panner.positionX).start();
	const rotateZ = new Tone.LFO({
		frequency,
		phase,
		min: -5,
		max: 5,
	}).connect(panner.positionZ).start();

	if (rateLFO) {
		const scaleRate = new Tone.LFO(0.1, 0.1, 20).fan(rotateX.frequency, rotateZ.frequency).start();
		scaleRate.type = "sawtooth";
	}
	return panner;
}

const kickPanner = new Tone.Panner3D({}).toDestination();
const kick = new Tone.MembraneSynth({
	volume: 5,
}).connect(kickPanner);
const seq = new Tone.Sequence(time => {
	kick.triggerAttackRelease("C1", 0.2, time);
	kickPanner.positionX.setValueAtTime((Math.random() * 2 - 1), time);
	kickPanner.positionY.setValueAtTime((Math.random() * 2 - 1), time);
	kickPanner.positionZ.setValueAtTime((Math.random() * 2 - 1), time);
}, [0, 0, 0, [0, 0, null]], "2n").start();

const scrape = new Tone.Player("/examples/audio/Berklee/pencil_scrape_2.mp3").toDestination();
scrape.sync().start(0).start("1m").start("1:3");

const scrapeDelay = new Tone.FeedbackDelay(0.25, 0.8).chain(new Tone.Gain(4), new Tone.Filter(600, "highpass"), createPanner(0.1, 90, false));
scrapeDelay.wet.value = 1;
scrape.connect(scrapeDelay);

Tone.loaded().then(() => {
	Tone.Transport.start("+1");
	Tone.Transport.loop = true;
	Tone.Transport.loopEnd = "4m";
});

document.querySelector("button").textContent = "mute";
document.querySelector("button").addEventListener("click", () => {
	Tone.Destination.mute = !Tone.Destination.mute;
	document.querySelector("button").textContent = !Tone.Destination.mute ? "mute" : "unmute";
});
