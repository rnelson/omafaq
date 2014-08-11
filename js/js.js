function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getResponseText() {
  var messages = [
    'We\'ve determined that you should call <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a> at <span class="results-number">402-444-5555</span>!',
    'We searched the rolodex and believe this is the perfect answer: call <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a> at <span class="results-number">402-444-5555</span>!',
    'We called your mom. She said the answer lies here, at <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a>. <span class="results-number">402-444-5555</span>',
    'There is but one answer to this question: <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a> at <span class="results-number">402-444-5555</span>.',
    'I wish I could say you were the first one to ask this question, but you are not special. Please call <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a> at <span class="results-number">402-444-5555</span>',
    'You asked, the universe responded. Contact <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a> at <span class="results-number">402-444-5555</span>.'
  ];
  
  return messages[getRandomInt(0, messages.length - 1)];
}

function omafaq() {
  $('#search').hide();
  
  var content = $('#results');
  content.empty();
  content.html('<img src="img/ajax-loader.gif"/><span class="loading">Please wait...</span>');
  content.show();
  
  window.setTimeout(showResults, getRandomInt(2000, 6000));
  
  return false;
}

function showResults() {
  data = '<img src="img/stothert-small.jpg"/><div class="results-text">' + getResponseText() + ' <a href="#" onclick="return reset();">Search again</a></div>';
  
  var content = $('#results');
  content.empty();
  content.html(data);
}

function reset() {
  $('#results').empty().hide();
  $('#search').show();
  
  return false;
}
