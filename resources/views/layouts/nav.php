<!DOCTYPE html>
<html>
<head>
<title>Klabo</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<style>
html, body, h1, h2, h3, h4, h5 {font-family: "Open Sans", sans-serif}
</style>
<script>
// Accordion
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else {
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className =
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
</script>
</head>
<body class="w3-theme-l5">

<!-- Navbar -->
<div class="w3-top">
 <div class="w3-bar w3-theme w3-left-align w3-large">
  <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large w3-theme-d4 w3-left"><i class="fa fa-home w3-margin-right"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white  w3-left" title="Account Settings">Teams</a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white  w3-left" title="Account Settings">Project</a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white  w3-left" title="Account Settings">Reports</a>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white  w3-left" title="Account Settings">KDS</a>





  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white  w3-right" title="News"><i class="fa fa-certificate"></i></a>


  <input type="text" name="search" placeholder="Search.." class="w3-bar-item w3-input w3-border w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" style="width:200px">


  <div class="w3-dropdown-hover w3-hide-small w3-right">
    <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-user"></i></button>
    <div class="w3-dropdown-content w3-card-4 w3-bar-block" style="width:300px">

      <a href="#" class="w3-bar-item w3-button">User Profile</a>
      <a href="#" class="w3-bar-item w3-button">Email</a>
      <hr>
      <div class="m-4">
    <div class="btn-group">
        <input type="checkbox" class="btn-check" name="options" id="check1" autocomplete="off" checked>
        <label class="btn btn-outline-primary" for="check1">Online</label>

        <input type="checkbox" class="btn-check" name="options" id="check2" autocomplete="off">
        <label class="btn btn-outline-primary" for="check2">Busy </label>

    </div>
</div>
      <a href="#" class="w3-bar-item w3-button">Personal & Settings</a>
      <a href="#" class="w3-bar-item w3-button">Email Preferences</a>
      <a href="#" class="w3-bar-item w3-button">Help</a>
    
      <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
    </div>
  </div>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white  w3-right" title="Messages"><i class="material-icons">message</i></a>
  <div class="w3-dropdown-hover w3-hide-small w3-right">
    <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>
    <div class="w3-dropdown-content w3-card-4 w3-bar-block" style="width:300px">
      <a href="#" class="w3-bar-item w3-button">One new friend request</a>
      <a href="#" class="w3-bar-item w3-button">John Doe posted on your wall</a>
      <a href="#" class="w3-bar-item w3-button">Jane likes your post</a>
    </div>
  </div>

 </div>

</div>

<!-- Navbar on small screens -->
<div id="navDemo" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Teams</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Project</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Reports</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">KDS</a>
</div>

<!-- Page Container -->
<div class="w3-container w3-content" style="max-width:1400px;margin-top:80px">
