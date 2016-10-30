/*jshint esversion: 6 */

function setPageThread(name, {popular, expires, activeClass }) {
    "use strict";
    console.log("Name: ",    name);
    console.log("Popular: ", popular);
    console.log("Expires: ", expires);
    console.log("Active: " , activeClass);
}


// With default value, allows to be called with a single parameter only.
function loadProfiles(userNames = [], { profilesClass, reverseSort } = {}) {
  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}

