setInterval(function () {
    //London Element
    let londonElement = document.querySelector('#london-element');
    if (londonElement) {
        let londonDateElement = document.querySelector('#date-london');

        let londonTimeZone = moment().tz('Europe/London');
        let londonTimeElement = document.querySelector('#time-london');

        londonDateElement.innerHTML = `${londonTimeZone.format(
            'dddd MMMM Do YYYY'
        )}`;
        londonTimeElement.innerHTML = `${londonTimeZone.format(
            'hh:mm:ss'
        )} <small class="small" >${londonTimeZone.format('A')}</small>`;
    }

    //Paris Element
    let parisElement = document.querySelector('#paris-element');
    if (parisElement) {
        let parisDateElement = document.querySelector('#date-paris');
        let parisTimeZone = moment().tz('Europe/Paris');
        let parisTimeElement = document.querySelector('#time-paris');

        parisDateElement.innerHTML = `${parisTimeZone.format(
            'dddd MMMM Do YYYY'
        )}`;
        parisTimeElement.innerHTML = `${parisTimeZone.format(
            'hh:mm:ss'
        )} <small class="small" >${parisTimeZone.format('A')}</small>`;
    }

    //Tokyo Element
    let tokyoElement = document.querySelector('#tokyo-element');
    if (tokyoElement) {
        let tokyoDateElement = document.querySelector('#date-tokyo');
        let tokyoTimeZone = moment().tz('Asia/Tokyo');
        let tokyoTimeElement = document.querySelector('#time-tokyo');

        tokyoDateElement.innerHTML = `${tokyoTimeZone.format(
            'dddd MMMM Do YYYY'
        )}`;
        tokyoTimeElement.innerHTML = `${tokyoTimeZone.format(
            'hh:mm:ss'
        )} <small class="small" >${tokyoTimeZone.format('A')}</small>`;
    }

    //NYC Element
    let nycElement = document.querySelector('#nyc-element');
    if (nycElement) {
        let nycDateElement = document.querySelector('#date-nyc');
        let nycTimeZone = moment().tz('America/New_York');
        let nycTimeElement = document.querySelector('#time-nyc');

        nycDateElement.innerHTML = `${nycTimeZone.format('dddd MMMM Do YYYY')}`;
        nycTimeElement.innerHTML = `${nycTimeZone.format(
            'hh:mm:ss'
        )} <small class="small" >${nycTimeZone.format('A')}</small>`;
    }
}, 1000);

///////////////////////////
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === 'current') {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace('_', ' ').split('/')[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector('#cities');
    citiesElement.innerHTML = `<div class="city-container">
                    <div class="flex-headings">
                        <div>
                            <p class="city">
                                ${cityName}
                                
                            </p>
                        </div>
                        <div class="time-select">${cityTime.format(
                            'hh:mm:ss'
                        )} <small class="small-select">${cityTime.format(
        'A'
    )}</small>
                        </div>
                    </div>
                    <div class="date">${cityTime.format('dddd MMMM Do YYYY')}
                </div>
                <a href="index.html">Back to all cities</a>`
                ;
}

let citiesSelectElement = document.querySelector('#cities-select');
citiesSelectElement.addEventListener('change', updateCity);
