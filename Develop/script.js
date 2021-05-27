$(document).ready(function () {

    var currentDay = document.querySelector("#currentDay");
    var startDay = moment().startOf('day').fromNow();

    var nine = document.querySelector("#nine");

    // displays the current time/day at the top of the screen
    function displayCurrent() {
        setInterval(function () {
            currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
        }, 1000)

        console.log()
    }

    displayCurrent();


    // retrives local storage items
    $(".save-button").on('click', function () {
        var value = $(this).siblings(".event").val();
        var time = $(this).parent().attr("id");
        console.log(value);
        console.log(time);
        localStorage.setItem(time, value);
    })

    $("#9 .event").val(localStorage.getItem("9"))
    $("#10 .event").val(localStorage.getItem("10"))
    $("#11 .event").val(localStorage.getItem("11"))
    $("#12 .event").val(localStorage.getItem("12"))
    $("#13 .event").val(localStorage.getItem("13"))
    $("#14 .event").val(localStorage.getItem("14"))
    $("#15 .event").val(localStorage.getItem("15"))
    $("#16 .event").val(localStorage.getItem("16"))
    $("#17 .event").val(localStorage.getItem("17"))

    // TODO: set a get item for each of the timeboxes for each hour


    function timeUpdater() {
        $(".row").each(function () {
            var hour = parseInt($(this).attr("id"))
            var currentHour = moment().hours();

            if (hour < currentHour) {
                $(this).addClass("past")
            } else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })
    }
    timeUpdater()
})


// saves edited text to local storage
    // function saveText(element) {
    //     var text = element.textContent;
    //     console.log(text);

    //     var elementName = element.id;
    //     localStorage.setItem(elementName, text);
    // }
