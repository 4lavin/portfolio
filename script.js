$(document).ready(function () {
    $("#myForm").submit(function (e) {
        e.preventDefault()
        var templateParams = {
            from_name: $("#from_name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
        };
        console.log(templateParams.message);
        var serviveId = "service_p0ol3qg"
        var templateId = "template_krjaebq"
        emailjs.send(serviveId, templateId, templateParams)
            .then(function (response) {
                Swal.fire({
                    position: "top-center",
                    icon: "Sent",
                    title: "Your feedback has been sent",
                    showConfirmButton: false,
                    timer: 1500
                });
                $("#from_name").val("")
                $("#email").val("")
                $("#message").val("")
            }, function (err) {
                console.log('FAILED...', err);
            });
    })
    // Active Nav-Item Transition
    $(".nav-link").each(function () {
        $(this).click(function (e) {
            $(".nav-link").each(function () {
                $(this).removeClass("active")
            })
            $(this).addClass("active")
        })
    })
    // Active Accordion Transition
    $(".accordion").each(function () {
        $(this).click(function (e) {
            e.preventDefault()
            $(".accordion").each(function () {
                $(this).removeClass("accordion-active")
            })
            $(this).addClass("accordion-active")
        })
    })
    // Navbar When Scroll
    "use strict";
    $(window).scroll(function () {
        $('.section').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 100) {
                var id = $(this).attr('id');
                // console.log(id);
                $('.nav-link').removeClass('active');
                $('a.nav-link[href^="#'+id+'"]').addClass('active');

            }

        });
    })
})