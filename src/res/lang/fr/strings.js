import React from 'react'
export const strings = {
 lang : 'fr',
 subtitle: <h3>Dévelopeur de jeux, sites web et applications</h3>,
 traduction: 'English - ENG',
 about: <h3 className="title centered"> À Propos </h3>,
 aboutTitle: <h2>La creativité est mon outil d'excellence.</h2>,
 aboutMain: 
  <div className="paragraph-group">
    <div className="text-space">
      <h2 className="title">Allo, je suis Eduardo Breton, un dévelopeur canadien specialisé dans le dévelopement des programmes de bureau, applications pour des cellulaire et des jeux videos.</h2>
    </div>
    <div className="paragraph-limiter centered">
      <p className="paragraph">J'ai travaillé en stages et pour le gouvernement de Canada, et je suis actualement interesé de travailler comme un travailleur indépendant.</p>
    </div>
    <div className="paragraph-limiter centered">
      <p className="paragraph">Depuis mes années comme adolescent dans la province de Québec, Canada, j'ai aimé beaucoup la technologie et les logiciels et j'ai 
      suis, en géneral, investi sur les logiciels et jeux vidéos qui ont une utilité practique ou qui contient un message qui fait changer postivement les personnes.
      Mon héritage ethnique m'a permis de parler et écrire en anglais et espagnole, et j'ai ei beaucoup d'experience de me communique avec plusieurs individus avec ces langages.
      J'espèere que la passion que j'ai pour l'industrie se transforment en de projets et de produits de qualité exceptionnelle.</p>
    </div>
    <div className="paragraph-limiter centered">
      <h5 className="paragraph bold"><b>Actuellement, je suis disponible pour travailler dans des contrats qui sont flexibles et ouvertes pendant que je fait mes études dans l'Université de Sherbrooke.</b> </h5>
    </div>
  </div>,
  aboutSchool: <p className="list-intro"> <b>Lieux academiques et sites d'apprentissage qui ont contribué ma carrière:</b> </p>,
  aboutEnterprise: <p className="list-intro"> <b> Entreprises et organisations où j'ai travaillé:</b> </p>,
  aboutProg: <p className="list-intro"> <b>Langages, Programmes, Frameworks et Plateformes j'eu de l'expérience avec: </b> </p>,
  
  
  contact: <h3 className="title centered">Contact</h3>,
  contactMain:
  <div className="paragraph-limiter centered justify-center"> 
    <p className="paragraph p-with-address"> For any direct contact request for bussiness, about any of the projects i publicly released through Github, or job offerings, please send your message through my email : <address className="paragraph p-with-address"> <a href="mailto:EduardoBretonDev@outlook.com">EduardoBretonDev@outlook.com</a> </address>
    {"  "}
    </p>
    <p className="paragraph p-with-address"> For internships, please send it through my college's account: <address className="paragraph p-with-address"> <a href="mailto:Eduardo.Yvan.Breton.Corona@udesherbrooke.ca">Eduardo.Yvan.Breton.Corona@udesherbrooke.ca</a> </address>
    {"  "}For any questions related to the state of the website or other subjects please send it to the questions page (Coming soon).
    Please note that any references need to be requested before or after the interview so i can inform them they will be contacted by you. Their contact info will be sent by e-mail as soon as possible. </p>
  </div>,
  contactTel: 
  <div className="paragraph-limiter centered justify-center"> 
    <p className="paragraph"> You can also call me with the following number: <p classNam="underlined">+1 581 996 7155</p>  </p>
  </div> ,
  
  
  projects: <h3 className="title centered"> Projects</h3>,
  projectsMain: <p className="list-intro"> Here is a list of all projects, made alone or with a team, released publicly through Github: </p>,
  projectsList:
  <table className="table-contact centered">
    <tr>
      <th>URL Address</th>
      <th>Project Description</th>
    </tr>
    <tr>
      <td> <a href="https://gitlab.com/juasjuasie/projet-synthese">https://gitlab.com/juasjuasie/projet-synthese</a> </td>
      <td>2D shooter game made in Unity</td>
    </tr>
    <tr>
      <td> <a href="https://gitlab.com/juasjuasie/flappybirddemo">https://gitlab.com/juasjuasie/flappybirddemo</a></td>
      <td>Flappy bird clone made in Unity</td>
    </tr>
    <tr>
      <td> <a href="https://gitlab.com/juasjuasie/mobile2_tp3">https://gitlab.com/juasjuasie/mobile2_tp3</a></td>
      <td>Android app that teaches you the basics of the hiragana alphabet</td>
    </tr>
    <tr>
      <td> <a href="https://github.com/juasjuasie/EduardoBretonDevWebsite">https://github.com/juasjuasie/EduardoBretonDevWebsite</a></td>
      <td>This site's source code!</td>
    </tr>
    <tr>
      <td> <a href="https://github.com/juasjuasie/ExempleBluetoothFinal">https://github.com/juasjuasie/ExempleBluetoothFinal</a></td>
      <td>Android app that demonstrates a bluetooth connection to other devices.</td>
    </tr>
  </table>,
  question: <h3 className="title centered"> Question box </h3>,
  questionMain: 
  <div className="paragraph-limiter centered">
    <p className="paragraph"> If you have any questions about the site, my projects or about myself, you can send it through this textbox. The question will be stored in a database that i can easily check and trear it accordingly.
  Please note that if you want your question personally answered, you have to include your email address in the text.
  If your question is related to a job or a project offering, please go to the contact page instead.
  A FaQ page could be made if enough questions are sent. </p>
  </div>,

  questionBtn: <p> Send Question </p>,
  goBack: <p> Go Back </p>,
  maintenanceComingSoon: <h3 className="title centered red" > Feature coming soon! </h3>
} 