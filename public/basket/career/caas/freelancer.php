<?php 
session_start();
$path=$_SERVER['DOCUMENT_ROOT'];
include("$path/nav.php");
include ('../services_controller.php');
$services= new Services();

?>



<div class="container">
   
  
       <?php

       $services->fr_fetched_projects("php");

       ?>
    

</div>

<script>
function copyProposal() {
    /* Get the text field */
    var copyText = document.getElementById("proposal");


    /* Select the text field */
    copyText.select();

    copyText.setSelectionRange(0, 99999);
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);


}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function copyGithubLink() {
    /* Get the text field */

    var copyText = document.getElementById("myInput2");

    /* Select the text field */
    copyText.select();

    copyText.setSelectionRange(0, 999999999999); /* For mobile devices */

    /* Copy the text inside the text field */

    navigator.clipboard.writeText(copyText.value);
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}