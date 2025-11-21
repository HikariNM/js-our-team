const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


/****************************ESERCIZO*************************** */

// card = document.getElementById('cardContainer');
// let cardMember = '';

// for (let i = 0; i < teamMembers.length; i++) {
//   const teamMember = teamMembers[i];

//   const {name, role, email, img} = teamMember;

//   cardMember += generateCard(name, role, email, img)

// }

// card.innerHTML = cardMember;

// function generateCard(name, role, email, img){

//   return `<div class="col-lg-4">
//   <div id="card" class="bg-black d-flex">
//       <img id="cardImg" src="${img}" alt="${name}">
//       <div class="card-body p-3">
//           <h4 id="name">${name}</h4>
//           <p id="role">${role}</p>
//           <a id="email" class="text-decoration-none" href="mailto:${email}">${email}</a>
//       </div>
//   </div>
// </div>`

// }

/******************FUNCTION + ADD BUTTON CON PROMPT***************** */

// generateCard();

// function generateCard(){
//   cardHtml = document.getElementById('cardContainer');
//   let cardsList = '';

//   for (let i = 0; i < teamMembers.length; i++) {
//     const teamMember = teamMembers[i];

//     const card = `<div class="col-lg-4">
//     <div id="card" class="bg-black d-flex">
//     <img id="cardImg" src="${teamMember.img}" alt="${teamMember.name}">
//     <div class="card-body p-3">
//     <h4 id="name">${teamMember.name}</h4>
//     <p id="role">${teamMember.role}</p>
//     <a id="email" class="text-decoration-none" href="mailto:${teamMember.email}">${teamMember.email}</a>
//     </div>
//     </div>
//     </div>`;

//      cardsList += card;

//   }

//   cardHtml.innerHTML = cardsList;

// };

// document.getElementById('addBtn').addEventListener('click', function(){
//   teamMembers.push({
//     name: prompt('Inserisci il nome'),
//     role: prompt('Inserisci il ruolo'),
//     email: prompt('Inserisci un indirizzo email valido'),
//     img: prompt('Inserisci il URL di un immagine')
//   });
//   generateCard()
// })

/******************FUNCTION + ADD BUTTON CON FORM A CAMBIO VISIBILITA'***************** */

// cardHtml = document.getElementById('cardContainer')

// renderCard();

// document.getElementById('addBtn').addEventListener('click', function(){
//   event.preventDefault();
//   document.getElementById('cardFormRow').classList.replace('d-none', 'd-flex');
//   document.getElementById('addBtn').classList.add('d-none');
// });

// document.getElementById('submitBtn').addEventListener('click', function(){
//   event.preventDefault();
//   inputName = document.getElementById('inputName').value;
//   inputRole = document.getElementById('inputRole').value;
//   inputEmail = document.getElementById('inputEmail').value;
//   inputImg = document.getElementById('inputImg').value;
  
//   const check = teamMembers.find(function(member){
//     return member.name === inputName;
//     });
    
//     if (!check) {
//       teamMembers.push({
//         name: inputName,
//         role: inputRole,
//         email: inputEmail,
//         img: inputImg,
//       });
      
//     } else alert('Card già inserita')
//     renderCard()

//     document.getElementById('cardFormRow').classList.replace('d-flex', 'd-none');
//     document.getElementById('addBtn').classList.replace('d-none', 'd-inline-block');
//   });
  
  
//   console.log(teamMembers)
  
//   function renderCard() {
//     let cardList = '';
//     for (let i = 0; i < teamMembers.length; i++) {
//       const teamMember = teamMembers[i];
  
//       const card = `<div class="col-lg-4">
//                         <div id="card" class="bg-black d-flex">
//                             <img id="cardImg" src="${teamMember.img}" alt="${teamMember.name}">
//                             <div class="card-body p-3">
//                                 <h4 id="name">${teamMember.name}</h4>
//                                 <p id="role">${teamMember.role}</p>
//                                 <a id="email" class="text-decoration-none" href="mailto:${teamMember.email}">${teamMember.email}</a>
//                             </div>
//                           </div>
//                       </div>`;
  
//       cardList += card
  
  
//     }
//     cardHtml.innerHTML = cardList;
//   };

/******************FUNCTION CON FORM AD AGGIUNTA***************** */

cardHtml = document.getElementById('cardContainer')
form = document.getElementById('cardFormRow');
let count = 0;

renderCard();

document.getElementById('addBtn').addEventListener('click', function () {
  event.preventDefault();
  count++;

  if (count % 2 != 0) {
    form.innerHTML = `<div class="col-3">
    <form id="CardForm" action="">
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputName" placeholder="Nome Cognome">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Ruolo</label>
            <input type="text" class="form-control" id="inputRole" placeholder="Ruolo">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Indirizzo Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Indirizzo Email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">URL Immagine</label>
            <input type="text" class="form-control" id="inputImg" placeholder="Inserisci un URL per l'immagine">
        </div>
      
    </form>
  </div>`

  }
  else {
    const inputName = document.getElementById('inputName').value;
    const inputRole = document.getElementById('inputRole').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputImg = document.getElementById('inputImg').value;

    const check = teamMembers.find(function (member) {
      return member.name === inputName;
    });

    if (!check) {
      teamMembers.push({
        name: inputName,
        role: inputRole,
        email: inputEmail,
        img: inputImg,
      });

      form.innerHTML = ``;

    } else {
      alert('Card già inserita');
      count--;
    }
    
    renderCard();

  }

});

console.log(teamMembers)

function renderCard() {
  let cardList = '';
  for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];

    const card = `<div class="col-lg-4">
                        <div id="card" class="bg-black d-flex">
                            <img id="cardImg" src="${teamMember.img}" alt="${teamMember.name}">
                            <div class="card-body p-3">
                                <h4 id="name">${teamMember.name}</h4>
                                <p id="role">${teamMember.role}</p>
                                <a id="email" class="text-decoration-none" href="mailto:${teamMember.email}">${teamMember.email}</a>
                            </div>
                          </div>
                      </div>`;

    cardList += card


  }
  cardHtml.innerHTML = cardList;
};