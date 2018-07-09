$(function () {

    $('.displayValue').each(function (index, element) {
        $(element).on('click', function () {
            if ($(':text')[0].value.length > 14) {
                $(':text')[0].value = $(':text')[0].value.substr(0, 14);
            }
            $(':text')[0].value += this.value;
        })
    });


    $('input[name=equality]').on('click', function () {
        if ($(':text')[0].value) {
            try {
                $(':text')[0].value = eval($(':text')[0].value);
            } catch (e) {
                $(':text').val('')
            }
        }

    })
});