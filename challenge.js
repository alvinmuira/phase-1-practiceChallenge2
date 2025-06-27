const students = [
  { name: "Brian", score: 45 },
  { name: "Chloe", score: 78 },
  { name: "Diana", score: 92 }
];
function studentNames() {
    return students.map(student => student.name);
}
function goodScores() {
    return students.filter(student => students.score >= 50)
}
function totalScore() {
    return students.reduce((total, student) => total + student.score, 0);
}