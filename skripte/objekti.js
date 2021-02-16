  
  /*Window objekat-funkcija otvara link u novom prozoru pretrazivaca */
  function prikaziSajt() {
    window.open("https://www.youtube.com/channel/UCO5ujNeWRIwP4DbCZqZWcLw");
  }

 /* Funkcija vraca element sa id "telefon", 
 Style objekat sa visibility svojstvom omogucava da se prikaze ili sakrije element, tj. broj telefona. 
 Klikom na dugme "okida se funkcija" */ 
  function sakrijTelefon() {
    document.getElementById("telefon").style.visibility = "hidden"; 
  }
  
  function prikaziTelefon() {
    document.getElementById("telefon").style.visibility = "visible"; 
  }
   

/*Date objekat kreiramo uz pomoc konstruktora. Pritiskon da dugme, 
realizuje se dogadjaj koji okida funkciju koja vraca trenutni datum i vreme */
  function prikaziDatumVreme(){

    let datum = new Date();
    document.getElementById("datumVreme").innerHTML = datum;
  }
     