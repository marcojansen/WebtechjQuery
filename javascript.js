$(document).ready(Function() {
        $.ajax({
            type: "Post",
            beforeSend: function(request) {
            request.setRequestHeader("Accept","application/json")
            },
            url: "http://localhost:8080/NotFlix/resources/movies",
            dataType: "json",
        }).fail(function(jqXHR, textStatus) {
            alert("API Request failed: " + textStatus);
        }).done(function(data) {
            $(
        });
    };