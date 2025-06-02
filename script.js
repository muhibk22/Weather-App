async function getData(location) {
    const key = "MFYLCNFRLUGQLQAPL9BZXJC9U";
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${key}&contentType=json`,
            { mode: "cors" }
        );
        const result= await response.json();
        return result;
    } catch (error) {
        alert(error);
    }

}
document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("submit");
  search.addEventListener("click", searchLocation);
});
async function searchLocation(){
    const location=document.getElementById("location").value;
    console.log("searched up "+ location);
    const result= await getData(location);
    console.log(result);

    const loc=result.resolvedAddress;
    const condition=result.days[0].conditions;
    const temprature=result.days[0].temp;
    const feel=result.days[0].feelslike;
    const humidity=result.days[0].humidity;
    const windspeed=result.days[0].windspeed;

    console.log(loc);
    console.log(condition);
    console.log(temprature)
    console.log(feel, humidity, windspeed);

}