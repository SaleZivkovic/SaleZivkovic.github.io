// Funkcija koja prikazuje poruku o gresci 
function prikazGreske(IdElementa, poruka) {
    document.getElementById(IdElementa).innerHTML = poruka;
}

// Funcija za validaciju forme
function validacijaForme() {
    // Uzimamo vrednosti iy polja forme  
    let zemlja = document.kontaktForma.zemlja.value;
    let pol = document.kontaktForma.pol.value;
 
    
	// Definisemo gresku promenljive 
    let zemljaGreska = polGreska = true;
    
//Mora se uneti ime u polje za unos imena
   let ime = document.forms["kontaktForma"]["ime"].value;
  if (ime == "") {
    alert("Morate upisati ime");
    return false;
  }
   
    // Vrsimo validaciju Select elementa Zemlja koji predstavlja padajucu listu
    if(zemlja == "Izaberi") {
        prikazGreske("zemljaGreska", "Izaberite zemlju");
    } else {
        prikazGreske("zemljaGreska", "");
       zemljaGreska = false;
    }
    
    // Vrsimo validaciju radio button-a pol
    if (pol == "") {
        prikazGreske("polGreska", "Izaberite pol");
    } else {
        prikazGreske("polGreska", "");
        polGreska = false;
    }
    
    // Sprecavamo da forma bude poslata ukoliko postoje neke greske
    if((zemljaGreska || polGreska) == true) {
       return false;
    } else {
    
     // Promenljiva sa podacima o izabranoj zemlji i polu
    
        let dataPreview = "Uneli ste: \n" + "Zemlja: " + zemlja + "\n" +  "Pol: " + pol + "\n";
        alert(dataPreview);
    }
}
  
  


 
 

