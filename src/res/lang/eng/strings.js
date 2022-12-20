import React from 'react'
export const strings = {
lang : 'eng',
subtitle: <h3>Developer of games, websites and apps</h3>,
traduction: 'Français - FR',
about: <h3 className="title centered"> About </h3>,
aboutTitle: <h2>Creativity is my finest tool.</h2>,
aboutMain:
 <div className="paragraph-group">
   <div className="text-space">
     <h2 className="title">Hello, i'm Eduardo Breton,
      a canadian developer specialised in the development of desktop programs,
       mobile apps and videogames.</h2>
   </div>
   <div className="paragraph-limiter centered">
     <p className="paragraph">I have a passion for technology and programs. I especially love apps and
     videogames that have a practical use and that create postive effects on people, on organisations and on the enviroment.</p>
   </div>
   <div className="paragraph-limiter centered">
     <p className="paragraph">My passion for programming creates dynamic projects of high quality.
     What's more, my cultural heritage (mexican-canadian), my linguistic competences (spanish, english and french)
     and my curiosity are very important traits in the industry.
     </p>
   </div>
   <div className="paragraph-limiter centered">
     <h5 className="paragraph bold"><b>Currently, i am available to work on contracts while continuing my studies in Sherbrooke University.</b> </h5>
   </div>
 </div>,
 aboutSchool: <p className="list-intro"> <b>Education and training sites:</b> </p>,
 aboutEnterprise: <p className="list-intro"> <b> Employment and internships:</b> </p>,
 aboutProg: <p className="list-intro"> <b>Experience (Languages, Programs, Frameworks and Platforms): </b> </p>,

 contact: <h3 className="title centered">Contact</h3>,
 contactMain:
 <div className="paragraph-limiter centered justify-center">
   <p className="paragraph p-with-address"> For any direct contact request for business, about any of the projects i publicly released through Github, or job offerings, please send your message through my email : <address className="paragraph p-with-address"> <a href="mailto:EduardoBretonDev@outlook.com">EduardoBretonDev@outlook.com</a> </address>
   {"  "}
   </p>
   <p className="paragraph p-with-address"> For internships, please send it through my college's account: <address className="paragraph p-with-address"> <a href="mailto:Eduardo.Yvan.Breton.Corona@udesherbrooke.ca">Eduardo.Yvan.Breton.Corona@udesherbrooke.ca</a> </address>
   {"  "}For any questions related to the state of the website or other subjects a questions page will be made soon.
  </p>
 </div>,
 contactTel:
 <div className="paragraph-limiter centered justify-center">
   <p className="paragraph"> You can also call me: <p classNam="underlined">+1 581 996 7155</p>  </p>
 </div> ,

 projects: <h3 className="title centered"> Projects</h3>,
 projectsMain: <p className="list-intro"> Here is a list of all projects, made alone or with a team, released publicly through Github ou Gitlab: </p>,
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
   <p className="paragraph"> If you have any questions about the site, my projects or about myself, you can send it through this textbox. The question will be stored in a database that I can easily read it and treat it accordingly.
 Please note that if you want your question personally answered, you have to include your email address in the text.
 If your question is related to a job or a project offering, please go to the contact page instead.
 A FaQ page could be made if enough questions are sent. </p>
 </div>,

 questionBtn: <p> Send Question </p>,
 goBack: <p> Go Back </p>,
 maintenanceComingSoon: <h3 className="title centered red" > Feature coming soon! </h3>,
 msgSendOk: 'Thank you, your message has been submitted.'
}
