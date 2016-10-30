/* jshint esversion: 6 */

function _isFixedTopic(param) {}
function _fetchLongPreview(param1, param2) {}
function _fetchPreview(param) {}


function hideReplies(topicId){
'use strict';

  let previewText = 1;

  if(_isFixedTopic(topicId)){
    const TEXT_SEPARATOR = '%%';
    previewText = _fetchLongPreview(topicId, TEXT_SEPARATOR);
  }else{
    previewText = _fetchPreview(topicId);
  }

  console.log( TEXT_SEPARATOR );
}

hideReplies(42);