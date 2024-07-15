// Función para mostrar el contenido de la pestaña inicial al cargar la página
function showTab(tabName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");
  
    // Ocultar todos los contenidos de las pestañas y remover la clase 'active' de los enlaces
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostrar el contenido de la pestaña seleccionada y agregar la clase 'active' al enlace correspondiente
    document.getElementById(tabName).style.display = "block";
    for (var i = 0; i < tablinks.length; i++) {
      if (tablinks[i].getAttribute('onclick').includes(tabName)) {
        tablinks[i].className += " active";
      }
    }
  }
  
  // Función para cambiar de pestaña al hacer clic en un enlace
  function openCity(evt, cityName) {
    showTab(cityName); // Mostrar la pestaña correspondiente
    evt.currentTarget.className += " active"; // Agregar la clase 'active' al enlace clicado
  }

  //filtrador
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer_tours = document.getElementById("myBtnContainer");
  var btns = btnContainer_tours.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }