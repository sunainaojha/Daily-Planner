$(function () {
    $(".saveBtn").on("click", function () {
        var data = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        console.log(data, time)
        localStorage.setItem(time, data);
    })

    $("#currentDay").text(
        dayjs().format("DD/MM/YYYY"))
    var currentHour = dayjs().hour()
    for (var i = 9; i <= 17; i++) {
        var id = "hour-" + i
        var data = localStorage.getItem(id)
        $("#" + id).children("textarea").val(data)
        if (i < currentHour) {
            $("#" + id).addClass("past")
        } else if (i === currentHour) {
            $("#" + id).addClass("present")
        } else {
            $("#" + id).addClass("future")
        }
    }
});