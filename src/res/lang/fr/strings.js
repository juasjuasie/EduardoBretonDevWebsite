import React from 'react'
export const strings = {
lang : 'fr',
subtitle: <h3> Développeur de jeux, sites web et applications</h3>,
traduction: 'English - ENG',
about: <h3 className="title centered"> À Propos </h3>,
aboutTitle: <h2>La créativité est mon outil d'excellence.</h2>,
aboutMain:
 <div className="paragraph-group">
   <div className="text-space">
     <h2 className="title"> Allo, je suis Eduardo Breton,
     un développeur informatique canadien spécialisé dans le développement de programmes de bureau et d’applications de cellulaire et de jeux vidéo.</h2>
   </div>
   <div className="paragraph-limiter centered">
     <p className="paragraph">J'ai une passion pour la technologie et les logiciels.
      Je suis attiré par les programmes et les jeux vidéo qui ont une utilité pratique et qui ont des effets positifs sur les personnes,
      les organisations et leurs environnements. </p>
   </div>
   <div className="paragraph-limiter centered">
     <p className="paragraph">Ma passion pour l'informatique se transforme en des projets dynamiques et des produits de qualité.
      De plus, mon héritage culturel (mexicain et canadien),
      mes compétences linguïstiques (espagnol, anglais, français) et ma curiosité sont des atouts importants dans le milieu.
      Depuis quelques années, j'ai eu des emplois étudiants pour le gouvernement du Canada (Emploi et développement social) et du Québec (CNESST)
      et j’ai réalisé un stage pour le groupe Québécor Média (Numériq).</p>
   </div>
   <div className="paragraph-limiter centered">
     <h5 className="paragraph bold"><b>Actuellement, je suis disponible pour réaliser des contrats tout en poursuivant mes études en informatique à l'Université de Sherbrooke.</b> </h5>
   </div>
 </div>,
 aboutSchool: <p className="list-intro"> <b>Études et formation:</b> </p>,
 aboutEnterprise: <p className="list-intro"> <b>Emplois et stages:</b> </p>,
 aboutProg: <p className="list-intro"> <b>Expériences (Langages, Programmes, Frameworks et Plateformes): </b> </p>,

 contact: <h3 className="title centered">Contact</h3>,
 contactMain:
 <div className="paragraph-limiter centered justify-center">
   <p className="paragraph p-with-address"> Pour toute demande de contact pour des affaires, pour les projets publiés sur Github ou pour des offres de travail,
    s.v.p. envoyer votre message au courriel suivant :
     <address className="paragraph p-with-address">
      <a href="mailto:EduardoBretonDev@outlook.com">
      EduardoBretonDev@outlook.com</a> </address>
   {"  "}
   </p>
   <p className="paragraph p-with-address"> Pour des offres de stages, s.v.p. envoyez-les dans mon compte académique : <address className="paragraph p-with-address"> <a href="mailto:Eduardo.Yvan.Breton.Corona@usherbrooke.ca">Eduardo.Yvan.Breton.Corona@usherbrooke.ca</a> </address>
   {"  "}Pour toute question reliée à l'état de ce site web ou autres sujets, une boîte de questions est en élaboration.
   </p>
 </div>,
 contactTel:
 <div className="paragraph-limiter centered justify-center">
   <p className="paragraph"> Vous pouvez m'appeler au numéro téléphone suivant : <p classNam="underlined">+1 581 996 7155</p>  </p>
 </div> ,

 projects: <h3 className="title centered"> Projets</h3>,
 projectsMain: <p className="list-intro"> Voici une liste des projets, fait individuellement ou en équipe, publiés en Github ou Gitlab : </p>,
 projectsList:
 <table className="table-contact centered">
   <tr>
     <th>Adresse URL</th>
     <th>Description du Projet</th>
   </tr>
   <tr>
     <td> <a href="https://gitlab.com/juasjuasie/projet-synthese">https://gitlab.com/juasjuasie/projet-synthese</a> </td>
     <td>Jeu 2D shooter fait en Unity</td>
   </tr>
   <tr>
     <td> <a href="https://gitlab.com/juasjuasie/flappybirddemo">https://gitlab.com/juasjuasie/flappybirddemo</a></td>
     <td>Copie de Flappy bird fait en Unity</td>
   </tr>
   <tr>
     <td> <a href="https://gitlab.com/juasjuasie/mobile2_tp3">https://gitlab.com/juasjuasie/mobile2_tp3</a></td>
     <td>Application android qui t'enseigne les éléments basiques de l'alphabet hiragana</td>
   </tr>
   <tr>
     <td> <a href="https://github.com/juasjuasie/EduardoBretonDevWebsite">https://github.com/juasjuasie/EduardoBretonDevWebsite</a></td>
     <td>Code source du site!</td>
   </tr>
   <tr>
     <td> <a href="https://github.com/juasjuasie/ExempleBluetoothFinal">https://github.com/juasjuasie/ExempleBluetoothFinal</a></td>
     <td>Application android qui te démontre une connection bluetooth vers autres dispositifs.</td>
   </tr>
 </table>,
 question: <h3 className="title centered"> Boîte de questions </h3>,
 questionMain:
 <div className="paragraph-limiter centered">
   <p className="paragraph"> Si vous avez des questions sur le site, sur mes projets ou sur moi, vous pouvez l'envoyer dans cette boîte.
   S.V.P Si vous voulez que vos questions soient répondues, merci d’inclure votre courriel.
   Si vos questions concernent une offre de travail ou une offre de projet, vous pouvez visiter ma page de contact.
   Une page de faits et questions peut être faite s' il-y a des questions suffisantes. </p>
 </div>,

 questionBtn: <p> Envoyer Question</p>,
 goBack: <p> Retourner </p>,
 maintenanceComingSoon: <h3 className="title centered red" > Cette fonctionnalité sera bientôt disponible! </h3>,
 msgSendOk: 'Merci, votre message a été soumis.',
 email: 'email ici svp'
}
