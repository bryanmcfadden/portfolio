/* ----------------------------------------------------------------------------
------------------------------------------------------------------------------
Data dictionary:
projectsList

projectsList[0][0] = project name
projectsList[0][1] = project company
projectsList[0][2] = project type
projectsList[0][3] = ux methods
projectsList[0][4] = project brief
projectsList[0][5] = assigned job title(s)
projectsList[0][6][0] = ux deliverables array (ux deliverables tags)
projectsList[0][5][0] = image array (images & >3 line descriptions)
  [0] = summary
  [1] = image file
  [2] = title
-------------------------------------------------------------------------------
---------------------------------------------------------------------------- */
var imgPath = "img/projects/";
/* ----------------------------------------------------------------------------
Data dictionary:
uxDeliverables

[0] Information architecture
[1] Wireframes
[2] Personas
[3] Visual design

----------------------------------------------------------------------------- */
var xmasTreePermit = new Array(
  "Christmas Tree ePermit",
  "U.S. Forest Service",
  "Consumer web app",
  "UX / Research / UI Design",
  "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis "+
  "adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor. Lorem ipsum dolor sit amet, consectetur",
  "UX Researcher",
  new Array("Information Architecture", "Personas", "Interactive Design", "User Taskflows", "Wireframes"),
  new Array(
    new Array(imgPath+"epermit/epermit_01.jpg","Something here about the XMAS tree epermit project and how it is a module from the epermit application."),
    new Array(imgPath+"epermit/epermit_02.jpg","There should be a detailed description about how we created the user taskflows based from requirements gathering."),
    new Array(imgPath+"epermit/epermit_03.jpg","This would be all about the data matrix."),
    new Array(imgPath+"epermit/epermit_04.jpg","Description about how we came up with the final permit design goes here.")
  )
);


var disasterDataPortal = new Array(
  "Disaster Data Portal",
  "Dept. of Housing and Urban Development",
  "Internal web app",
  "UX / IxD / Front-end",
  "Lorem ipsum aliquet quis commodo eget, dolor sit amet, consectetur Suspendisse tellus odio, sollicitudin leo sit amet suscipit euismod efficitur vel eros. Nulla. Aliquam iaculis "+
  "adipiscing elit. Curabitur feugiat. nunc et sapien rutrum, in eros in hendrerit ut porttitor. Lorem ipsum dolor sit amet, consectetur",
  "Sr. UX Designer",
  new Array("interactive design", "wireframes", "user task flows", "user interviews", "front-end development"),
  new Array(
    new Array(imgPath+"disasterdataportal/hud_01.jpg","This would be a description of what the Disaster Data Portal project is and how it would be used."),
    new Array(imgPath+"disasterdataportal/hud_02.jpg","Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis")
  )
);

var raft = new Array(
  "Resource Allocation and Forecasting Tool",
  "AT&T Telecommunications",
  "Internal web app",
  "Full Stack UX",
  "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis "+
  "adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor. Lorem ipsum dolor sit amet, consectetur",
  "Lead UX Designer",
  new Array("contextual interviews", "wireframes", "UI library", "style guide", "prototypes", "visual comps", "front-end development"),
  new Array(
    new Array(imgPath + "raft/raft_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "raft/raft_02.jpg", "Something here about the UI elements created for raft. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "raft/raft_03.jpg", "This would be something about how the elements had been crafted into a style guide.")
  )
);

var noticeToMariners = new Array(
  "Notice to Mariners",
  "National Geospatial-Intelligence Agency (NGA)",
  "Internal web app",
  "UX / IxD / Front-end",
  "The US (NTM) Notice to Mariners is a weekly publication that renders marine safety information in the interest of ocean-going vessels. Collected from foreign and domestic sources (including nine US Coast Guard districts), they are designed to provide updates and corrections of unclassified US nautical charts. With a manual process currently in place, the 400,000+ corrections require experience and process knowledge which is difficult to transfer between employees.",
  "Full Stack UX",
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  new Array(
    new Array(imgPath + "ntm/ntm_01.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "ntm/ntm_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  )
);

var tspace = new Array(
  "tSpace",
  "AT&T Telecommunications",
  "Internal social media app",
  "UX / IxD / Visual Design",
  "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis "+
  "adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor. Lorem ipsum dolor sit amet, consectetur",
  "UX Designer",
  new Array("wireframes", "style guide"),
  new Array(
    new Array(imgPath + "tspace/tspace_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "tspace/tspace_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla  Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. sollicitudin leo sit amet suscipit euismod. nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "tspace/tspace_03.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor adipiscing elit. Curabitur feugiat in eros in hendrerit. ")
  )
);

var tdc = new Array(
  "Technology Delivery Center",
  "AT&T Telecommunications",
  "Internal web portal",
  "UX / IxD / Front-end",
  "Lorem ipsum dolor sit amet, Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros."+
  "adipiscing elit. Curabitur feugiat, ut porttitor. Lorem ipsum dolor sit amet, consectetur in eros in hendrerit. nunc et sapien rutrum",
  "Director of User Experience",
  new Array("information architecture", "contextual interviews", "wireframes", "personas", "visual comps", "competitive analysis", "front-end development"),
  new Array(
    new Array(imgPath + "tdc/tdc_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor")
  )
);

var projectsList = new Array(
  xmasTreePermit,
  disasterDataPortal,
  raft,
  noticeToMariners,
  tspace,
  tdc
);

var endorsementQoutes = new Array (
  new Array ( "Bryan brings a high level of competency, passion and skills to deliver the best UX experience to the user. Bryan can work with the user to come up with the best UX design and then turn right around and write the code to deliver the desired UX experience.", "David Geiger - Associate Director - AT&T"),
  new Array ( "Having worked with Bryan on several projects over the past decade in all aspect of the software development life cycle, his work has always shown the highest degree of professional quality. He has always maintained an up to date knowledge of the rapidly changing technologies and applied those, along with an excellent eye for graphical presentation, to provide software that is functional, user friendly, and pleasing to the eye. In addition, Bryan has often proved to be a keystone to building and maintaining a team environment by making himself available to help others.", "Perley Brown - Software Consultant - Northrup Grumman"),
	new Array ( "I'm often searching for talented independdent contractors who understand the needs and tight budgets of a small business. Bryan gets it. He delivers top-quality work at very reasonable rates. And, on top of that, he's honest, hard working and personable.", "Loren Goldfarb - COO/Partner - Everwell"),
  new Array ( "Bryan is a great guy and any company would be fortunate to have him. He is very good with UX and JavaScript programming. He loves to consider the user experience and integrates their perspective into his design. He is easy to work and talk with, is conscientious and honest, therefore he makes a good team mate.", "Bill Fredricks - Software Implementer - Visumpoint LLC"),
  new Array ( "I have worked with Bryan for several years on multiple projects. In my role as a product owner delegate and requirements lead, I depended on Bryan for a variety of deliverables within the UX space. Bryan’s UX knowledge and expertise was always invaluable and enabled our team to be more cognizant of the value that good UX brings to the table. Bryan was always a key part of each project I would welcome the opportunity to work with him again!", "Tom Lavelle - Sr. Business Analyst - AT&T" ),
  new Array ( "Bryan is a detail-oriented, meticulous UX designer, who juggled multiple tasks efficiently and effectively. The research he did led to the creation of a better product.", "Jane Cys - Content Strategist - (DMI) Digital Management LLC"),
  new Array ( "As a UX specialist at Flexion, Bryan supported two project teams to deliver applications in an iterative, agile manner. Bryan collaborated well with the team and the client product owner.", "Sarah Rugless - V.P. - Public Sector - Flexion"),
  new Array ( "As a UX designer at AT&T, I worked with Bryan on a design team to deliver solutions for web-based applications. Bryan was a fantastic team lead with brilliant design ideas that clearly showed his knowledge on the latest design trends. Out of the many designers that I've worked with, I've learned the most from Bryan thanks to his constructive feedback on my work. During the time I worked with him, I believe he did an exceptional job delegating tasks to me and other fellow-designers and guiding us on how to hone our design skills. He is a very motivated person who looks forward to learning new skills.", "Annette Almonte - Specialist Applications Developer - AT&T")
);
