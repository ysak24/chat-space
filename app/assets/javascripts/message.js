$(function(){
  function buildHTML(message){
    var post_image = "";
    if (message.image) {
      post_image = `<img class = "image_size", src="${ message.image }">`;
    }
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.date }
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <div class="lower-message__content">
                      ${ message.content }
                    </div>
                    <div class="lower-message__image">
                      ${ post_image }
                    </div>
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__for__message').val('');
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })

  var UpdatingProcess = function(){
    var id = $('.message').last().data('message-id');
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {id: id},
      dataType: "json"
    })

    .done(function(messages){
      messages.forEach(function(message){
        var html = buildHTML(message);
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function(){
      alert('error');
    });
  }

  $(function(){
    if (location.href.match(/\/groups\/\d+\/messages/)){
      setInterval(UpdatingProcess, 5000);
    }
  })
});
