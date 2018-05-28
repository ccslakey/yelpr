// const makeRequest = (term = "", zipCode = "95758") => {
//   request
//     .get("https://api.yelp.com/v3/businesses/search")
//     .query({
//       'location': zipCode,
//       'radius'    : 40000,
//       term
//     })
//     .set('Authorization', `Bearer ${YELP_KEY}`)
//     .set('accept', 'json')
//     .buffer()
//     .end((err, res) => {
//       if(err){
//         console.log("err:\n");
//         console.log(err);
//       }
//
//       if (res) {
//         let location = new google.maps.LatLng(res.body.region.center.latitude, res.body.region.center.longitude)
//         let bizCount = res.body.total;
//
//         let map = new google.maps.Map(document.getElementById('map'), {
//           center: location,
//           zoom: 13
//         });
//         console.log(res);
//
//         clearResults();
//         appendResults(res.body.businesses, bizCount, 0, 20, map);
//       }
//     });
// }
