// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 허은서(2651074)
const titles = ["The Passion of the Christ", "A.I. (Artificial Intelligence)", "Avengers: Infinity War", "Cinderella", "Titanic"];
const ratings = [7.5, 7.0, 8.2, 6.8, 7.9];
const years = [2004, 2001, 2018, 2015, 1997];
let sum = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {
    if (i > ratings[i])
        sum = sum + ratings[i];
    if (ratings[i] >= 8) count++;
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편")

for (let i = 0; i < ratings.length; i++) {
    let label;
    if (8.5 < ratings[i]) {
        label = ratings[i] = "명작";
    }
    else if (7 < ratimgs[i]) {
        label = ratings[i] = "추천";
    }
    else {
        label = ratings[i] = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[2];
let maxIndex = 8.2;

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);