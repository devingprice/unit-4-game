## Pseudocode

# Game Loop:
Character selection:
    Show character options with images
    Choose character by clicking image
    Move enemies to a different part of the screen
Enemy Selection:
    Choose enemy by clicking image
    Move chosen enemy to defender area
Fight:
    Attack Button appears
    Clicking attack button: damage enemy hp
        update enemy hp html
    Enemy counter attacks: damage player hp
        update player hp html
    If ( enemyHP <= 0 ) : remove enemy from defender area
        go back to enemy selection stage
    If ( playerHP <= 0 ) : go to lose screen
Results: 
    If ( enemyArray = empty) : show win
    If ( playerHP <= 0 ) : show lose
    Restart Button : go to character selection


# Variables
var playerCharacter;
    add currentAP = ap * (numberOfTimesPlayerAttacked +1)
var enemyArray = [
    {
        name, image, hp, ap, cap
    },
    ...
]

# On Screen
charactersStartArea
enemiesSelectArea
defenderArea

buttonArea
    AttackButton
    RestartButton