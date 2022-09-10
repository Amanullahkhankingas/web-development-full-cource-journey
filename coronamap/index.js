// console.log("this is me")

// function updateMap()
// {
//     fetch("/data.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
// }
// updateMap();


function updateMap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            
        });
    })
};
updateMap();