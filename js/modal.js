// $(function () {
//     $('#openModal_01').click(function(){
//         $('#modalArea_01').fadeIn();
//     });
//     $('#closeModal_01 , #modalBg_01').click(function(){
//       $('#modalArea_01').fadeOut();
//     });
//   });
// $(function () {
//     $('#openModal_02').click(function(){
//         $('#modalArea_02').fadeIn();
//     });
//     $('#closeModal_02 , #modalBg_02').click(function(){
//       $('#modalArea_02').fadeOut();
//     });
//   });

$(function () {
    $('[id^=openModal_]').click(function(){
        var modalNum = $(this).attr('id').split('_')[1];
        $('#modalArea_' + modalNum).fadeIn();
    });
    $('[id^=closeModal_], [id^=modalBg_]').click(function(){
        var modalNum = $(this).attr('id').split('_')[1];
        $('#modalArea_' + modalNum).fadeOut();
    });
});