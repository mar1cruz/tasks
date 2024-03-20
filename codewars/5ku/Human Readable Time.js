function humanReadable(time) {
    const hour = Math.floor(time / 3600)
    const minutes = Math.floor((time - 3600 * hour) / 60)
    const seconds = Math.floor((time - (3600 * hour + 60 * minutes)))

    return `${formatter(hour)}:${formatter(minutes)}:${formatter(seconds)}`;
}

function formatter(num) {
    return num < 10 ? '0' + num : num
}

console.log(humanReadable(86400))

//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript