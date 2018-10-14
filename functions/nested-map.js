var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
],

var lists = [
  {
    "id": 5434364,
    "name": "New Releases"
  },
  {
    "id": 65456475,
    name: "Thrillers"
  }
],
videos = [
  {
    "listId": 5434364,
    "id": 65432445,
    "title": "The Chamber"
  },
  {
    "listId": 5434364,
    "id": 675465,
    "title": "Fracture"
  },
  {
    "listId": 65456475,
    "id": 70111470,
    "title": "Die Hard"
  },
  {
    "listId": 65456475,
    "id": 654356453,
    "title": "Bad Boys"
  }
];



allVideoIdsInMovieLists = [];

// without arrow functions
movieLists.forEach(function(movieList) {
  movieList.videos.forEach(function(video) {
    allVideoIdsInMovieLists.push(video.id);
  });
});

lists.map(function(list) {
  return {
    name: list.name,
    videos:
      videos.
        filter(function(video) {
          return video.listId === list.id;
        }).
        map(function(video) {
          return {id: video.id, title: video.title};
        })
  };
});

// with arrow functions
movieLists.map((moveList) => moveList.videos.map((video) => allVideoIdsInMovieLists.push({id: video.id, title: video.title})));

lists.map((list) => ({
  id: list.id,
  name: list.name,
  videos: videos.filter((video) => video.listId === list.id ).map( (video) => ({id: video.id, name: video.title}))
}));
