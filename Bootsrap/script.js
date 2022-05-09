
//Tapahtumakäsittelijä
document.getElementById("submit").onclick = function () {
//Painiketta klikattu
//Lue input-sisältö
    let name = getElementById("name").value;
    //Jos kentässä sisältö
    if ( name.length > 0 ) {
    document.getElementById("succes").style.display = "block";
    //piilota danger alert
    document.getElementById("danger").style.display = "none";
    } else {
    //Jos ei
    document.getElementById("danger").style.display = "block";
    //piilota succes
    document.getElementById("succes").style.display = "none";
    }
    //peruuta formin lähetys
    return false;
}