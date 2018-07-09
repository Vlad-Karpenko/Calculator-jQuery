$(function () {

    /*display buttons click*/
    $('.displayValue').each(function (index, element) {
        $(element).on('click', function () {
            if ($(':text')[0].value.length > 11) {
                $(':text')[0].value = $(':text')[0].value.substr(0, 11);
            }
            $(':text')[0].value += this.value;
        })
    });

    /*calculate*/
    $('input[name=equality]').on('click', function () {
        if ($(':text')[0].value) {
            try {
                $(':text')[0].value = eval($(':text')[0].value);
                if ($(':text')[0].value.length > 11) {
                    $(':text')[0].value = $(':text')[0].value.substr(0, 11);
                }
            } catch (e) {
                $(':text').val('')
            }
        }
    });

    /*clear all value*/
    $('input.C').on('click', function () {
        $(':text').val("");
    });

    /*clear last value*/
    $('input.arrow').on('click', function () {
        $(':text')[0].value = $(':text')[0].value.substring(0, $(':text')[0].value.length - 1);
    });

    /*find root*/
    $('input.root').on('click', function () {
        $(':text')[0].value = Math.sqrt($(':text')[0].value);
        if (isNaN($(':text')[0].value) == true) {
            $(':text').val("");
        }
        if ($(':text')[0].value.length > 11) {
            $(':text')[0].value = $(':text')[0].value.substr(0, 11);
        }
    });

    /*find square root*/
    $('input.squareRoot').on('click', function () {
        $(':text')[0].value = Math.pow($(':text')[0].value, 2)
        if (isNaN($(':text')[0].value) == true) {
            $(':text').val("");
        }
        if ($(':text')[0].value.length > 11) {
            $(':text')[0].value = $(':text')[0].value.substr(0, 11);
        }
    })
});