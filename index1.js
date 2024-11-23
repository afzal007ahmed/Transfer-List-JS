let leftContainer = document.getElementsByClassName('first-form');
let rightContainer = document.getElementsByClassName('second-form');
let leftAll = document.getElementsByClassName('left-all');
let oneLeft = document.getElementsByClassName('one-left');
let oneRight = document.getElementsByClassName('one-right');
let rightall = document.getElementsByClassName('right-all');

oneLeft[0].style.opacity = "0.5";
oneRight[0].style.opacity = "0.5";

leftAll[0].addEventListener('click', () => {
    let rightalllabels = document.querySelectorAll('.second-container-label');
    for (let i = 0; i < rightalllabels.length; i++) {
        rightalllabels[i].setAttribute('class', 'first-container-label');
        leftContainer[0].append(rightalllabels[i]);
        rightalllabels[i].firstElementChild.checked = false;
    }
})

rightall[0].addEventListener('click', () => {
    let leftallLabels = document.querySelectorAll('.first-container-label');
    for (let i = 0; i < leftallLabels.length; i++) {
        leftallLabels[i].setAttribute('class', 'second-container-label');
        rightContainer[0].append(leftallLabels[i]);
        leftallLabels[i].firstElementChild.checked = false;
    }
})


oneLeft[0].addEventListener('click', () => {
    let rightalllabels = document.querySelectorAll('.second-container-label');
    for (let i = 0; i < rightalllabels.length; i++) {
        if (rightalllabels[i].firstElementChild.checked == true) {
            rightalllabels[i].firstElementChild.checked = false;
            leftContainer[0].append(rightalllabels[i]);
            rightalllabels[i].setAttribute('class', 'first-container-label');
        }
    }
    oneLeft[0].style.opacity = "0.5";
})


oneRight[0].addEventListener('click', () => {
    let leftallLabels = document.querySelectorAll('.first-container-label');
    for (let i = 0; i < leftallLabels.length; i++) {
        if (leftallLabels[i].firstElementChild.checked == true) {
            leftallLabels[i].firstElementChild.checked = false;
            leftallLabels[i].setAttribute('class', 'second-container-label');
            rightContainer[0].append(leftallLabels[i]);
        }
    }
    oneRight[0].style.opacity = "0.5";
})


rightContainer[0].addEventListener('change', () => {
 let count = 0 ;
    for (let i = 0; i < rightContainer[0].length; i++) {
        if (rightContainer[0][i].checked) {
            count++;
            oneLeft[0].style.opacity = "1";
        }
    }
    if( count == 0 ) {
        oneLeft[0].style.opacity = "0.5";
    }
})

leftContainer[0].addEventListener('change', () => {
    let count = 0 ;
    for (let i = 0; i < leftContainer[0].length; i++) {
        if (leftContainer[0][i].checked) {
            oneRight[0].style.opacity = "1";
            count++; 
        }
    }
    if( count == 0 ) {
        oneRight[0].style.opacity = "0.5";
    }
})