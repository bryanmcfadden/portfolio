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
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  new Array(
    new Array(imgPath+"xmastreepermit/epermit_01.jpg","Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio dfdfdfdf."),
    new Array(imgPath+"xmastreepermit/epermit_02.jpg","Suspendisse tellus odio, aliquet quis lorem ipsum dolor sit amet, consectetur commodo eget, efficitur vel eros. Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio.dfdfdfdf.")
  )
);


var disasterDataPortal = new Array(
  "Disaster Data Portal",
  "H.U.D.",
  "Internal web app",
  "UX / IxD / Front-end",
  "Lorem ipsum aliquet quis commodo eget, dolor sit amet, consectetur Suspendisse tellus odio, sollicitudin leo sit amet suscipit euismod efficitur vel eros. Nulla. Aliquam iaculis "+
  "adipiscing elit. Curabitur feugiat. nunc et sapien rutrum, in eros in hendrerit ut porttitor. Lorem ipsum dolor sit amet, consectetur",
  "Sr. UX Designer",
  new Array("interactive design", "wireframes", "user task flows", "user interviews", "front-end development"),
  new Array(
    new Array(imgPath+"disasterdataportal/hud_01.jpg","This would be a description of the Disaster Data Portal project"),
    new Array(imgPath+"disasterdataportal/hud_01.jpg","Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis")
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
    new Array(imgPath + "raft/raft_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
  )
);

var noticeToMariners = new Array(
  "Notice to Mariners",
  "National Geospatial-Intelligence Agency (NGA)",
  "Internal web app",
  "UX / IxD / Front-end",
  "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis "+
  "adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor. Lorem ipsum dolor sit amet, consectetur",
  "Full Stack UX",
  new Array("Information Architecture", "UX", "Personas", "Interactive Design", "User Interviews", "Card-Sorting"),
  new Array(
    new Array(imgPath + "ntm/ntm_01.jpg", "The US (NTM) Notice to Mariners is a weekly publication that renders marine safety information in the interest of ocean-going vessels. Collected from foreign and domestic sources (including nine US Coast Guard districts), they are designed to provide updates and corrections of unclassified US nautical charts. With a manual process currently in place, the 400,000+ corrections require experience and process knowledge which is difficult to transfer between employees."),
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
    new Array(imgPath + "tspace/tspace_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
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
    new Array(imgPath + "tdc/tdc_01.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat in eros in hendrerit. Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis nunc et sapien rutrum, ut porttitor"),
    new Array(imgPath + "tdc/tdc_02.jpg", "Lorem ipsum dolor sit amet, consectetur Suspendisse tellus odio, aliquet quis commodo eget, efficitur vel eros. Nulla sollicitudin leo sit amet suscipit euismod. Aliquam iaculis adipiscing elit. Curabitur feugiat in eros in hendrerit. nunc et sapien rutrum, ut porttitor"),
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
