function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function omahelp() {
  $('#search').hide();
  
  var content = $('#results');
  content.empty();
  content.html('<img src="img/ajax-loader.gif"/><span class="loading">Please wait...</span>');
  content.show();
  
  window.setTimeout(showResults, getRandomInt(2000, 6000));
  
  return false;
}

function showResults() {
  data = '<img src="img/stothert-small.jpg"/><div class="results-text">We\'ve determined that you should call <a href="http://mayors-office.cityofomaha.org/index.php/mayor-s-hotline">the Mayor\'s Hotline</a> at <span class="results-number">402-444-5555</span>! <a href="#" onclick="return reset();">Search again</a></div>';
  
  var content = $('#results');
  content.empty();
  content.html(data);
}

function reset() {
  $('#results').empty().hide();
  $('#search').show();
  
  return false;
}
