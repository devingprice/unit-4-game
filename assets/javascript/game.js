var charactersDefault = charactersDefault = [
    {
        name: "Uno",
        image: "data:image/png;base64,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",
        hitPoints: 120,
        attackPower: 8,
        counterAttackPower: 35
    },
    {
        name: "Dos",
        image: "http://www.geeksays.com/wp-content/uploads/2015/12/uno-draw-two.jpg",
        hitPoints: 180,
        attackPower: 5,
        counterAttackPower: 25
    },
    {
        name: "Tres",
        image: "data:image/png;base64,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",
        hitPoints: 150,
        attackPower: 15,
        counterAttackPower: 20
    },
    {
        name: "Quatro",
        image: "https://www.letsplayuno.com/pc/gw/20181213135916/img/video/card_4_fc0ce14.png",
        hitPoints: 100,
        attackPower: 25,
        counterAttackPower: 5
    }
]

$(document).ready(function () {
    console.log('ready')
    game.persistentInit()

    $(document).click(function () {
        game.persistentUpdate();
    })
});


var game = {
    initialize: function () {
        stage.initialize()
        appearanceController.render()
        controlsController.update()
        stage.showState()
    },
    update: function () {
        var check = stage.checkConditionsIfUpdateNeeded();
        appearanceController.render()
        controlsController.update()
        if (check) {
            game.update()
        }
    },
    persistentInit: function () {
        stage.initialize();
        appearanceController.persistentInit();
        controlsController.update();
    },
    persistentUpdate: function () {
        stage.checkConditionsIfUpdateNeeded();
        appearanceController.persistentRender();;
        controlsController.turnOffClicks();
        controlsController.update();
    }
}


var controlsController = {
    update: function () {
        if (stage.phase === 0) {
            this.addSelectCharacter();
        } else if (stage.phase === 1) {
            this.addSelectToEnemies();
        } else if (stage.phase === 2) {
            this.addAttack();
        }
        this.addRestart();
    },
    addSelectCharacter: function () {
        $(".characterCard").each(function () {
            $(this).click(function () {
                console.log('Action -> Select Player ' + this.id)
                stage.selectPlayer(this.id)

                stage.phase++;
                stage.showState();
            })
        })
    },
    addSelectToEnemies: function () {
        stage.characters.forEach(function (char) {
            $("#" + char.name).each(function () {
                $(this).click(function () {
                    console.log('Action -> Select Enemy ' + this.id)
                    stage.selectEnemy(this.id)
                    //stage.phase++;
                    stage.phase++;
                    stage.showState();
                })
            })

        })
    },
    turnOffClicks: function () {
        console.log('Logged -> Turned off clicks')
        $(".characterCard").each(function () {
            $(this).unbind('click')
        })
        $("#restartButton").unbind('click')
        $("#attackButton").unbind('click')
    },
    addRestart: function () {
        $("#restartButton").click(function () {
            console.log('Action -> Restart')
            appearanceController.renderClear();
            game.persistentInit();
            //stage.showState();
        })
    },
    addAttack: function () {
        $("#attackButton").click(function () {
            stage.attack();
            stage.showState();
        })
    }
}

var stage = {
    phases: ["characterSelect", "enemySelect", "fight", "results"],
    phase: 0,
    characters: [],
    player: null,
    enemy: null,
    initialize: function () {
        this.reset();
    },
    selectPlayer: function (playerName) {
        var index;
        for (var i = 0; i < this.characters.length; i++) {
            if (this.characters[i].name === playerName) {
                index = i;
            }
        }
        if (index >= 0) { // if(index) is false if index=0, i spend an hour looking for this
            this.player = this.characters[index];
            this.player.role = "player";
            this.player.baseAttackPower = this.player.attackPower;
            this.characters.splice(index, 1);

            appearanceController.moveCharactersToEnemySelect();
        }
    },
    selectEnemy: function (enemyName) {
        var index;
        for (var i = 0; i < this.characters.length; i++) {
            if (this.characters[i].name === enemyName) {
                index = i;
            }
        }
        if (index >= 0) {
            this.enemy = this.characters[index];
            this.enemy.role = "enemy";
            this.characters.splice(index, 1);

            appearanceController.moveEnemyToDefenderArea();
        }
    },
    attack: function () {
        var holder = this.player.attackPower;
        this.enemy.hitPoints -= this.player.attackPower;
        this.player.attackPower += this.player.baseAttackPower;

        appearanceController.shake(this.enemy.name)
        appearanceController.shake("Cinco");

        //counter
        if (this.enemy.hitPoints > 0) {
            this.player.hitPoints -= this.enemy.counterAttackPower;
        }
        console.log('88888888888888888888888888888888888888888888888888888888888888888888888888888888888888')
        console.log(this.player)
        console.log(this.player.name, 'attacked', this.enemy.name, 'for', holder, "leaving him with", this.enemy.hitPoints, 'hp and making players attack equal', this.player.attackPower)
    },
    reset: function () {
        this.phase = 0;
        this.player = null;
        this.enemy = null;
        this.characters = $.extend(true, [], charactersDefault);
    },
    checkConditionsIfUpdateNeeded: function () {
        if (this.player && this.player.hitPoints <= 0) {
            appearanceController.removePlayer(this.player.name);
            this.player = null;
            this.phase = 3;
            console.log('Stage has phase', this.phase)
            alert('You lose')
            return true;
        }

        if (this.enemy && this.enemy.hitPoints <= 0) {
            //alert('enemy killed')
            appearanceController.removeEnemy(this.enemy.name);
            this.enemy = null;


            console.log('removed enemy', this.characters.length, "left")
            if (this.characters.length > 0) {
                this.phase = 1;
                $("#attackButton").hide();
            } else {
                this.phase = 3;
                $("#attackButton").hide();
                alert('You win')
            }
            console.log('Stage has phase', this.phase)
            return true;
        }
        return false;
    },
    showState: function () {
        console.log('~~~~~~~~~~~~~~')
        console.log('Phase: ', this.phases[this.phase])
        console.log('Characters: ', this.characters)
        console.log('Player: ', this.player)
        console.log('Enemy: ', this.enemy)
        console.log('---------')
    }
}

var screen = {
    empty: function () {
        $('#header').empty();
        $('#charactersStartArea').empty();
        $('#enemiesSelectArea').empty();
        $('#defenderArea').empty();
        $("#buttonArea").empty();
    },
    setup: function () { },
    update: function () { },

    setHeader: function (text) {

    },
    createCharacterCard: function (character) { },
    moveCharactersToEnemySelect: function () {
        stage.characters.forEach(function (char) {
            if ($("#" + char.name).parent().attr("id") !== "enemiesSelectArea") {
                appearanceController.moveAnimate("#" + char.name, "#enemiesSelectArea");
            }
        })
    },
    moveEnemyToDefenderArea: function () {
        if ($("#" + stage.enemy.name).parent().attr("id") !== "defenderArea") {
            appearanceController.moveAnimate("#" + stage.enemy.name, "#defenderArea");
        }
    },
    removeCharacter: function (name) {
        $("#" + name).fadeOut(300, function () {
            $(this).remove();
        });
    },
    updatePlayerStats() {
        function updateStats(characterItem) {
            if (characterItem !== undefined && characterItem !== null) {
                $('#' + characterItem.name).find(".characterCard__name").text(characterItem.name)
                $('#' + characterItem.name).find(".characterCard__hitpoints").text('HP : ' + characterItem.hitPoints)
                if (characterItem.role === 'player') {
                    $('#' + characterItem.name).find(".characterCard__attack").text('AP : ' + characterItem.attackPower)
                } else if (characterItem.role === 'enemy') {
                    $('#' + characterItem.name).find(".characterCard__attack").text('AP : ' + characterItem.counterAttackPower)
                }

            }
        }
        stage.characters.map(function (char) { updateStats(char) });
        updateStats(stage.player);
        updateStats(stage.enemy);
    }

};

var appearanceController = {
    renderClear: function () {
        $('#header').empty();
        $('#charactersStartArea').empty();
        $('#enemiesSelectArea').empty();
        $('#defenderArea').empty();
        $("#buttonArea").empty();
    },
    createCharacterCard: function (character) {
        var roleClass = '';
        if (character.role) {
            roleClass = character.role;
        }

        var attackTag = '<p class="characterCard__attack">Attack Power : ' + character.attackPower + '</p><p class="characterCard__attack">Counter Attack Power : ' + character.counterAttackPower + '</p>';
        //overwrite attackTag if character has a role
        if (character.role === "player") {
            attackTag = '<p class="characterCard__attack">Current Attack Power : ' + character.attackPower + '</p>';
        } else if (character.role === "enemy") {
            attackTag = '<p class="characterCard__attack">Counter Attack Power : ' + character.counterAttackPower + '</p>';
        }


        var html = '<div class="characterCard ' + roleClass + '" id="' + character.name + '">' +
            '<img src="' + character.image + '" class="characterCard__image" alt="' + character.name + '">' +
            '<div class="characterCard__info">' +
            '<p class="characterCard__name">Name : ' + character.name + '</p>' +
            '<p  class="characterCard__hitpoints">HitPoints : ' + character.hitPoints + '</p>' +
            attackTag +
            '</div></div>';
        return html;
    },
    render: function () {
        console.log('AC recieved phase', stage.phase)

        this.renderClear();
        if (stage.phase === 0) {
            // all in start
            stage.characters.forEach(function (char) {
                $('#charactersStartArea').append(appearanceController.createCharacterCard(char));
            })
        } else if (stage.phase === 1) {

            //player in start, rest in select
            if (stage.player) {
                $('#charactersStartArea').append(this.createCharacterCard(stage.player));
            }
            stage.characters.forEach(function (char) {
                $('#enemiesSelectArea').append(appearanceController.createCharacterCard(char));
            })
        } else if (stage.phase === 2) {

            $('#fightStage').css({ display: "flex", "flex-direction": "row", "justify-content": "center" });

            //player in start, enemy in defender, rest in select
            if (stage.player) {
                $('#charactersStartArea').append(this.createCharacterCard(stage.player));
            }
            if (stage.enemy) {
                $('#defenderArea').append(this.createCharacterCard(stage.enemy));
            }
            stage.characters.forEach(function (char) {
                $('#enemiesSelectArea').append(appearanceController.createCharacterCard(char));
            })

            var attackButton = $('<button>', { id: "attackButton" }).text("Attack");
            $("#buttonArea").append(attackButton);
        }


        var restartButton = $('<button>', { id: "restartButton" }).text("Restart");
        $("#buttonArea").append(restartButton);

        $('#header').text(stage.phases[stage.phase]);
    },
    shake: function (id) {
        console.log('shake', id, "#" + id)
        //$("#"+id).delay(100).shake() //this works on things not being refreshed
    },
    persistentInit: function () {
        stage.characters.forEach(function (char) {
            $('#charactersStartArea').append(appearanceController.createCharacterCard(char));
        })

        var restartButton = $('<button>', { id: "restartButton", class: "btn btn-outline-secondary" }).text("Restart");
        $("#buttonArea").append(restartButton);
        var attackButton = $('<button>', { id: "attackButton", class: "btn btn-danger" }).text("Attack");
        $("#buttonArea").append(attackButton.hide());
    },
    moveCharactersToEnemySelect() {
        stage.characters.forEach(function (char) {
            if ($("#" + char.name).parent().attr("id") !== "enemiesSelectArea") {
                appearanceController.moveAnimate("#" + char.name, "#enemiesSelectArea");
            }
        })
    },
    removeEnemy(name) {
        $("#" + name).fadeOut(300, function () {
            $(this).remove();
        });
    },
    removePlayer(name) {
        $("#" + name).fadeOut(300, function () {
            $(this).remove();
        });
    },
    moveEnemyToDefenderArea() {
        if ($("#" + stage.enemy.name).parent().attr("id") !== "defenderArea") {
            appearanceController.moveAnimate("#" + stage.enemy.name, "#defenderArea");
        }
    },
    updatePlayerStats() {
        function updateStats(characterItem) {
            if (characterItem !== undefined && characterItem !== null) {
                $('#' + characterItem.name).find(".characterCard__name").text(characterItem.name)
                $('#' + characterItem.name).find(".characterCard__hitpoints").text('HP : ' + characterItem.hitPoints)
                if (characterItem.role === 'player') {
                    $('#' + characterItem.name).find(".characterCard__attack").text('AP : ' + characterItem.attackPower)
                } else if (characterItem.role === 'enemy') {
                    $('#' + characterItem.name).find(".characterCard__attack").text('AP : ' + characterItem.counterAttackPower)
                }

            }
        }
        stage.characters.map(function (char) { updateStats(char) });
        updateStats(stage.player);
        updateStats(stage.enemy);
    },
    persistentRender: function () {
        //player in start, rest in select

        if (stage.phase === 1) {
            //player in start, rest in select

        } else if (stage.phase === 2) {
            $('#fightStage').css({ display: "flex", "flex-direction": "row", "justify-content": "center" });

            //player in start, enemy in defender, rest in select, show attack button
            this.updatePlayerStats()
            $("#attackButton").show();
        }

    },
    moveAnimate: function (element, newParent) {
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
    },
    test: function () {
        this.renderClear();
        this.persistentInit();
        this.persistentRender();
    }
}

/*
healthbar
https://codepen.io/kenbarrios/pen/JdzdzL
https://codepen.io/AndrewMcDowe/pen/akWBKj?html-preprocessor=slim 

Currently I'm redrawing every frame
This works well to get it working but when I want to animate the css it's not working

use this for targetting 
https://codepen.io/ThibaultJanBeyer/pen/RRPQEX
*/

/*
$.fn.shake = function() {
    this.each(function(i) {
        $(this).css({
            "position": "absolute"
        });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({
                left: 43
            }, 10).animate({
                left: 23
            }, 50).animate({
                left: 23
            }, 10).animate({
                left: 13
            }, 50).animate({
                left: 43
            }, 50).animate({
                left: 33
            }, 50).animate({
                left: 43
            }, 50);
        }
    });
    return this;
}
*/

/*
function(){
        this.frameContainer.className = "";
        window.requestAnimationFrame(function(time) {
            window.requestAnimationFrame(function(time) {
                document.getElementById('frame-container').className = "slide-sideways";
            });
        });
        this.count++;
    }
*/

/* http://css3.bradshawenterprises.com/cfimg/
$(".spin-button").on("click", function(){
      captainPlanet.animate(
        { deg: 180 },
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotateY(' + now + 'deg)' });
          }
        }
      )
    }
*/


// http://css3.bradshawenterprises.com/cfimg/
function attkAnim(id) {
    $(id).animate({ left: "+= 200" }, 200)
        .animate({ left: '-=200' }, 300)
}
function defAnim(id) { // hit then counter or die 
    $(id).delay(200)
        .animate({ left: "+= 100" }, 100)
        .animate({ left: '-=100' }, 150)
}
//hide show attack button on delay to allow animations
// deathAnim instead of defanim
// summon / grave anims

//add attack icon to button
// round 2

/* Rather than add click handler to every dom
Made dom have data-name and that runs function click(name) 
click function checks the round and only does things if correct click
*/