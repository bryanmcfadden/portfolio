/* ----------------------------------------------------------------------------
------------------------------------------------------------------------------
Data dictionary:
projectsList

projectsList[0][0] = project name
projectsList[0][1] = project company
projectsList[0][2] = project type
projectsList[0][3] = ux roles
projectsList[0][4] = assigned job title
projectsList[0][5][0] = image array (images & descriptions)
projectsList[0][6][0] = ux deliverables array (deliverables tags & description)
projectsList[0][7] = ux solution

-------------------------------------------------------------------------------
---------------------------------------------------------------------------- */
var imgPath = "../images/";
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
  "UX Researcher",
  new Array(
    new Array(imgPath + "x_epermit_01.jpg", "As an UX designer, UI designer and front-end developer, my tasks were varied. The end result was a clear and user-friendly website, adapted to the specific needs of the business and, above all, highly appreciated by end users."),
    new Array(imgPath + "x_epermit_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  ),
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  "My objective to the project was to create an application that was easy to understand"
);


var disasterDataPortal = new Array(
  "Disaster Data Portal",
  "H.U.D.",
  "Internal web app",
  "UX / IxD / Front-end",
  "Sr. UX Designer",
  new Array(
    new Array(imgPath + "hud_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "hud_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  ),
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  "My solution to the UX issue was to ....."
);

var raft = new Array(
  "Resource Allocation and Forecasting Tool (RAFT)",
  "AT&T Telecommunications",
  "Internal web app",
  "UX / IxD / Front-end",
  "Lead UX Designer",
  new Array(
    new Array(imgPath + "raft_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "raft_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  ),
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  "Another solution for this was to ....."
);

var noticeToMariners = new Array(
  "Notice to Mariners",
  "National Geospatial-Intelligence Agency (NGA)",
  "Internal web app",
  "UX / IxD / Front-end",
  "Full Stack UX",
  new Array(
    new Array(imgPath + "ntm_01.jpg", "The US (NTM) Notice to Mariners is a weekly publication that renders marine safety information in the interest of ocean-going vessels. Collected from foreign and domestic sources (including nine US Coast Guard districts), they are designed to provide updates and corrections of unclassified US nautical charts. With a manual process currently in place, the 400,000+ corrections require experience and process knowledge which is difficult to transfer between employees."),
    new Array(imgPath + "ntm_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  ),
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  "As a UX designer, I decided to do this .....  to solve the problem"
);

var tspace = new Array(
  "tSpace",
  "AT&T Telecommunications",
  "Internal social media app",
  "UX / IxD / Front-end",
  "UX Designer",
  new Array(
    new Array(imgPath + "tspace_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "tspace_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  ),
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  "The overall objective was to...."
);

var tdc = new Array(
  "Technology Delivery Center",
  "AT&T Telecommunications",
  "Internal web portal",
  "UX / IxD / Front-end",
  "Director of User Experience",
  new Array(
    new Array(imgPath + "tdc_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "tdc_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  ),
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  "The solution to creating a web portal was to....."
);

var projectsList = new Array(
  xmasTreePermit,
  disasterDataPortal,
  raft,
  noticeToMariners,
  tspace,
  tdc
);
