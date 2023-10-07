$(document).ready(function () {
    $(document).ready(function () {
        // Set order to disabled
        $('.cancel').prop('disabled', true)
        // Function to Manage Order
        function manageOrder(orderType, message) {
            let parentElement = $(this).closest('li')
            parentElement.find('.cancel').prop('disabled', orderType)
            parentElement.find('.order').prop('disabled', !orderType)
            alert(message)
        }

        // Delegation event to handle Order & Cancel
        $('#foods').on('click', '.order', function () {
            manageOrder.call(this, false, 'Your order will be prepared shortly')
        })

        $('#foods').on('click', '.cancel', function () {
            manageOrder.call(this, true, 'Your order has been cancelled')
        })

        // Show/Hide Button
        function toggleShowHide(selector, buttonText, name) {
            $(selector).fadeToggle()
            const text = $(buttonText).text()
            $(buttonText).text(text === name ? 'Show' + name : 'Hide' + name)
        }
        // Delegation event
        $('#toggleFoods').text('Hide Foods').on('click', function () {
            toggleShowHide('#foods', this, 'Foods')
        }) 
        $('#toggleDrinks').text('Hide Drinks').on('click', function () {
            toggleShowHide('#drinks', this, 'Drinks')
        })

        // Another logic Show/Hide Button
        // Foods
        // $('#toggleFoods').text('Hide Foods').on('click', function () {
        //     $('#foods').fadeToggle()
        //     if ($(this).text() === 'Hide Foods') {
        //         $(this).text('Show Foods')
        //     } else {
        //         $(this).text('Hide Foods')
        //     }
        // })
        // // Drinks
        // $('.toggleDrinks').text('Hide Drinks').on('click', function () {
        //     $('#drinks').fadeToggle()
        //     if ($(this).text() === 'Hide Drinks') {
        //         $(this).text('Show Drinks')
        //     } else {
        //         $(this).text('Hide Drinks')
        //     }
        // })

        //Add/Less Order
        $(document).ready(function () {
            $('.less').prop('disabled', true) // Menonaktifkan tombol -
        
            $('.add').on('click', function () {
                let counter = $(this).siblings('p')
                let value = parseInt(counter.text())
                value++
                counter.text(value)
                $(this).siblings('.less').prop('disabled', false) // Mengaktifkan tombol -
            })
        
            $('.less').on('click', function () {
                let counter = $(this).siblings('p')
                let value = parseInt(counter.text())
                if (value > 0) {
                    value--
                    counter.text(value)
                }
        
                if (value === 0) {
                    $(this).prop('disabled', true) // Menonaktifkan tombol - jika nilainya 0
                }
            })
        })
    })
})