const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjM5Yjk2NTVjNGE3ZGEzMzQ3NjY2OGU4YWNkMTEzMiIsInN1YiI6IjY0OWNlNzlmMDkxZTYyMDBjYWRmYjZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8uAnm-resVWAld0Y609cbLVPTtQpCbndOYs9nmZbDE8'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data);
      const results = data.results;
      // use movieID to find movie description and create new paragraph and populate it 
      // 

      
    })

    .then(response => console.log(response))
    .catch(err => console.error(err));


    import {movieRating, movieId, imageUrl} from 'home-script.js';




// using the zipcode from local storage enter into the map
// 












//used to get restaurant with similar review as chosen movie
// service = new google.maps.places.PlacesService(map);
// service.getDetails(request, callback);
// var request = {
//     placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
//     fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
//   };

// service = new google.maps.places.PlacesService(map);
// service.getDetails(request, callback);
  
// function callback(place, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       createMarker(place);
//     }
//   }