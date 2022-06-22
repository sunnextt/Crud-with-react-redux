function timeConvert(time) {
    const [hours, minutes, seconds] = time.split(':');
    const totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds;
    console.log(totalSeconds);
    return totalSeconds;
}

export default timeConvert;
