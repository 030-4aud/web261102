const titles = ["The Passion of the Christ", "A.I. (Artificial Intelligence)", "Avengers: Infinity War", "Cinderella", "Titanic"];
const ratings = [7.5, 7.0, 8.2, 6.8, 7.9];
const years = [2004, 2001, 2018, 2015, 1997];

let sum = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
}
console.log("최고:", titles[maxIndex], max);

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) count++;
}
console.log("8점 이상:", count + "편")


for (let i = 0; i < ratings.length; i++) {
    let label;
    if (8.5 < ratings[i]) {
        label = "명작";
    }
    else if (7 < ratings[i]) {
        label = "추천";
    }
    else {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}


sum = 0;
count = 0;

let i = 0;
while (i < ratings.length) {
    sum = sum + ratings[i];
    i++;
}
console.log("합계:", sum);
average = sum / ratings.length;
console.log("평균:", average);

max = ratings[0];
maxIndex = 0;

i = 0; 
while (i < ratings.length) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
        i++;
    }
}
console.log("최고:", titles[maxIndex], max);

i = 0; 
while (i < ratings.length) {
    if (ratings[i] >= 8) count++;
     i++;
}
console.log("8점 이상:", count + "편")

i = 0; 
while (i < ratings.length) {
    let label;
    if (8.5 < ratings[i]) {
        label = "명작";
    }
    else if (7 < ratings[i]) {
        label = "추천";
    }
    else {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    i++;
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

document.getElementById("stats").textContent = "평균 " + avgText + "점";

for (let i = 0; i < years.length; i++) {
    const decade = years[i] - years[i] % 10;

    switch (decade) {
        case 1990:
            console.log(titles[i] + " : 1990년대");
            break;

        case 2000:
            console.log(titles[i] + " : 2000년대");
            break;

        case 2010:
            console.log(titles[i] + " : 2010년대");
            break;

        case 2020:
            console.log(titles[i] + " : 2020년대");
            break;
    }
}