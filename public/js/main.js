$(document).ready(() => {
    /*
    $('[name="barcode"]').change(() => {
        $.get('http://www.barcode-list.ru/barcode/RU/barcode-' + $('[name="barcode"]').val() + '/Поиск.htm', (data) => {
            console.log(data);
        })
    });
    */

    // TODO: Получать данные о товаре через штрих код

    $('.add-btn').click((e) => {
        e.preventDefault();
        
        var bar = $('form [name="barcode"]').val(),
            price = $('form [name="price"]').val(),
            count = $('form [name="count"]').val();

        $.post('/items', {
            bar: bar,
            price: price,
            count: count
        }, (result) => {
            console.log(result);
        });
    })
})