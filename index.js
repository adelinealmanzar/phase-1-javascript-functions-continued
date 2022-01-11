// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("go hiking");

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
saturdayFun("go hiking");

function wrapAdjective(punctuation = "*") {
    return function (adjective="special") {
        return `You are ${punctuation}${adjective}${punctuation}!`;
    }
}

