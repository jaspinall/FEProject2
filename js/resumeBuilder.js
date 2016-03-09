/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name": "Julia Stefanczyk",
  "role": "Project Manager",
  "contacts": {
    "mobile": "(267) 505-1104",
    "email": "julia.stefanczyk@gmail.com",
    "github": "jaspinall",
    "location": "Oakland, CA"
    },
    "pictureURL": "images/cat.jpg",
    "welcomeMessage": "A front-end developer with a range of experience in project management, project management, and the K-12 educational market.",
    "skills": ["product management", "project management", "coding"]
};

var work = {
  "jobs": [
    {
      "employer": "Arbitrary Corp",
      "title": "Project Manager",
      "location": "Brooklyn, NY",
      "dates": "2012-present",
      "description": "Managed a team of project managers. Created online and in-person professional development for teachers."
    },
    {
      "employer": "Anonymous Organization",
      "title": "Marketing Operations Manager, Implementation Manager",
      "location": "New York, NY",
      "dates": "2008-2012",
      "description": "Oversaw marketing of technical services for K-12 educational products."
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "San Francisco State University",
      "location": "San Francisco, CA",
      "degree": "B.A.",
      "majors": ["English"],
      "dates": "2002-2006",
      "url": "http://www.sfsu.edu/"
    },
    {
      "name": "San Jose State University",
      "location": "San Jose, CA",
      "degree": "M.Ed",
      "majors": ["Elementary Education", "Special Education"],
      "dates": "2006-2008",
      "url": "http://www.sjsu.edu/"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Weather Finder",
      "dates": "2015",
      "description": "Scraper using PHP and Google API to find the weather for a specific location.",
      "images": ["images/weather-400_small.jpg", "images/weather-400_small.jpg"]
    },
    {
      "title": "Online Diary",
      "dates": "2015",
      "description": "Diary using MySQL and PHP that allows users to enter and store text entries.",
      "images": ["images/diary-400_small.jpg", "images/diary-400_small.jpg"]
    },
    {
      "title": "Contact Form",
      "dates": "2014",
      "description": "Email contact form using Bootstrap and PHP.",
      "images": ["images/mail-400_small.jpg", "images/mail-400_small.jpg"]
    }
  ]
};

var onlineClasses = {
  "classes": [
    {
      "title": "Front-End Web Development Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "URL": "https://www.udacity.com/"
    },
    {
      "title": "The Complete Web Developer Course",
      "school": "Udemy",
      "dates": "2015",
      "URL": "https://www.udemy.com/"
    }
  ]
};

function displayNavFooter() {

  var formattedTitle= HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);

  $(".navbar-text").append(formattedTitle);

  var formattedRole=   $(".navbar-text").append(formattedRole);

};

displayNavFooter();

function displayHeader() {

  for (var contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
    $("#footerContacts").append(formattedContact);
  };


  var formattedWelcome= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#bio").append(formattedWelcome);

  var formattedPicture= HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#bio").append(formattedPicture);

  $("#bio").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  };
};

displayHeader();



function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    var formattedJobAll = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

    $(".work-entry:last").append(formattedJobAll);
  }
};

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


function inName() {
  bio.name = bio.name.split(" ")
  bio.name = bio.name[0] + " " + bio.name[1].toUpperCase();
  return bio.name;
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDesc);

    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

projects.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation)
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates)

    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  };

  $("#education").append(HTMLonlineClasses);

  for (onlineClass in onlineClasses.classes) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineName = HTMLonlineTitle.replace("#", onlineClasses.classes[onlineClass].URL).replace("%data%", onlineClasses.classes[onlineClass].title) + HTMLonlineSchool.replace("%data%", onlineClasses.classes[onlineClass].school);
    $(".education-entry:last").append(formattedOnlineName);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineClasses.classes[onlineClass].dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineClasses.classes[onlineClass].URL);
    $(".education-entry:last").append(formattedOnlineURL);
  }
};

education.display();

