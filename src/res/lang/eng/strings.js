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
      a canadian developer specialized in the development of desktop programs,
       mobile apps and video games.</h2>
   </div>
   <div className="paragraph-limiter centered">
     <p className="paragraph">I have a passion for technology and creating programs. I especially love apps and
     video games that have a practical use and create positive effects on people, and even on organizations or the environment!</p>
   </div>
   <div className="paragraph-limiter centered">
     <p className="paragraph">My passion for programming has produced dynamic projects of high quality. Mainly websites and games. I have workplace experience and i am conditioned to adapt to new work and challenges on the fly and be harmonious
     with the team and fellow coworkers.
     <br/><br/>

     What's awesome, my cultural heritage (mexican-canadian), my linguistic skills (spanish, english and french)
     and my curiosity for learning have aided with communicating with people in the workplace that are not always comfortable with English or French.
     </p>
   </div>
   <div className="paragraph-limiter centered">
     <h5 className="paragraph bold"><b>Currently, i am available to work remotely or in the metropolitan area of Quebec city.</b> </h5>
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
   <p className="paragraph p-with-address"> For internships, please send it through my college's account: <address className="paragraph p-with-address"> <a href="mailto:Eduardo.Yvan.Breton.Corona@usherbrooke.ca">Eduardo.Yvan.Breton.Corona@usherbrooke.ca</a> </address>
   {"  "}For any questions related to the state of the website or other subjects a questions page will be made soon.
  </p>
 </div>,
 contactTel:
 <div className="paragraph-limiter centered justify-center">
 </div> ,

 projects: <h3 className="title centered"> Projects</h3>,
 projectsMain: <p className="list-intro table-intro"> Here is a list of all projects, made alone or with a team, released publicly through Github or Gitlab: </p>,
 projectsList:
 <table className="table-contact centered">
   <tr>
     <th>Project Name</th>
     <th>Source Code</th>
     <th>Project Description</th>
     <th>Binaries</th>
   </tr>
   <tr>
     <td>AventurUS</td>
     <td> <a href="https://github.com/juasjuasie/AventurUS"> https://github.com/juasjuasie/AventurUS </a>  </td>
     <td>"2.5D" simple RPG made in Unreal Engine 5 for the faculty of computer sciences in "Université de Sherbrooke"</td>
     <td> <a href="https://mega.nz/file/0vNkkDAR#fIjqH93kn3u5zkPpYoQq5yBiec10nLwthApIywL-tk0">Download it!</a></td>
   </tr>
   <tr>
     <td>Prendre Vol</td>
     <td>Source code not available</td>
     <td>3D co-op game made in Unreal Engine 5 for Ubisoft's Game-Lab competition 2024  </td>
     <td> <a href="https://heroinadream.itch.io/prendre-vol">Download it!</a></td>
   </tr>
   <tr>
     <td>Be Bold</td>
     <td> <a href="https://gitlab.com/juasjuasie/projet-synthese">https://gitlab.com/juasjuasie/projet-synthese</a> </td>
     <td>2D shooter game made in Unity</td>
     <td> <a href="https://ghostthehuman.itch.io/be-bold">Download it!</a></td>

   </tr>
   <tr>
     <td>FlappyBirdDemo</td>
     <td> <a href="https://gitlab.com/juasjuasie/flappybirddemo">https://gitlab.com/juasjuasie/flappybirddemo</a></td>
     <td>Flappy bird clone made in Unity</td>
     <td>Not available</td>
   </tr>
   <tr>
     <td>Chatbarnak</td>
     <td> <a href="https://github.com/ddufourm/Chatbarnak">https://github.com/ddufourm/Chatbarnak</a></td>
     <td>Game realized in 2 days in Godot for the Sherbrooke Game Jam 2024</td>
     <td> <a href="https://ddufourm.itch.io/chatbarnak">Play it!</a></td>
   </tr>
   <tr>
     <td>HiraganaProject</td>
     <td> <a href="https://gitlab.com/juasjuasie/mobile2_tp3">https://gitlab.com/juasjuasie/mobile2_tp3</a></td>
     <td>Android app that teaches you the basics of the hiragana alphabet</td>
     <td>Not available</td>
   </tr>
   <tr>
     <td>EduardoBretonDev</td>
     <td> <a href="https://github.com/juasjuasie/EduardoBretonDevWebsite">https://github.com/juasjuasie/EduardoBretonDevWebsite</a></td>
     <td>This site's source code!</td>
     <td>Not available</td>
   </tr>
   <tr>
     <td>BluetoothProject</td>
     <td> <a href="https://github.com/juasjuasie/ExempleBluetoothFinal">https://github.com/juasjuasie/ExempleBluetoothFinal</a></td>
     <td>Android app that demonstrates a bluetooth connection to other devices.</td>
     <td>Not available</td>
   </tr>
 </table>,
 question: <h3 className="title centered"> Question box </h3>,
 questionMain:
 <div className="paragraph-limiter centered">
   <p className="paragraph"> If you have any questions about the site, my projects or about myself, you can send it through this text-box. The question will be stored in a database that I can easily read it and treat it accordingly.
 Please note that if you want your question personally answered, you have to include your email address in the text.
 If your question is related to a job or a project offering, please go to the contact page instead.
 A FaQ page could be made if enough questions are sent. </p>
 </div>,

 questionBtn: <p> Send Question </p>,
 goBack: <p> Go Back </p>,
 maintenanceComingSoon: <h3 className="title centered red" > Feature coming soon! </h3>,
 msgSendOk: 'Thank you, your message has been submitted.',
 email: 'type here your email'
}
