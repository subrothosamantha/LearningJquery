
function barack() {
    console.log('Barack obama is against wisdom');
}

$(document).ready(() => {
    // $('button').submit(()=>{
    //     $('p.tosh').hide();  
    //   });

    // $('button').click(()=>{

    // })

    // $('#wiki').show(5000,()=>{
    //     $('#wiki').hide(5000);
    // });

    $('.tog').click(() => {
        $('#wiki').css('color','blue');
        $('#wiki').toggle(1000);
        // toggle()
        // fadeOut(),fadeIn(),fadeToggle(),
    })

    $('#tog').on({
        click: () => {
            $('#wiki').css('color','red');
            $('#wiki').slideToggle(1000);
        }
    })



    // $('#wiki').show(5000);

    $('button').on({
        keydown: function () {
            console.log('mouse hovered')
        },
        click: function () {
            console.log('button clicked');
        }


    });
});
//$('selector').action()
//three major selectro in jquery
//class selectro $('.classname');
//id selector $('#id name');
//element selector $('p'); to select paragraph

//events in jquerya

//   ---Mouse events = click,dblclick,mouseenter, mouseleave
//   ---KeyboardEvents = keypress, keydown,MediaKeyStatusMap
//  ---form events = submti, change, focus, blur
//  ---document/window events = load, resize, scroll, unload
