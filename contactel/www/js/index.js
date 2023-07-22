document.addEventListener('deviceready', rechercherContacts);

function rechercherContacts(){
    const options = new ContactFindOptions();
    options.filter  =  'resp'; // a enlever du code
    options.multiple = true;
    options.hasPhoneNumber = true; // enlever contact sans numner

    let fields = ['name'];

    navigator.contacts.find(fields, afficherContacts, gererErreur, options);

}

function afficherContacts(contacts){
    //console.log('Nombre de contacts trouvés : ${contacts.length}');
    //console.log('contacts');

    let code = '';
    for (let i = 0; i < contacts.length; i++){
        code +=  `  
            <li>
                <a href="#">
                    <img src =" ${contacts[i].photos ? contacts[i].photos[0].value : 'img/contact.jpg'} "></img>
                    <h1> ${contacts[i].displayName}</h1>
                    <p> ${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
            `;
         

        
    }
   const contactList = document.getElementById('contactList');
    contactList.innerHTML = code;
    $(contactList).listview('refresh'); 
}
    
function gererErreur(error){
    console.log(" Erreur : ");
    console.log(error);
}

function supprimerContact(contactId) {
    // Utilisation de l'API des contacts pour supprimer le contact avec l'ID spécifié
    const options = new ContactFindOptions();
    options.filter = contactId;
    options.multiple = false;
    const fields = ['id'];
  
    // Rechercher le contact par son ID
    navigator.contacts.find(fields, (contacts) => {
      if (contacts.length > 0) {
        const contact = contacts[0];
        contact.remove(() => {
          // Le contact a été supprimé avec succès
          console.log('Contact supprimé avec succès.');
        }, (error) => {
          // Erreur lors de la suppression du contact
          console.error('Erreur lors de la suppression du contact :', error);
        });
      } else {
        console.log('Aucun contact trouvé avec l\'ID spécifié.');
      }
    }, gererErreur, options);
  }