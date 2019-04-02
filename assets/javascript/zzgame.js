/*
var warrior = {
    name: "Warrior",
    images: {
        idle: 'assets/images/warrior/1_IDLE_000.png',
        attack: 'assets/images/warrior/5_ATTACK_006.png',
        hurt: 'assets/images/warrior/6_HURT_002.png',
        die: 'assets/images/warrior/7_DIE_009.png'
    },
    hitPoints: 120,
    attackPower: 8,
    counterAttackPower: 35
};
var troll = {
    name: "Troll",
    images: {
        idle: 'assets/images/troll/IDLE_000.png',
        attack: 'assets/images/troll/ATTAK_004.png',
        hurt: 'assets/images/troll/HURT_004.png',
        die: 'assets/images/troll/DIE_006.png'
    },
    hitPoints: 180,
    attackPower: 5,
    counterAttackPower: 25
};
var knight = {
    name: "Knight",
    images: {
        idle: 'assets/images/knight/_IDLE_000.png',
        attack: 'assets/images/knight/ATTACK_007.png',
        hurt: 'assets/images/knight/_HURT_004.png',
        die: 'assets/images/knight/_DIE_006.png'
    },
    hitPoints: 150,
    attackPower: 15,
    counterAttackPower: 20
};
var orc = {
    name: "Orc",
    images: {
        idle: 'assets/images/orc/IDLE_000.png',
        attack: 'assets/images/orc/ATTAK_005.png',
        hurt: 'assets/images/orc/HURT_004.png',
        die: 'assets/images/orc/DIE_006.png'
    },
    hitPoints: 100,
    attackPower: 25,
    counterAttackPower: 5
};

*/

var knight = {
    role: "player",
    name: "Knight",
    images: {
        idle: 'assets/images/knight/_IDLE_000.png',
        attack: 'assets/images/knight/ATTACK_007.png',
        hurt: 'assets/images/knight/_HURT_004.png',
        die: 'assets/images/knight/_DIE_006.png'
    },
    hitPoints: 120,
    defaultHitPoints: 120,
    attackPower: 8,
    defaultttackPower: 8,
    counterAttackPower: 35,
    attackAnim: function () {
        var refer = this;
        $("#" + this.name).find("img").eq(0).attr('src', refer.images.attack)
            .animate({ left: "+=200" }, 200)
            .animate({ left: '-=200' }, 300)
            .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
    },
    defAnim: function () {
        var refer = this;
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0).attr('src', refer.images.hurt)
                .animate({ left: "+=100" }, 200)
                .animate({ left: '-=100' }, 150)
                .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
        }, 200)

    },
    updateInfo: function () {
        $('#' + this.name).find(".character-hitpoints").text(this.hitPoints)
        $('#' + this.name).find(".character").text(this.attackPower)
    },
    removeHealth: function () {
        $('#' + this.name).find(".healthBarValue").css('width', (this.hitPoints / this.defaultHitPoints) + '%')
        $('#' + this.name).find(".healthBarValue").text(this.hitPoints)
    }
}

var orc = {
    role: "enemy",
    name: "orc",
    images: {
        idle: 'assets/images/orc/IDLE_000.png',
        attack: 'assets/images/orc/ATTAK_005.png',
        hurt: 'assets/images/orc/HURT_004.png',
        die: 'assets/images/orc/DIE_006.png'
    },
    hitPoints: 100,
    defaultHitPoints: 100,
    attackPower: 8,
    defaultttackPower: 8,
    counterAttackPower: 35,
    attackAnim: function () {
        var refer = this;
        $("#" + this.name).find("img").eq(0).attr('src', refer.images.attack)
            .animate({ left: "+=200" }, 200)
            .animate({ left: '-=200' }, 300)
            .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
    },
    defAnim: function () {
        var refer = this;
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0).attr('src', refer.images.hurt)
                .animate({ left: "+=100" }, 200)
                .animate({ left: '-=100' }, 150)
                .queue(function (next) { $(this).attr('src', refer.images.idle); next() })
        }, 200)

    },
    dieAnim: function () {
        var refer = this;
        setTimeout(function () {
            $('#' + refer.name)//.delay(500)
                .find("img").eq(0).attr('src', refer.images.hurt)
                .animate({ left: "+=100" }, 200)
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
    updateInfo: function () {
        $('#' + this.name).find(".character-hitpoints").text(this.hitPoints)
        $('#' + this.name).find(".character").text(this.attackPower)
        this.removeHealth();
    },
    removeHealth: function () {
        $('#' + this.name).find(".healthbar-value").css('width', (this.hitPoints / this.defaultHitPoints) * 100 + '%')
        $('#' + this.name).find(".healthbar-value").text(this.hitPoints)
        console.log('lost hp', (this.hitPoints / this.defaultHitPoints) * 100)
    }
}

// loop

function initialize() {
    //$('#attackButton').hide();
    $("#charactersStartArea").append(createCharacterCard(knight))
    $("#charactersStartArea").append(createCharacterCard(orc))
}
initialize();
$("#attackButton").click(function () {
    attack();
})
$("#restartButton").click(function () {
    reset();
})


// render 
function createCharacterCard(character) {
    var container = $('<div>').addClass("character-cont");
    var card = $('<div>', {
        class: "character-card " + character.role,
        id: character.name
    }).appendTo(container);

    $('<img>', {
        class: "character-img",
        alt: character.name,
        src: character.images.idle
    }).appendTo(card);

    var info = $('<div>', { class: "character-info" }).appendTo(card);

    $('<div>', { class: "character-name" }).text(character.name).appendTo(info);
    $('<div>', { class: "character-hitpoints" }).text("HP:" + character.hitPoints).appendTo(info);


    if (character.role === 'player') {
        $('<p>', { class: "character-attack" }).text("Attack: " + character.attackPower).appendTo(info)
    } else if (character.role === 'enemy') {
        $('<p>', { class: "character-attack" }).text("Counter Attack: " + character.counterAttackPower).appendTo(info)
    } else {
        $('<p>', { class: "character-attack" }).text("Attack: " + character.attackPower).appendTo(info)
        $('<p>', { class: "character-attack" }).text("Counter Attack: " + character.counterAttackPower).appendTo(info)
    }

    var hpShell = $('<div>', { class: "healthbar-shell" }).appendTo(info);
    $('<div>', { class: "healthbar-value" }).appendTo(hpShell);
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
    temp.animate({ 'top': newOffset.top, 'left': newOffset.left }, 'slow', function () {
        element.show();
        temp.remove();
    });
};




// STAGE
var phase = 0;
var characters = [];
var player = knight;//null;
var enemy = orc;//null;

function selectPlayer(playerName) {

};
function selectEnemy(enemyName) {

};
function reset() {
    //this.phase = 0;
    //this.player = null;
    //this.enemy = null;
    //this.characters = $.extend(true, [], charactersDefault);
};




function attack() {
    //if counter, player.countered()

    enemy.hitPoints -= player.attackPower;
    player.attackPower += player.defaultttackPower;
    if (enemy.hitPoints > 0) {
        player.hitPoints -= enemy.counterAttackPower;

        //anim
        player.attackAnim();
        enemy.defAnim();
    } else {
        player.attackAnim()
        enemy.dieAnim();
    }



    enemy.updateInfo();
    player.updateInfo()
};





function removeCharacter(name) {
    $("#" + name).fadeOut(300, function () {
        $(this).remove();
    });
}
function moveCharactersToEnemySelect() { }
function moveEnemyToDefenderArea() { }






