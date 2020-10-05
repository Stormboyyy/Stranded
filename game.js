var playerPositionX = 700, playerPositionY = 300, 
yeetEnergy, timerTime = 25, 
gamePaused = false, progression = 0,
scene = "islandArea1", CurrentCharecter = "boy";
var keysPressed = [0, 0, 0];
var cached
window.onkeydown = keysDown;
window.onkeyup = keysUp;
function keysDown(e){
    leaveZoom()
    if(e.keyCode == 68){
        keysPressed[1] = 1;
        if(CurrentCharecter == "boy"){
        cached.playerVar.src = "images/boy running right.gif"
        }
        if(CurrentCharecter == "girl"){
            cached.playerVar.src = "images/girl running right.gif"
        }
    }else{
    if(e.keyCode == 65){
        keysPressed[2] = 1;
        if(CurrentCharecter == "boy"){
        cached.playerVar.src = "images/boy running left.gif"
        }
        if(CurrentCharecter == "girl"){
            cached.playerVar.src = "images/girl running left.gif"
        }
    }
}
    if(e.keyCode == 32){
        keysPressed[3] = 1;
    }
    if(e.keyCode == 27){
        if(!gamePaused){
            pauseGame()}
            else{
            unPauseGame()
        }
    }
    if(e.keyCode == 87){
        interact()
    }
}
window.onblur = function() {
    keysPressed[1] = 0;
    keysPressed[2] = 0;
    keysPressed[3] = 0;
}
function keysUp(t){
    if(t.keyCode == 68){
        keysPressed[1] = 0;
        if(CurrentCharecter == "boy"){
            cached.playerVar.src = "images/idle boy animation.gif";
        }
        if(CurrentCharecter == "girl"){
            cached.playerVar.src = "images/idle girl.gif";
        }
    }
    if(t.keyCode == 65){
        keysPressed[2] = 0;
        if(CurrentCharecter == "boy"){
            cached.playerVar.src = "images/idle boy animation.gif";
        }
        if(CurrentCharecter == "girl"){
            cached.playerVar.src = "images/idle girl.gif";
        }
    }
    if(t.keyCode == 32){
        keysPressed[3] = 0;
    }
}
function changeCharecter(starting){
    if(CurrentCharecter == "boy"){
        cached.playerVar.src = "images/idle girl.gif";
        CurrentCharecter = "girl";
        cached.CurrentCharecterDisplay.innerHTML = CurrentCharecter;
        if(!starting){
        alert("current charecter: girl")}
    }else{
    if(CurrentCharecter == "girl"){
        cached.playerVar.src = "images/idle boy animation.gif";
        CurrentCharecter = "boy";
        cached.CurrentCharecterDisplay.innerHTML = CurrentCharecter;
        if(!starting){
        alert("current charecter: boy")}
    }}
}
function startMenu(){
     cached = {
        playerVar: document.getElementById("player"),
        sceneChanger: document.getElementById("currentScene"),
        LeftArrow: document.getElementById("left_arrow"),
        RightArrow: document.getElementById("right_arrow"),
        Clock: document.getElementById("clock"),
        Pausemenu: document.getElementById("pauseMenu"),
        OptionsMenu: document.getElementById("optionsMenu"),
        Startmenu: document.getElementById("StartMenu"),
        CurrentCharecterDisplay: document.getElementById("currentCharecter"),
        roomObjectsScene: document.getElementById("roomScene"),
        MapZoom: document.getElementById("mapZoom"),
        PaintingZoom: document.getElementById("paintingZoom"),
        FlaskZoom: document.getElementById("flaskZoom"),
        RadioZoom: document.getElementById("radioZoom"),
        LampZoom: document.getElementById("lampZoom"),
        ClockZoom: document.getElementById("clockZoom"),
        PlantZoom: document.getElementById("plantZoom"),
        BarrelZoom: document.getElementById("barrelZoom"),
        RemoveZoom: document.getElementById("removeZoom"),
        Scene2Layout: document.getElementById("scene2layout"),
        Crabbo: document.getElementById("crabbo"),
        Scene3Layout: document.getElementById("scene3layout"),
        PlaneScene: document.getElementById("planeScene"),
        RockZoom: document.getElementById("rockZoom"),
        CrabZoom: document.getElementById("crabboZoom"),
        TreeZoom: document.getElementById("treeZoom"),
        OilZoom: document.getElementById("oilZoom"),
        TikiZoom: document.getElementById("tikiZoom"),
        ShellZoom: document.getElementById("shellZoom"),
        PlaneZoom: document.getElementById("planeZoom"),
        MapItem: document.getElementById("mapItem"),
        PaintingItem: document.getElementById("paintingItem"),
        BarrelItem: document.getElementById("barrelItem"),
        FlaskItem: document.getElementById("flaskItem"),
        RadioItem: document.getElementById("radioItem"),
        LampItem: document.getElementById("lampItem"),
        ClockItem: document.getElementById("clockItem"),
        PlantItem: document.getElementById("plantItem"),
        RockItem: document.getElementById("rockItem"),
        TreeItem: document.getElementById("treeItem"),
        OilItem: document.getElementById("oilItem"),
        TikiItem: document.getElementById("tikiItem"),
        ShellItem: document.getElementById("shellItem"),
        SandMound: document.getElementById("sandMound"),
        EscapeBoat: document.getElementById("escapeBoat"),
        EndGamePicture: document.getElementById("endGamePicture"),
        Credits: document.getElementById("credits"),
        Controls: document.getElementById("controls")
    }
    cached.playerVar.style.display = "none";
    cached.sceneChanger.style.display = "none";
    cached.LeftArrow.style.display = "none";
    cached.RightArrow.style.display = "none";
    cached.Clock.style.display = "none";
    cached.Pausemenu.style.display = "none";
    cached.OptionsMenu.style.display = "none";
    cached.Startmenu.style.display = "block";
    cached.roomObjectsScene.style.display = "none";
    cached.MapZoom.style.display = "none";
    cached.PaintingZoom.style.display = "none";
    cached.FlaskZoom.style.display = "none";
    cached.RadioZoom.style.display = "none";
    cached.BarrelZoom.style.display = "none";
    cached.LampZoom.style.display = "none";
    cached.ClockZoom.style.display = "none";
    cached.PlantZoom.style.display = "none";
    cached.RemoveZoom.style.display = "none";
    cached.Scene2Layout.style.display = "none";
    cached.Scene3Layout.style.display = "none";
    cached.PlaneScene.style.display = "none";
    cached.RockZoom.style.display = "none";
    cached.CrabZoom.style.display = "none";
    cached.TreeZoom.style.display = "none";
    cached.OilZoom.style.display = "none";
    cached.TikiZoom.style.display = "none";
    cached.ShellZoom.style.display = "none";
    cached.PlaneZoom.style.display = "none";
    cached.EscapeBoat.style.display = "none";
    cached.SandMound.style.display = "none";
    cached.EndGamePicture.style.display = "none";
    cached.Credits.style.display = "none";
    cached.Controls.style.display = "none";
}
function start(){
    scene1Switch()
    cached.Startmenu.style.display = "none";
    cached.playerVar.style.display = "block";
    cached.Clock.style.display = "block";
    cached.sceneChanger.style.display = "block";
    gamePaused = false
    musicLoop()
    startTimer()
    gravity()
    setInterval(function(){
        if(!gamePaused){
            if(playerPositionX >350){
                if(playerPositionY>340){
                    resetLoop()
                }
            }
            cached.sceneChanger.style.display = "block";
            if(playerPositionX<1300){
        if(keysPressed[1] == 1){
        playerPositionX+=2
        }
    }
    if(playerPositionX>0){
    if(keysPressed[2] == 1){
        playerPositionX-=2}}
    cached.playerVar.style.top = playerPositionY;
    cached.playerVar.style.left = playerPositionX;
    if(yeetEnergy>0){
    if(scene == "islandArea1"){
        if(playerPositionX < 350){
            playerPositionY +=7;
        }
    }
    playerPositionY-=7;}
    yeetEnergy--;
    checkArrows()
    }}, 1)    
}
function checkArrows(){
    if(scene == "islandArea1"){
        cached.LeftArrow.style.display = "none";
    }else{
        cached.LeftArrow.style.display = "block";
    }
    if(scene == "islandArea4"){
        cached.RightArrow.style.display = "none";
    }else{
        cached.RightArrow.style.display = "block";
    }
    if(scene == "insideHouse"){
        cached.RightArrow.style.display = "none";
        cached.LeftArrow.style.display = "none";
    }
}
function gravity(){
    setInterval(function(){
        if(!gamePaused){
        if(playerPositionY<330){
        playerPositionY+=6.53333
        }else{
        if(keysPressed[3] == 1){
            yeetEnergy = 30;
            }
            if(progression != "done"){
        if(scene == "islandArea1"){
            if(playerPositionX < 350){
                playerPositionY+=6.53333
                if(playerPositionY > 600){
                        resetLoop()
                    }
                }
            }}
        }
    }}, 10)
}
function musicLoop(){
    setInterval(function(){
        document.getElementById("gameSong").play();
    }, 11400)
}
function startTimer(){
    setInterval(function(){
        if(timerTime>0){
            if(!gamePaused){
                cached.Clock.innerHTML = timerTime;
        timerTime--}
        }else{
        resetLoop()
        }
    }, 1000);
}
function resetLoop(){
    leaveZoom()
    timerTime = 20
    playerPositionX = 700;
    playerPositionY = 300;
    scene1Switch()
    cached.RightArrow.style.display = "block";
}
function rightArrow(){
    if(scene == "islandArea3"){
        scene4Switch()
    }
    if(scene == "islandArea2"){
        scene3Switch()
    }
    if(scene == "islandArea1"){
        scene2Switch()
    }
}
function leftArrow(){
    if(scene == "islandArea2"){
        scene1Switch()
    }
    if(scene == "islandArea3"){
        scene2Switch()
    }
    if(scene == "islandArea4"){
        scene3Switch()
    }
}
function credits(){
    cached.RemoveZoom.style.display = "block";
    cached.Credits.style.display = "block";
}
function scene1Switch(){
    cached.sceneChanger.src = "images/bgbeachwhouse.png"
    playerPositionX = 700;
    scene = "islandArea1"
    cached.roomObjectsScene.style.display = "none";
    cached.Scene2Layout.style.display = "none";
    cached.Scene3Layout.style.display = "none";
    cached.PlaneScene.style.display = "none";
    if(progression != "done"){
    cached.SandMound.style.display = "block";
}
    if(progression == "done"){
        cached.EscapeBoat.style.display = "block";
    }
}
function scene2Switch(){
    playerPositionX = 700;
    cached.sceneChanger.src = "images/scene2.png"
    cached.SandMound.style.display = "none";
    cached.EscapeBoat.style.display = "none";
    cached.Scene3Layout.style.display = "none";
    cached.Scene2Layout.style.display = "block";
    cached.PlaneScene.style.display = "none";
    scene = "islandArea2"
}
function scene3Switch(){
    playerPositionX = 700;
    cached.sceneChanger.src = "images/scene3.png"
    cached.Scene3Layout.style.display = "block";
    cached.Scene2Layout.style.display = "none";
    cached.PlaneScene.style.display = "none";
    scene = "islandArea3"
}
function scene4Switch(){
    playerPositionX = 300;
    cached.sceneChanger.src = "images/scene4.png"
    cached.Scene3Layout.style.display = "none";
    cached.PlaneScene.style.display = "block";
    cached.Scene2Layout.style.display = "none";
    scene = "islandArea4"
}
function sceneRoomSwitch(){
    playerPositionX = 350
    cached.sceneChanger.src = "images/room.png"
    cached.RightArrow.style.display = "none";
    cached.LeftArrow.style.display = "none";
    scene = "insideHouse";
    cached.roomObjectsScene.style.display = "block";
    cached.EscapeBoat.style.display = "none";
    cached.SandMound.style.display = "none";
}
function optionsMenu(){
    cached.Pausemenu.style.display = "none";
    cached.OptionsMenu.style.display = "block";
}
function controlsMenu(){
    cached.RemoveZoom.style.display = "block";
    cached.Controls.style.display = "block";
}
function pauseGame(){
gamePaused = true;
cached.playerVar.style.display = "none";
cached.sceneChanger.style.display = "none";
cached.RightArrow.style.display = "none";
cached.Pausemenu.style.display = "block";
cached.LeftArrow.style.display = "none";
cached.OptionsMenu.style.display = "none";
cached.MapItem.style.display = "none";
cached.OilItem.style.display = "none";
cached.BarrelItem.style.display = "none";
cached.LampItem.style.display = "none";
cached.RockItem.style.display = "none";
cached.TreeItem.style.display = "none";
cached.FlaskItem.style.display = "none";
cached.ClockItem.style.display = "none";
cached.PaintingItem.style.display = "none";
cached.PlaneScene.style.display = "none";
cached.PlantItem.style.display = "none";
cached.RadioItem.style.display = "none";
cached.TikiItem.style.display = "none";
cached.ShellItem.style.display = "none";
cached.Crabbo.style.display = "none";
cached.EscapeBoat.style.display = "none";
cached.SandMound.style.display = "none";
}
function unPauseGame(){
cached.playerVar.style.display = "block";
cached.Pausemenu.style.display = "none";
cached.LeftArrow.style.display = "block";
cached.RightArrow.style.display = "block";
cached.sceneChanger.style.display = "block";
gamePaused= false;
cached.Crabbo.style.display = "block";
cached.MapItem.style.display = "block";
cached.OilItem.style.display = "block";
cached.BarrelItem.style.display = "block";
cached.LampItem.style.display = "block";
cached.RockItem.style.display = "block";
cached.TreeItem.style.display = "block";
cached.FlaskItem.style.display = "block";
cached.ClockItem.style.display = "block";
cached.PaintingItem.style.display = "block";
cached.PlantItem.style.display = "block";
cached.RadioItem.style.display = "block";
cached.TikiItem.style.display = "block";
cached.ShellItem.style.display = "block";
if(progression != "done"){
    if(scene == "islandArea1"){
    cached.SandMound.style.display = "block"}
}
}
function returnToPause(){
    unPauseGame()
    pauseGame()
}
function interact(){
    if(scene == "islandArea1"){
        if(playerPositionX > 950){
            if(playerPositionX < 1100){
                sceneRoomSwitch();
            }
        }
    }
    if(scene == "insideHouse"){
        if(playerPositionX>100){
            if(playerPositionX<325){
                scene1Switch();
                playerPositionX = 1025
            }
        }
    }
}
function leaveZoom(){
    cached.RockZoom.style.display = "none";
    cached.CrabZoom.style.display = "none";
    cached.TreeZoom.style.display = "none";
    cached.OilZoom.style.display = "none";
    cached.TikiZoom.style.display = "none";
    cached.ShellZoom.style.display = "none";
    cached.PlaneZoom.style.display = "none";
    cached.MapZoom.style.display = "none";
    cached.PaintingZoom.style.display = "none";
    cached.FlaskZoom.style.display = "none";
    cached.RadioZoom.style.display = "none";
    cached.BarrelZoom.style.display = "none";
    cached.LampZoom.style.display = "none";
    cached.ClockZoom.style.display = "none";
    cached.PlantZoom.style.display = "none";
    cached.RemoveZoom.style.display = "none";
    cached.Credits.style.display = "none";
    cached.Controls.style.display = "none";
}
function mapClick(){
    cached.MapZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 0){progression++}
}
function clockClick(){
    if(progression>1){
    cached.ClockZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 2){progression++}
    }
}
function flaskClick(){
    if(progression>3){
    cached.FlaskZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 4){progression++}
    }
}
function radioClick(){
    if(progression>5){
    cached.RadioZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 6){progression++}
    }
}
function barrelClick(){
    if(progression>7){
    cached.BarrelZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 8){progression++}
    }
}
function lampClick(){
    if(progression>9){
    cached.LampZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 10){progression++}
    }
}
function paintingClick(){
    if(progression>11){
    cached.PaintingZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 12){progression++}
    }
}
function plantClick(){
    if(progression>13){
    cached.PlantZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 14){progression++}
    }
}
function rockClick(){
    if(progression>0){
    cached.RockZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 1){progression++}
    }
}
function crabClick(){
    if(progression>4){
    cached.Crabbo.src = "images/crabmad.png"
    cached.CrabZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 5){progression++}
    }
}
function treeClick(){
    if(progression>2){
    cached.TreeZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 3){progression++}
    }
}
function oilClick(){
    if(progression>6){
    cached.OilZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 7){progression++}
    }
}
function tikiClick(){
    if(progression>8){
    cached.TikiZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 9){progression++}
    }
}
function shellClick(){
    if(progression>12){
    cached.ShellZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 13){progression++}
    }
}
function planeClick(){
    if(progression>10){
    cached.PlaneZoom.style.display = "block";
    cached.RemoveZoom.style.display = "block";
    if(progression == 11){progression++}
    }
}
function sandClick(){
    if(progression>14){
        cached.SandMound.style.display = "none";
        cached.EscapeBoat.style.display = "block";
        progression = "done"
    }
}
function endGame(){
    if(CurrentCharecter == "girl"){
    cached.EndGamePicture.src = "images/epicendscenegirl.png";
    }
    if(CurrentCharecter == "boy"){
    cached.EndGamePicture.src = "images/epicendsceneboy.png";
    }
    pauseGame()
    cached.EndGamePicture.style.display = "block";
}
