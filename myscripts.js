
$(document).ready(() => {
    let div = $("#container")
    div.css("display", "none");
    var characterMargin = (div.innerWidth() - 90) / 2;
    let character = $("#character")
    character.css("margin-left", characterMargin)

    $(function () {
        $(document).keyup(function (e) {
            let character = $("#character")
            if (e.keyCode == 37) {
                characterMargin -= 20;
                character.css("margin-left", characterMargin)
            }

            if (e.keyCode == 39) {
                characterMargin += 20;
                character.css("margin-left", characterMargin)
            }
            var cMargin = $("#character").css("margin-left");
        });
    });

    var enemy = null;
    var marginTop = 0;
    setInterval(() => {
        let div = $("#container")
        if (enemy != null) {
            gameOver(enemy)
            if (marginTop < div.innerHeight() - 80) {
                enemy.css("margin-top", marginTop)
                marginTop += 5;
            } else {
                enemy.css("display", "none")
                enemy.css("margin-left", getRandomInt(div.innerWidth() - 90))
                marginTop = 0;
                enemy = null;
            }
        } else {
            let time = 1000 * getRandomInt(20);
            setTimeout(() => {
                enemy = $("#enemy");
                enemy.css("display", "")
            }, time)
        }
    }, 50)

    var enemy1 = null;
    var marginTop1 = 0;
    setInterval(() => {
        let div = $("#container")
        if (enemy1 != null) {
            gameOver(enemy1)
            if (marginTop1 < div.innerHeight() - 80) {
                enemy1.css("margin-top", marginTop1)
                marginTop1 += 5;
            } else {
                enemy1.css("display", "none")
                enemy1.css("margin-left", getRandomInt(div.innerWidth() - 90))
                marginTop1 = 0;
                enemy1 = null;
            }
        } else {
            let time = 1000 * getRandomInt(20);
            setTimeout(() => {
                enemy1 = $("#enemy1");
                enemy1.css("display", "")
            }, time)
        }
    }, 50)

    var enemy2 = null;
    var marginTop2 = 0;
    setInterval(() => {
        let div = $("#container")
        if (enemy2 != null) {
            gameOver(enemy2)
            if (marginTop2 < div.innerHeight() - 80) {
                enemy2.css("margin-top", marginTop2)
                marginTop2 += 5;
            } else {
                enemy2.css("display", "none")
                enemy2.css("margin-left", getRandomInt(div.innerWidth() - 90))
                marginTop2 = 0;
                enemy2 = null;
            }
        } else {
            let time = 1000 * getRandomInt(20);
            setTimeout(() => {
                enemy2 = $("#enemy2");
                enemy2.css("display", "")
            }, time)
        }
    }, 50)
})


function welcome() {
    let welcome = $("#welcome");
    welcome.css("display", "none")

    let div = $("#container")
    div.css("display", "");
}

// function enemies(myEnemy, margin, id) {
//     let div = $("#container")
//     if (myEnemy != null) {
//         if (gameOver(myEnemy)) {
//             clearInterval(e)
//             clearInterval(e1)
//             clearInterval(e2)
//         }
//         if (margin < div.innerHeight() - 80) {
//             myEnemy.css("margin-top", margin)
//             margin += 5;
//         } else {
//             myEnemy.css("display", "none")
//             myEnemy.css("margin-left", getRandomInt(div.innerWidth() - 90))
//             margin = 0;
//             myEnemy = null;
//         }
//     } else {
//         let time = 1000 * getRandomInt(20);
//         setTimeout(() => {
//             myEnemy = $(id);
//             myEnemy.css("display", "")
//         }, time)
//     }
// }

function gameOver(myEnemy) {
    let div = $("#container")
    let gameOver = $("#gameOver")
    var eML = parseInt(myEnemy.css("margin-left"));
    var cML = parseInt($("#character").css("margin-left"));
    var eMT = parseInt(myEnemy.css("margin-top"));
    var cMT = parseInt($("#character").css("margin-bottom"));
    // console.log("eM : ", eML, "|| cM : ", cML);
    // console.log("eML : ", eML, "|| cML : ", cML);
    var eMB = (div.innerHeight() - eMT);
    if (eML > cML && eML - cML <= 30 && eML - cML >= 0 && eMB == 85) {
        div.css("display", "none");
        gameOver.css("visibility", "visible")
    }
    if (cML > eML && cML - eML <= 30 && cML - eML >= 0 && eMB == 85) {
        div.css("display", "none");
        gameOver.css("visibility", "visible")
    }
}

function startAgain() {
    let gameOver = $("#gameOver")
    let welcome = $("#welcome");
    gameOver.css("visibility", "hidden")
    welcome.css("display", "")
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}