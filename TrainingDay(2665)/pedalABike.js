function distanceCycled(cadence, gear, time) {
  const [frontGear, rearGear] = gear.split('x');
  let distance = cadence * time * 2.11115 * frontGear / rearGear;
  distance = (Math.round(distance)/1000).toFixed(3);
  return `You cycled ${distance} kilometers!`;
}
