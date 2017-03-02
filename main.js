var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.r = "255";
  $scope.g = "255";
  $scope.b = "255";
  var vals = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250]
  var valR = Math.floor(Math.random()*11)
  var valG = Math.floor(Math.random()*11)
  var valB = Math.floor(Math.random()*11)
  var tryR = vals[valR]
  var tryG = vals[valG]
  var tryB = vals[valB]
  $scope.goalBox = {
    "height" : "8em",
    "width" : "14em",
    "border" : "1px solid black",
    "background-color" : "rgb(" + tryR + "," + tryG + "," + tryB + ")"
  }

  $scope.myObj = {
    "height" : "8em",
    "width" : "14em",
    "border" : "1px solid black",
    "background-color" : "rgb("+ $scope.r +","+$scope.g+","+$scope.b+")"
  }

  $('#redhint').hover(function() {
    if ($scope.r > tryR) {
      $('#redhint').text('Lower')
    }
    else if ($scope.r < tryR) {
      $('#redhint').text('Higher')
    }
    else {
      $('#redhint').text('Correct')
    }
  })

  $('#greenhint').hover(function() {
    if ($scope.g > tryG) {
      $('#greenhint').text('Lower')
    }
    else if ($scope.g < tryG) {
      $('#greenhint').text('Higher')
    }
    else {
      $('#greenhint').text('Correct')
    }
  })

  $('#bluehint').hover(function() {
    if ($scope.b > tryB) {
      $('#bluehint').text('Lower')
    }
    else if ($scope.b < tryB) {
      $('#bluehint').text('Higher')
    }
    else {
      $('#bluehint').text('Correct')
    }
  })
  $scope.colorChanger = function() {
      $scope.r = $("#red").val();
    $scope.g = $("#green").val();
    $scope.b = $("#blue").val();
    $scope.myObj = {
      "height" : "8em",
      "width" : "14em",
      "border" : "1px solid black",
      "background-color" : "rgb("+ $scope.r +","+$scope.g+","+$scope.b+")"
    }
    if($scope.r == tryR) {
    var RedCorrect = true;
    $("#red").css("background-color","#5DFC0A");
  }
  else {
    $("#red").css("background-color","#FFF");
    var RedCorrect = false;
  }
  if($scope.g == tryG) {
    $("#green").css("background-color","#5DFC0A");
    var GreenCorrect = true;
  }
  else {
    $("#green").css("background-color","#FFF");
    var GreenCorrect = false;
  }
  if($scope.b == tryB) {
    $("#blue").css("background-color","#5DFC0A");
    var BlueCorrect = true;
  }
  else {
    $("#blue").css("background-color","#FFF");
    var BlueCorrect = false;
  }
  if (RedCorrect && GreenCorrect && BlueCorrect) {
      $("#winner").css("display","block");
      $("#reloadButton").css("display","block");
  }
  }

  $("#red").keyup(function(){
    $('#redhint').text('(Hint)')
    $('#greenhint').text('(Hint)')
    $('#bluehint').text('(Hint)')
    $scope.r = $("#red").val();
    $scope.g = $("#green").val();
    $scope.b = $("#blue").val();
    $scope.myObj = {
      "height" : "8em",
      "width" : "14em",
      "border" : "1px solid black",
      "background-color" : "rgb("+ $scope.r +","+$scope.g+","+$scope.b+")"
    }
  });
  $("#green").keyup(function(){
    $('#redhint').text('(Hint)')
    $('#greenhint').text('(Hint)')
    $('#bluehint').text('(Hint)')
    $scope.r = $("#red").val();
    $scope.g = $("#green").val();
    $scope.b = $("#blue").val();
    $scope.myObj = {
      "height" : "8em",
      "width" : "14em",
      "border" : "1px solid black",
      "background-color" : "rgb("+ $scope.r +","+$scope.g+","+$scope.b+")"
    }
  });
  $("#blue").keyup(function(){
    $('#redhint').text('(Hint)')
    $('#greenhint').text('(Hint)')
    $('#bluehint').text('(Hint)')
    $scope.r = $("#red").val();
    $scope.g = $("#green").val();
    $scope.b = $("#blue").val();
    $scope.myObj = {
      "height" : "8em",
      "width" : "14em",
      "border" : "1px solid black",
      "background-color" : "rgb("+ $scope.r +","+$scope.g+","+$scope.b+")"
    }
  });
    
});
