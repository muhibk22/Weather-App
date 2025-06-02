async function getData(location) {
    const key = "MFYLCNFRLUGQLQAPL9BZXJC9U";
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${key}&contentType=json`,
            { mode: "cors" }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        alert(error);
    }

}
document.addEventListener("DOMContentLoaded", async () => {
    const search = document.getElementById("submit");
    const searchInput = document.getElementById("location");

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            search.click();
        }
    });
    search.addEventListener("click", searchLocation);

    await searchLocation();
    document.getElementById("info").classList.remove("loading");

});
async function searchLocation() {
    const location = document.getElementById("location").value;
    if (!location) return;

    console.log("searched up " + location);
    const result = await getData(location);
    console.log(result);

    const loc = result.resolvedAddress;
    const condition = result.days[0].conditions;
    const temprature = result.days[0].temp;
    const feel = result.days[0].feelslike;
    const humidity = result.days[0].humidity;
    const windspeed = result.days[0].windspeed;

    console.log(loc);
    console.log(condition);
    console.log(temprature)
    console.log(feel, humidity, windspeed);

    updateDisplay(loc, condition, temprature, feel, humidity, windspeed);

}

function updateDisplay(location, condition, temprature, feel, humidity, windspeed) {
    const locationField = document.querySelector(".address");
    const conditionField = document.querySelector(".weather");
    const tempratureField = document.querySelector("#temprature");
    const feelField = document.querySelector(".feel");
    const windField = document.querySelector(".wind");
    const humidityField = document.querySelector(".humidity");

    locationField.textContent = location;
    conditionField.textContent = condition;
    tempratureField.textContent = temprature;
    feelField.textContent = feel;
    humidityField.textContent = humidity;
    windField.textContent = windspeed;

}