$(function () {
    OwmApi.get_location().then(function (pos) {
        console.error(pos);
    }, function (er) {
        console.warn(er);
    })
})

function set_location() {
    $.ajax({
        url: 'assets/country.json',
        success: function (countries) {
            countries.forEach(function (country) {
                $("#country_selector").append($('<option>').text(country.name).value(country))
            })
        }
    })
}