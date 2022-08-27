
$("head").append(`<link type="text/css" rel="stylesheet" href="../materialize.min.css"  media="screen,projection" />
<script type="text/javascript" src="../materialize.min.js"></script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`)

$(document).ready(function() {
    })

    var IfFullscreen = false

    function mobilecheck() {
       if( navigator.userAgent.match(/iPhone/i)
           || navigator.userAgent.match(/webOS/i)
           || navigator.userAgent.match(/Android/i)
           || navigator.userAgent.match(/iPad/i)
           || navigator.userAgent.match(/iPod/i)
           || navigator.userAgent.match(/BlackBerry/i)
           || navigator.userAgent.match(/Windows Phone/i)
           ){
               return true;
           }
           else {
               return false;
           }
     };

     $(document).ready(function() {
          $("body").append(`
          <a title="Cliquer içi pour revenir à l'aceuille" class="btn-floating btn-large red" href="../" style="float: right;"><i class="material-icons">home</i></a>
          <iframe class="show-on-large" frameborder="0" src="https://itch.io/embed/1563462?bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=000000" width="552" height="167"><a href="https://kiriox.itch.io/door">Enter the door by Kiriox</a></iframe>
          <a title="Cliquer içi pour passer en pleine écran" class="btn-floating btn-large red" onclick="fullscreen()"><i class="material-icons" id="fullscreenButton">fullscreen</i></a>
          <p style="position: fixed;bottom: 0;right: 0;margin: 15px;color: white;" >alpha 0.0.3.2</p>
          `)

         if(mobilecheck() == true){
           alert("Pour une meilleur expérience de jeu sur mobile nous vous conseillons de jouer en orientant votre téléphone à la verticale et de passer en mode pleine écran en apuyant sur le bouton en haut à gauche. Ci le jeu ne s'affiche pas appuier sur le bouton pleine écran ça devrais résoudre le problème")
           $(".show-on-large").hide();
     }})

           var elem = document.documentElement;

           /* View in fullscreen */
           function openFullscreen() {
           if (elem.requestFullscreen) {
               elem.requestFullscreen();
           } else if (elem.webkitRequestFullscreen) { /* Safari */
           }}

           /* Close fullscreen */
           function closeFullscreen() {
           if (document.exitFullscreen) {
               document.exitFullscreen();
           } else if (document.webkitExitFullscreen) { /* Safari */
               document.webkitExitFullscreen();
           } else if (document.msExitFullscreen) { /* IE11 */
               document.msExitFullscreen();
           }
           }

           function fullscreen(){
               if(IfFullscreen == true){
                   closeFullscreen()
                   IfFullscreen = false
                   document.getElementById("fullscreenButton").textContent = "fullscreen"

               }else{
                   openFullscreen()
                   IfFullscreen = true
                   document.getElementById("fullscreenButton").textContent = "fullscreen_exit"
               }
           }

