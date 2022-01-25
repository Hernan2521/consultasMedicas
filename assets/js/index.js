

 let Radiologia= [
    {
        HORA: "11:00", 
        ESPECIALISTA: "IGNACIO SCHULZ", 
        PACIENTE: "FRANCISCA ROJAS", 
        RUT: "9878782-1", 
        PREVISION: "FONASA"}, 
    {
        HORA: "11:30", 
        ESPECIALISTA: "FEDERICO SUBERCASEAUX", 
        PACIENTE: "PAMELA ESTRADA", 
        RUT: "15345241-3", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "15:00", 
        ESPECIALISTA: "FERNANDO WURTHZ", 
        PACIENTE: "ARMANDO LUNA", 
        RUT: "16445345-9", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "15:30", 
        ESPECIALISTA: "ANA MARIA GODOY", 
        PACIENTE: "MANUEL GODOY", 
        RUT: "17666419-0", 
        PREVISION: "FONASA"}, 
    {
        HORA: "16:00", 
        ESPECIALISTA: "PATRICIA SUAZO", 
        PACIENTE: "RAMON ULLOA", 
        RUT: "14989389-K", 
        PREVISION: "FONASA"}
    ]

let trauma = [
    {
        HORA: "8:00", 
        ESPECIALISTA: "MARIA PAZ ALTUZARRA", 
        PACIENTE: "PAULA SANCHEZ", 
        RUT: "15554774-5", 
        PREVISION: "FONASA"}, 
    {
        HORA: "10:00", 
        ESPECIALISTA: "RAUL ARAYA", 
        PACIENTE: "ANGÉLICA NAVAS", 
        RUT: "15444147-9", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "10:30", 
        ESPECIALISTA: "MARIA ARRIAGADA", 
        PACIENTE: "ANA KLAPP", 
        RUT: "17879423-9", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:00", 
        ESPECIALISTA: "ALEJANDRO BADILLA", 
        PACIENTE: "FELIPE MARDONES", 
        RUT: "1547423-6", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:30", 
        ESPECIALISTA: "CECILIA BUDNIK", 
        PACIENTE: "DIEGO MARRE", 
        RUT: "16554741-K", 
        PREVISION: "FONASA"}, 
    {
        HORA: "12:00", 
        ESPECIALISTA: "ARTURO CAVAGNARO", 
        PACIENTE: "CECILIA MENDEZ", 
        RUT: "9747535-8", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "12:30", 
        ESPECIALISTA: "ANDRES KANACRI", 
        PACIENTE: "MARCIAL SUAZO", 
        RUT: "11254785-5", 
        PREVISION: "ISAPRE"}
    ]

let dental = [
    {
        HORA: "8:30", 
        ESPECIALISTA: "ANDREA ZUÑIGA", 
        PACIENTE: "MARCELA RETAMAL", 
        RUT: "11123425-6", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:00", 
        ESPECIALISTA: "MARIA PIA ZAÑARTU", 
        PACIENTE: "ANGEL MUÑOZ", 
        RUT: "9878789-2", 
        PREVISION: "ISAPRE"}, 
    {
        HORA: "11:30", 
        ESPECIALISTA: "SCARLETT WITTING", 
        PACIENTE: "MARIO KAST", 
        RUT: "7998789-5", 
        PREVISION: "FONASA"}, 
    {
        HORA: "13:00", 
        ESPECIALISTA: "FRANCISCO VON TEUBER", 
        PACIENTE: "KARIN FERNANDEZ", 
        RUT: "18887662-K", 
        PREVISION: "FONASA"}, 
    {
        HORA: "13:30", 
        ESPECIALISTA: "EDUARDO VIÑUELA", 
        PACIENTE: "HUGO SANCHEZ", 
        RUT: "17665461-4", 
        PREVISION: "FONASA"}, 
    {
        HORA: "14:00", 
        ESPECIALISTA: "RAQUEL VILLASECA", 
        PACIENTE: "ANA SEPULVEDA", 
        RUT: "14441281-0", 
        PREVISION: "ISAPRE"}
    ]


const mensaje = document.getElementById("titulo")
const atencion = document.getElementById("resumen")



function consulta1(){
   
    var texto ="<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
    var u = Radiologia.length - 1;

for (var i = 0; i < Radiologia.length; i++) {
    texto += `<tr>
    <td>${Radiologia[i].HORA}</td>
    <td>${Radiologia[i].ESPECIALISTA}</td>
    <td>${Radiologia[i].PACIENTE}</td>
    <td>${Radiologia[i].RUT}</td>
    <td>${Radiologia[i].PREVISION}</td>
    </tr>`;
    }
    document.getElementById("cuerpo").innerHTML = texto;
   mensaje.innerHTML= " RADIOLOGIA"; 
   atencion.innerHTML= "  Primera atención: "+ Radiologia[0].PACIENTE+" "+Radiologia[0].PREVISION  +" | Última atención:"+Radiologia[u].PACIENTE+" "+Radiologia[u].PREVISION;
}



function consulta2(){
    
     var texto ="<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
     var u = trauma.length - 1;

 for (var i = 0; i < trauma.length; i++) {
     texto += `<tr>
     <td>${trauma[i].HORA}</td>
     <td>${trauma[i].ESPECIALISTA}</td>
     <td>${trauma[i].PACIENTE}</td>
     <td>${trauma[i].RUT}</td>
     <td>${trauma[i].PREVISION}</td>
     </tr>`;
     }
     document.getElementById("cuerpo").innerHTML = texto;
     mensaje.innerHTML= " TRAUMATOLOGIA";
     atencion.innerHTML= "  Primera atención: "+ trauma[0].PACIENTE+" "+trauma[0].PREVISION  +" | Última atención:"+trauma[u].PACIENTE+" "+trauma[u].PREVISION;
 }

 

 function consulta3(){
    
     var texto ="<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
     var u = dental.length - 1;

 for (var i = 0; i < dental.length; i++) {
     texto += `<tr>
     <td>${dental[i].HORA}</td>
     <td>${dental[i].ESPECIALISTA}</td>
     <td>${dental[i].PACIENTE}</td>
     <td>${dental[i].RUT}</td>
     <td>${dental[i].PREVISION}</td>
     </tr>`;
     }
     document.getElementById("cuerpo").innerHTML = texto;
     mensaje.innerHTML= " DENTAL";
     atencion.innerHTML= "  Primera atención: "+ dental[0].PACIENTE+" "+dental[0].PREVISION  +" | Última atención:"+dental[u].PACIENTE+" "+dental[u].PREVISION;
 }
 
 