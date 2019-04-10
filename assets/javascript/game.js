var characterBase = {
    timeoutRef: null,
    attackAnim: function (directionMove) {
        var refer = this;
        var first = "+=200";
        var second = "-=200";
        if (directionMove === "left") {
            first = "-=200";
            second = "+=200";
        }
        $("#" + this.name).find("img").eq(0)//.attr('src', refer.images.attack)
            .queue(function (next) { 
                //$(this).attr('src', refer.images.attack); 
                clearInterval(refer.timeoutRef)
                animationCycle("ATTACK", $(this), refer.imageNum.attack, 500, refer, '')
                next() 
            })
            .animate({ left: first }, 200)
            .animate({ left: second }, 300)
            .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
    },
    defAnim: function (directionHit) {
        var refer = this;
        var first = "+=100";
        var second = "-=100";
        if (directionHit === "left") {
            first = "-=100";
            second = "+=100";
        }
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0)//.attr('src', refer.images.hurt)
                .queue(function (next) { 
                    clearInterval(refer.timeoutRef)
                    animationCycle("HURT", $(this), refer.imageNum.hurt, 500, refer, '')
                    next() 
                })
                .animate({ left: first }, 200)
                .animate({ left: second }, 100)
                .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
        }, 200)

    },
    dieAnim: function (directionHit) {
        var refer = this;
        var first = "+=100";
        if (directionHit === "left") {
            first = "-=100";
        }
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0)
                //.attr('src', refer.images.hurt)
                .queue(function (next) { 
                    animationCycle("DIE", $(this), refer.imageNum.die, 500, refer, '')
                    next() 
                })
                .animate({ left: first }, 200)
                .queue(function (next) {
                    $(this).removeClass('enemy');
                    $(this).attr({
                        'src': refer.images.die,
                        "class": 'character-img dead'
                    });
                    //$(this).attr('src', refer.images.die); 
                    next()
                })
        }, 200)
    },
    counterAnim: function () {
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0).attr('src', refer.images.hurt)
                .animate({ left: first }, 200)
                .animate({ left: second }, 150)
                .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
        }, 500)
    },
    counteredAnim: function () {
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0).attr('src', refer.images.hurt)
                .animate({ left: first }, 200)
                .animate({ left: second }, 150)
                .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
        }, 500)
    },
    updateInfo: function () {
        $('#' + this.name).find(".character-hitpoints").text(this.hitPoints)
        console.log(this.name, 'is',this.role)
        if (this.role === 'player') {
            $('#' + this.name).find(".character-attack").eq(1).remove();
            $('#' + this.name).find(".character-attack").eq(0).html("Attk: <div class='changeText'>" + this.attackPower + '</div')
        } else if (this.role === 'enemy') {
            $('#' + this.name).find(".character-attack").eq(1).remove();
            $('#' + this.name).find(".character-attack").eq(0).text("Counter: " + this.counterAttackPower )
        } 
        
        this.removeHealth();
    },
    removeHealth: function () {
        $('#' + this.name).find(".healthbar-value").css('width', (this.hitPoints / this.defaultHitPoints) * 100 + '%')
        $('#' + this.name).find(".healthbar-value").text( this.hitPoints )
        console.log('lost hp', (this.hitPoints / this.defaultHitPoints) * 100)
    },
    startIdle: function() {
        var refer = this;
        var numberOfImages = refer.imageNum.idle;
        var animationTime = 500;
        var count = 0;
        var urlBase = 'assets/images/';

        refer.timeoutRef = setInterval(function(){
            if(count >= numberOfImages){
                count = 0;
            }
            $("#" + refer.name).find("img").eq(0)
                .attr('src', urlBase + refer.name.toLowerCase() + 'Sprites/IDLE/IDLE_00' + count + '.png')
            
        }, Math.floor(animationTime / numberOfImages))
    }
}

function animationCycle(imageType, imageToChange, numberOfImages, animationTime, charRef, callback){
    var urlBase = 'assets/images/';

    function recusive(imageToChange, count, numberOfImages, animationTime, charRef){
        if( count > numberOfImages - 1 ){
            return setTimeout(function(){
                // finish animation time, could callback here
                if(imageType === "ATTACK" || imageType === "HURT"){
                    charRef.startIdle();
                }
            }, Math.floor( animationTime / numberOfImages ) )
        }
        return setTimeout(function(){
            imageToChange.attr('src', 
            urlBase + charRef.name.toLowerCase() + 'Sprites/' + imageType + '/' + imageType + '_00' + count + '.png')
            
            //console.log( urlBase + charRef.name.toLowerCase() + 'Sprites/' + imageType + '/' + imageType + '_00' + count + '.png' )
            recusive(imageToChange, count +1, numberOfImages, animationTime, charRef);
        }, Math.floor( animationTime / numberOfImages ) )
    }

    imageToChange.attr('src', urlBase + charRef.name.toLowerCase() + 'Sprites/' + imageType + '/' + imageType + '_000.png')
    recusive(imageToChange, 1, numberOfImages, animationTime, charRef)
}

function createCharacter(base, data) {
    var character = Object.assign({}, base);
    character.name = data.name;
    character.images = data.images;
    character.imageNum = data.imageNum;
    character.hitPoints = data.hitPoints;
    character.defaultHitPoints = data.hitPoints;
    character.attackPower = data.attackPower;
    character.defaultAttackPower = data.attackPower;
    character.counterAttackPower = data.counterAttackPower;
    return character;
}

var knightData = {
    name: "Knight",
    images: {
        idle: 'assets/images/knight/IDLE_000.png',
        attack: 'assets/images/knight/ATTACK_007.png',
        hurt: 'assets/images/knight/HURT_004.png',
        die: 'assets/images/knight/DIE_006.png'
    },
    imageNum: {
        idle: 7, attack:8, hurt: 6, die: 7
    },
    hitPoints: 120,
    attackPower: 8,
    counterAttackPower: 35,
}
var warriorData = {
    name: "Warrior",
    images: {
        idle: 'assets/images/warrior/1_IDLE_000.png',
        attack: 'assets/images/warrior/5_ATTACK_006.png',
        hurt: 'assets/images/warrior/6_HURT_002.png',
        die: 'assets/images/warrior/7_DIE_009.png'
    },
    imageNum: {
        idle: 5, attack:5, hurt: 5, die: 6
    },
    hitPoints: 120,
    attackPower: 8,
    counterAttackPower: 35
};
var trollData = {
    name: "Troll",
    images: {
        idle: 'assets/images/troll/IDLE_000.png',
        attack: 'assets/images/troll/ATTAK_004.png',
        hurt: 'assets/images/troll/HURT_004.png',
        die: 'assets/images/troll/DIE_006.png'
    },
    imageNum: {
        idle: 7, attack:7, hurt: 7, die: 7
    },
    hitPoints: 180,
    attackPower: 5,
    counterAttackPower: 25
};
var orcData = {
    name: "Orc",
    images: {
        idle: 'assets/images/orc/IDLE_000.png',
        attack: 'assets/images/orc/ATTAK_005.png',
        hurt: 'assets/images/orc/HURT_004.png',
        die: 'assets/images/orc/DIE_006.png'
    },
    imageNum: {
        idle: 7, attack:7, hurt: 7, die: 7
    },
    hitPoints: 100,
    attackPower: 25,
    counterAttackPower: 5
};




var knight = createCharacter(characterBase, knightData)
//knight.role = 'player';
var orc = createCharacter(characterBase, orcData)
//orc.role = 'enemy';
var troll = createCharacter(characterBase, trollData)
var warrior = createCharacter(characterBase, warriorData)

function initialize() {
    $('#attackButton').hide();

    //$("#charactersStartArea").append(createCharacterCard(knight))
    //$("#charactersStartArea").append(createCharacterCard(orc))
    $("#characterSelectArea")
        .append(createCharacterCard(knight))
        .append(createCharacterCard(orc))
        .append(createCharacterCard(troll))
        .append(createCharacterCard(warrior))



}
initialize();
$("#attackButton").click(function () {
    //attack();
    timedAttack();
    $("#attackButton").hide();
    setTimeout(function () {
        $("#attackButton").show();
    }, 500)
})
$("#restartButton").click(function () {
    reset();
})
$('.character-cont').on('click', function () {
    if (phase === 0) {
        selectPlayer($(this).attr('data-char'));

        changePhase(1);
    } else if (phase === 1) {
        if ($(this).attr('data-char') !== player.name) {
            selectEnemy($(this).attr('data-char'));
            $('#attackButton').show();

            changePhase(2);
        }

    }
});


// render 
function createCharacterCard(character) {
    var container = $('<div>', {
        class: "character-cont",
        id: character.name + '-cont',
        "data-char": character.name
    })
    var role = "";
    if (character.role !== undefined) { role = character.role };
    var card = $('<div>', {
        class: "character-card " + role,
        id: character.name
    }).appendTo(container);

    $('<img>', {
        class: "character-img",
        alt: character.name,
        src: character.images.idle
    }).appendTo(card);

    var info = $('<div>', { class: "character-info" }).appendTo(card);

    $('<span>', { class: "character-name" }).text(character.name).appendTo(info);
    //$('<div>', { class: "character-hitpoints" }).text("HP:" + character.hitPoints).appendTo(info);

    var hpShell = $('<div>', { class: "healthbar-shell" }).appendTo(info);
    $('<div>', { class: "healthbar-value" }).text("HP:" + character.hitPoints).appendTo(hpShell);

    if (character.role === 'player') {
        $('<div>', { class: "character-attack", style: 'display:inline-block'  }).text("Attk:" + character.attackPower ).appendTo(info)
    } else if (character.role === 'enemy') {
        $('<div>', { class: "character-attack", style: 'display:inline-block'  }).text("Counter: " + character.counterAttackPower ).appendTo(info)
    } else {
        $('<div>', { class: "character-attack", style: 'display:inline-block' }).text("Attk: " + character.attackPower ).appendTo(info)
        $('<div>', { class: "character-attack", style: 'display:inline-block'  }).text("Counter: " + character.counterAttackPower ).appendTo(info)
    }

    
    return container;
}
function moveAnimate(element, newParent) {
    //https://stackoverflow.com/questions/907279/jquery-animate-moving-dom-element-to-new-parent
    console.log('Moved', element, "to", newParent);
    element = $(element);
    newParent = $(newParent);

    var oldOffset = element.offset();
    element.appendTo(newParent);
    var newOffset = element.offset();

    var temp = element.clone().appendTo('body');
    temp.css({
        'position': 'absolute',
        'left': oldOffset.left,
        'top': oldOffset.top,
        'z-index': 1000
    });
    element.hide();
    temp.animate({ 'top': newOffset.top-80, 'left': newOffset.left }, 'slow', function () {
        element.show();
        temp.remove();
    });
};


// STAGE
var phases = ['Select your Character', 'Choose your enemy', 'FIGHT', 'Results']
var phase = 0;
var characters = [];
var player = null; //knight
var enemy = null; //orc

function selectPlayer(playerName) {
    console.log('select player ' + playerName)
    player = window[playerName.toLowerCase()]
    player.role = 'player';
    $('#' + playerName).addClass('player');
    movePlayerToAttackerArea()
};
function selectEnemy(enemyName) {
    console.log('select enemy ' + enemyName)
    enemy = window[enemyName.toLowerCase()]
    enemy.role = 'enemy';
    $('#' + enemyName).addClass('enemy');
    moveEnemyToDefenderArea();
};
function removeCharacter(name) {
    $("#" + name + '-cont').fadeOut(300, function () {
        $(this).remove();
    });
}

function reset() {
    changePhase(0);
    player = null;
    enemy = null;

    removeCharacter('Knight');
    removeCharacter('Orc');
    removeCharacter('Troll');
    removeCharacter('Warrior');

    knight = createCharacter(characterBase, knightData)
    orc = createCharacter(characterBase, orcData)
    troll = createCharacter(characterBase, trollData)
    warrior = createCharacter(characterBase, warriorData)

    $("#characterSelectArea")
        .append(createCharacterCard(knight))
        .append(createCharacterCard(orc))
        .append(createCharacterCard(troll))
        .append(createCharacterCard(warrior))


    $('.character-cont').on('click', function () {
        if (phase === 0) {
            selectPlayer($(this).attr('data-char'));

            changePhase(1);
        } else if (phase === 1) {
            if ($(this).attr('data-char') !== player.name) {
                selectEnemy($(this).attr('data-char'));
                $('#attackButton').show();

                changePhase(2);
            }

        }
    });
};



function timedAttack() {
    //attack
    enemy.hitPoints -= player.attackPower;
    player.attackPower += player.defaultAttackPower;

    console.log(player.attackPower)
    if (enemy.hitPoints > 0) {
        player.hitPoints -= enemy.counterAttackPower;
        player.attackAnim(); //500
        enemy.defAnim();//500

        //counter 
        setTimeout(function () {
            console.log('countered')
            enemy.attackAnim('left');
            if (player.hitPoints > 0) {
                player.defAnim("left")
            } else {
                player.dieAnim('left');
                //removeCharacter(player.name);
                //player = null;
                //phase++;
                $('#attackButton').hide();
            }
        }, 500)
    } else {
        player.attackAnim()
        enemy.dieAnim();
        //removeCharacter(enemy.name);
        //enemy = null;

        changePhase(1);
    }

    //animations
    setTimeout(function () {
        enemy.updateInfo()
        if (enemy.hitPoints <= 0) {
            console.log('enemy died')
            removeCharacter(enemy.name);
            enemy = null;
            if ($('#characterSelectArea').html() === '') {

                changePhase(3);
                alert("YOU WIN")
            } else {

                changePhase(1);
            }
        }
    }, 200)
    setTimeout(function () {
        player.updateInfo()
        if (player.hitPoints <= 0) {
            console.log('player died')
            removeCharacter(player.name);
            player = null;
            phase = 4;
            alert('YOU LOSE')
        }
    }, 700)
}

function changePhase(newPhase) {
    phase = newPhase;
    console.log( 'new phase:',phases[newPhase] )
    $('#header').html( $('<h1>').text(phases[newPhase]) )
}

changePhase(0);


//function moveCharactersToEnemySelect() { }
function movePlayerToAttackerArea() {
    if ($("#" + player.name + '-cont').parent().attr("id") !== "attackerArea") {
        moveAnimate("#" + player.name + '-cont', "#attackerArea");
    }
}
function moveEnemyToDefenderArea() {
    if ($("#" + enemy.name + '-cont').parent().attr("id") !== "defenderArea") {
        moveAnimate("#" + enemy.name + '-cont', "#defenderArea");
    }
}