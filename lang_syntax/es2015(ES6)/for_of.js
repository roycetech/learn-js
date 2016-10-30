/*jshint esversion: 6 */

function main() {
    'use strict';
    let topicId = currentTopic();
    let activeUsers = ["Sam", "Tyler", "Brook"];

    for(let user of activeUsers ){
      notifyTopicReply(topicId, user);
    }
}



// Using Map
 let mapSettings = new Map();
mapSettings.set( "user", "Sam" );
mapSettings.set( "topic", "ES2015" );
mapSettings.set( "replies", ["Can't wait!", "So Cool"] );

for(let [key, value] of mapSettings) {
 console.log(`${key} = ${value}`);
}




// Using Set
let tags3 = new Set();
tags3.add("JavaScript");
tags3.add("Programming");
tags3.add({ version: "2015" });
tags3.add("Web");
for(let tag of tags3){
  console.log(tag);
}
