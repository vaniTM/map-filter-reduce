async function loadHeroes() {
    const response = await fetch("http://localhost:3000/heroList");
    return await response.json();
}

function loadHeroesThen() {
    return fetch("http://localhost:3000/heroList")
        .then(response => response.json());
}

// die Namen aller [guten/bösen] Heroes:
async function getHeroNames(alignment) {
    const heroList = await loadHeroes();
    const heroNames = heroList.filter(hero => hero.biography.alignment === alignment).map(hero => hero.name);
    console.log(heroNames);
}
getHeroNames("good");

function getHeroNamesThen(alignment) {
    const heroes = [];
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].biography.alignment === alignment) {
                heroes.push(heroList[i].name);
            }
        }
    }).then(function () {
        console.log(heroes);
    }
    );
}
getHeroNamesThen("good");

// 1. die Anzahl der [guten/bösen] Heroes:
function getHerosNumber(alignment){
    let sum = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if (heroList[i].biography.alignment === alignment){
            sum ++;
        }
    }
    }).then(function(){
        console.log(sum);
    })
}
getHerosNumber("good");

// 2. die durchschnittlichen Punkte (alle Disziplinen) der [guten/bösen] Heroes:
function getHerosAverageAllHeros(alignment){
    let sum = 0;
    let points = 0;
    let average = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if(heroList[i].biography.alignment === alignment){
            sum += 6;
            points += heroList[i].powerstats.intelligence;
            points += heroList[i].powerstats.strength;
            points += heroList[i].powerstats.speed;
            points += heroList[i].powerstats.durability;
            points += heroList[i].powerstats.power;
            points += heroList[i].powerstats.combat;
        }
        average = points / sum;
    }
    }).then(function(){
        console.log(average);
    })
}
getHerosAverageAllHeros("good");

function getHerosAverage(alignment){
    let sum = 0;
    let points = 0;
    let average = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if(heroList[i].biography.alignment === alignment){
            sum ++;
            points += heroList[i].powerstats.intelligence;
            points += heroList[i].powerstats.strength;
            points += heroList[i].powerstats.speed;
            points += heroList[i].powerstats.durability;
            points += heroList[i].powerstats.power;
            points += heroList[i].powerstats.combat;
        }
        average = points / sum;
    }
    }).then(function(){
        console.log(average);
    })
}
getHerosAverage("good");


// 3. die Anzahl der [männlichen/weiblichen] Heroes:
function getHerosNumberByGender(gender){
    let sum = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if(heroList[i].appearance.gender === gender){
            sum ++;
        }
    }
    }).then(function(){
        console.log(sum);
    })
}
getHerosNumberByGender("Male");

// 4. die durchschnittliche Intelligenz aller [männlichen/weiblichen] Heroes - sind die Daten sexistisch?
function getHerosIntelligenceByGender(gender){
    let sum = 0;
    let points = 0;
    let average = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if(heroList[i].appearance.gender === gender){
            sum ++;
            points += heroList[i].powerstats.intelligence;
        }
        average = points / sum;
    }
    }).then(function(){
        console.log(average);
    })
}
getHerosIntelligenceByGender("Male");

// 5. alle Heroes mit anderem Gender als "Male" oder "Female" (Objekte mit Name + Gender):

function getHerosNumberByUndefindGender(){
    let sum = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if(heroList[i].appearance.gender !== "Male" && heroList[i].appearance.gender !== "Female"){
            sum ++;
        }
    }
    }).then(function(){
        console.log(sum);
    })
}
getHerosNumberByUndefindGender();





