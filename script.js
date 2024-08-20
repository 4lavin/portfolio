$(document).ready(function () {
    // accordion
    let accordion = $(".accordion")
    accordion.each(function () {
        $(this).click(function () {
            accordion.each(function () {
                $(this).removeClass("accordion-active")
            })
            $(this).addClass("accordion-active")
        })
    })
    // navlink
    let navLink = $(".nav-link")
    navLink.each(function () {
        $(this).click(function () {
            navLink.each(function () {
                $(this).removeClass("active")
            })
            $(this).addClass("active")
        })
    })
    // imglist
    let imageList = $(".image-list")
    imageList.each(function () {
        $(this).click(function () {
            imageList.each(function () {
                $(this).removeClass("image-active")
            })
            $(this).addClass("image-active")
            let imageSrc = $(this).attr("data-label")
            console.log(imageSrc);
            let mainImage = $(".main-image")
            mainImage.attr("src", `${imageSrc}`)
            let desc = $(".desc")
            let activeName = $(this).attr("id")
            desc.each(function () {
                $(this).removeClass("active-name")
            })
            let id = $(`.${activeName}`)
            id.addClass("active-name")
        })
    })

    // section scroll
    let sectionEl = $("section")
    $(window).scroll(function () {
        sectionEl.each(function () {
            let offset = $(this).offset().top
            let scrollTop = $(window).scrollTop()
            let id = $(this).attr("id")
            if (scrollTop >= offset - 200) {
                $(".nav-link").removeClass("active")
                $('a[href*=' + id + ']').addClass("active")
            }

        })
    })
    //info 
    let info = $(".info")
    info.click(function () {
        $(".objectives").addClass("show")
    })
    let close = $(".close")
    close.click(function () {
        $(".objectives").removeClass("show")
    })
    //MyForm

    $("#send-message").submit(function (e) {
        e.preventDefault()
        let fromName = $("#from_name").val()
        let email = $("#email").val()
        let message = $("#message").val()
        let pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;;
        let result = pattern.test(email);
        if (fromName == "" && email == "" && message == "") {
            $(".error").html("Don't leave empty space")
        }
        else if (fromName == "") {
            $(".error").html("Enter Name")
        }
        else if (fromName.length < 2) {
            $(".error").html("Name 2 or more letters")
        }
        else if (email == "") {
            $(".error").html("Enter Email")
        }
        else if (pattern.test(email) == false) {
            $(".error").html("Incorrect Email")
        }
        else if (message == "") {
            $(".error").html("Enter Message")
        }
        else if (fromName.length < 2) {
            $(".error").html("Message 2 or more letters")
        }
        else {
            var templateParams = {
                from_name: fromName,
                email:email,
                message: message,
            };
            var serviveId = "service_p0ol3qg"
            var templateId = "template_krjaebq"
            emailjs.send(serviveId, templateId, templateParams)
                .then(function (response) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
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
        }
        setTimeout(function () {
            $(".error").html("")
        }, 2000);

    })

})