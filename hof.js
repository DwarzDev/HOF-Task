const personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  
const findUserForceTrue = personnel.filter(a => a.isForceUser == true);
const findUserForceFalse = personnel.filter(a => a.isForceUser == false);
// console.log(findUserForceTrue)

const userForceScoreTrue =findUserForceTrue.map((score) => score.pilotingScore + score.shootingScore);
const userForceScoreFalse =findUserForceFalse.map((score) => score.pilotingScore + score.shootingScore);
// console.log(userForceScoreTrue)


const finalScoreUFTrue = userForceScoreTrue.reduce((acc,curr) => {return acc + curr});
const finalScoreUFFalse = userForceScoreFalse.reduce((acc,curr) => {return acc + curr});

const scoreAllUser = finalScoreUFTrue + finalScoreUFFalse;

personnel.forEach((person) => {
  document.write(`<div class ="card"></br> ID : ${person.id} </br>Name : ${person.name} </br> Piloting Score : ${person.pilotingScore} </br> Shooting Score : ${person.shootingScore} </br> IS Force User : ${person.isForceUser} </br></br></div>`)
  
  if(person.isForceUser == true){
    let totalScore = person.pilotingScore + person.shootingScore;
     document.write(`<div class="total">TOTAL SCORE : ${totalScore}</br></br> </div>`)
  }
})


document.write(`<div class="result"></br>
                Total Score User Force: <b><span>${finalScoreUFTrue}</span></b>  </br>
                Total Score User Not Force : <b><span>${finalScoreUFFalse}</span></b> </br>
                <b>Total Score All User</b> : <b><span>${scoreAllUser}</span></b
</div>`)

// console.log(scoreAllUser)


