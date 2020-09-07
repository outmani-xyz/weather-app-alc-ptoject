class OwmApi {
    baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    appId = '542f03f0752f0d6e3916760a1d82fece';
    weater = '';
    constructor() {
    }

    static get_location() {
        return new Promise(function (resolve, reject) {

            if (window.navigator) {
                navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve({
                        long: pos.coords.longitude,
                        lat: pos.coords.latitude
                    })
                }, function (err) {
                    reject(err.message)
                })
            } else {
                resolve('This Bowser dont support Geolocation Api')
            }

        })
    }

    get_data(json_data) {
        json_data = {
            ...json_data, ...{
                appid: appid,
            }
        };
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: baseUrl,
                data: json_data,
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function (err) {
                    reject(err.Text)
                }
            })
        });
    }
}