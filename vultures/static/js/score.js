$(function() {
    $('div.answer img.vote').click(function() {
        var id = $(this).parents('div.answer').attr('id').split('_')[1];
        var vote_type = $(this).hasClass('up') ? 'up' : 'down';
        if($(this).hasClass('selected')) {
            $.post('/vote/', {id: id, type: vote_type}, function(json) {
                if(json.success == 'success') {
                    $('#answer_' + id)
                     .find('img.' + vote_type);
                     .attr('src', 'vote_' + vote_type + '_selected.png')
                     .addClass('selected');
                    $('div.score', '#answer_' + id).html(json.score);
                }
            });
        } else {
            $.post('/remove_vote/', {id: id, type: vote_type}, function(json) {
                if(json.success == 'success') {
                    $('#answer_' + id)
                     .find('img.' + vote_type);
                     .attr('src', 'vote_' + vote_type + '.png')
                     .removeClass('selected');
                    $('div.score', '#answer_' + id).html(json.score);
                }
            });                
        }
    });
});