$('#fetch_github_profile').on('click', function() {
  var userName = $('#profile_name').val();
  var source = $("#profileTemplate").html();
  var template = Handlebars.compile(source);
  $.get('https://api.github.com/users/' + userName + '?client_id=' + id + '&client_secret=' + secret, function(data) {
    $('#profiles').append(template(data));
  });
});
