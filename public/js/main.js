$(document).ready(() => {
    /*
    $('[name="barcode"]').change(() => {
        $.get('http://www.barcode-list.ru/barcode/RU/barcode-' + $('[name="barcode"]').val() + '/Поиск.htm', (data) => {
            console.log(data);
        })
    });
    */

    // TODO: Получать данные о товаре через штрих код

    $('[name="add-item"]').click((e) => {
        e.preventDefault();
        
        var name = $('form [name="name"]').val(),
            price = $('form [name="price"]').val(),
            count = $('form [name="count"]').val();

        $.post('/items', {
            name: name,
            price: price,
            count: count
        });

        location.reload();
    })

    $('ul').on('click', 'button[type="remove"]', function() {
        var name = $(this).parent().find(".name").text();
        $(this).parent().parent().remove();

        $('ul').first(".lineheight32").remove();

        $.post('/items/remove', {
            name: name,
        });
    });
})