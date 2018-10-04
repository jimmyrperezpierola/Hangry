const dummyData = [
    {
      "restaurantId": "4b463a75f964a520bf1a26e3",
      "name": "LaSalle Market and Deli",
      "distance": 379,
      "lat": 41.81061273935046,
      "long": -72.92285654813413,
      "categoryId": "4bf58dd8d48988d146941735",
      "categoryShortName": "Deli / Bodega",
      "price": 1,
      "rating": 8
    },
    {
      "restaurantId": "4bfeafd705672d7fc8870a04",
      "name": "Taco Bell",
      "distance": 2698,
      "lat": 41.82838146922496,
      "long": -72.9012845699489,
      "categoryId": "4bf58dd8d48988d16e941735",
      "categoryShortName": "Fast Food",
      "price": 1,
      "rating": 1.5
    },
    {
      "restaurantId": "55a5421a498e48e87c7f5640",
      "name": "Giv Coffee",
      "distance": 2699,
      "lat": 41.825408788961504,
      "long": -72.89644322182761,
      "categoryId": "4bf58dd8d48988d1e0931735",
      "categoryShortName": "Coffee Shop",
      "price": 2,
      "rating": 3.3
    },
    {
      "restaurantId": "4be72e2f910020a14623d514",
      "name": "Green Papaya Thai Restaurant",
      "distance": 2819,
      "lat": 41.824137696907925,
      "long": -72.89297803483066,
      "categoryId": "4bf58dd8d48988d149941735",
      "categoryShortName": "Thai",
      "price": 2,
      "rating": 1.4
    },
    {
      "restaurantId": "4b5a429df964a5203bb828e3",
      "name": "Panera Bread",
      "distance": 3411,
      "lat": 41.82279374779137,
      "long": -72.88327395915985,
      "categoryId": "4bf58dd8d48988d16a941735",
      "categoryShortName": "Bakery",
      "price": 3,
      "rating": 9.7
    },
    {
      "restaurantId": "4b65bd92f964a520dcfc2ae3",
      "name": "Dish 'n Dat",
      "distance": 3469,
      "lat": 41.82246998360055,
      "long": -72.88224719085423,
      "categoryId": "4bf58dd8d48988d147941735",
      "categoryShortName": "Diner",
      "price": 3,
      "rating": 2.4
    },
    {
      "restaurantId": "4b367392f964a520c13525e3",
      "name": "Flatbread",
      "distance": 3521,
      "lat": 41.82181227689942,
      "long": -72.88112770625878,
      "categoryId": "4bf58dd8d48988d1ca941735",
      "categoryShortName": "Pizza",
      "price": 4,
      "rating": 3.3
    },
    {
      "restaurantId": "4c4dc1469932e21ea2bcb6cc",
      "name": "Dunkin' Donuts",
      "distance": 4288,
      "lat": 41.81717997723441,
      "long": -72.86920518372492,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 3,
      "rating": 3.2
    },
    {
      "restaurantId": "4c82c7fdd34ca1435ace2f80",
      "name": "McDonald's",
      "distance": 4370,
      "lat": 41.81792091357868,
      "long": -72.8684269824405,
      "categoryId": "4bf58dd8d48988d16e941735",
      "categoryShortName": "Fast Food",
      "price": 2,
      "rating": 6.5
    },
    {
      "restaurantId": "4bb677126edc76b0e7fd301c",
      "name": "Puerto Vallarta Mexican Restaurant",
      "distance": 4381,
      "lat": 41.81591479506006,
      "long": -72.86769143849651,
      "categoryId": "4bf58dd8d48988d1c1941735",
      "categoryShortName": "Mexican",
      "price": 2,
      "rating": 9.5
    },
    {
      "restaurantId": "588d4e299c95481c3959ef44",
      "name": "Liki Sushi & Asian Bistro",
      "distance": 4675,
      "lat": 41.815526,
      "long": -72.863984,
      "categoryId": "4bf58dd8d48988d1d2941735",
      "categoryShortName": "Sushi",
      "price": 2,
      "rating": 6.3
    },
    {
      "restaurantId": "4b902dbaf964a520737a33e3",
      "name": "Chili's Grill & Bar",
      "distance": 4685,
      "lat": 41.81729032935008,
      "long": -72.86432670538127,
      "categoryId": "56aa371ae4b08b9a8d5734ba",
      "categoryShortName": "Tex-Mex",
      "price": 1,
      "rating": 6.6
    },
    {
      "restaurantId": "4b4ccaaaf964a5200ebf26e3",
      "name": "Cosi",
      "distance": 4721,
      "lat": 41.81546683492783,
      "long": -72.86341416016394,
      "categoryId": "4bf58dd8d48988d16d941735",
      "categoryShortName": "Café",
      "price": 3,
      "rating": 2.2
    },
    {
      "restaurantId": "4c0fe3976b7e2d7f52c02635",
      "name": "Bertucci's",
      "distance": 4775,
      "lat": 41.81677300200213,
      "long": -72.8630706183854,
      "categoryId": "4bf58dd8d48988d110941735",
      "categoryShortName": "Italian",
      "price": 1,
      "rating": 8.7
    },
    {
      "restaurantId": "514b3b07e4b0456df5bc8847",
      "name": "BurgerFi",
      "distance": 4776,
      "lat": 41.81712443926635,
      "long": -72.86316470427366,
      "categoryId": "4bf58dd8d48988d16c941735",
      "categoryShortName": "Burgers",
      "price": 2,
      "rating": 8.6
    },
    {
      "restaurantId": "4ba8ced6f964a5209bf039e3",
      "name": "Starbucks",
      "distance": 4794,
      "lat": 41.81639092,
      "long": -72.8627379,
      "categoryId": "4bf58dd8d48988d1e0931735",
      "categoryShortName": "Coffee Shop",
      "price": 1,
      "rating": 1.3
    },
    {
      "restaurantId": "54b5537e498e46b9ea8b117d",
      "name": "Truffles Bakery",
      "distance": 5274,
      "lat": 41.81408000599044,
      "long": -72.85640568144657,
      "categoryId": "4bf58dd8d48988d16d941735",
      "categoryShortName": "Café",
      "price": 1,
      "rating": 0.2
    },
    {
      "restaurantId": "4bdb101a3904a593d88d489e",
      "name": "Farmington Woods Country Club",
      "distance": 5715,
      "lat": 41.76821127092808,
      "long": -72.87647555723892,
      "categoryId": "4bf58dd8d48988d1e6941735",
      "categoryShortName": "Golf Course",
      "price": 4,
      "rating": 8.6
    },
    {
      "restaurantId": "5a29d2e86dcf046ed9f61a38",
      "name": "Finnegan's Tavern",
      "distance": 5913,
      "lat": 41.770907,
      "long": -72.970112,
      "categoryId": "52e81612bcbc57f1066b7a06",
      "categoryShortName": "Irish",
      "price": 3,
      "rating": 4.6
    },
    {
      "restaurantId": "4baa847af964a520ce703ae3",
      "name": "Golf Club of Avon",
      "distance": 5996,
      "lat": 41.79208065008841,
      "long": -72.85059928894043,
      "categoryId": "4bf58dd8d48988d1e6941735",
      "categoryShortName": "Golf Course",
      "price": 4,
      "rating": 5.6
    },
    {
      "restaurantId": "4c16ace0daf42d7f338b4466",
      "name": "Cumberland Farms",
      "distance": 5999,
      "lat": 41.76987336356651,
      "long": -72.97018826007843,
      "categoryId": "4d954b0ea243a5684a65b473",
      "categoryShortName": "Convenience Store",
      "price": 4,
      "rating": 4.6
    },
    {
      "restaurantId": "59f31eea7564f769c26c37f9",
      "name": "Unionville Family Restaurant",
      "distance": 6321,
      "lat": 41.757388,
      "long": -72.885769,
      "categoryId": "4bf58dd8d48988d1c4941735",
      "categoryShortName": "Restaurant",
      "price": 2,
      "rating": 9.1
    },
    {
      "restaurantId": "4be440df2457a59323f0a915",
      "name": "Dunkin Donuts",
      "distance": 6322,
      "lat": 41.75691321392378,
      "long": -72.88707078515566,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 1,
      "rating": 0.7
    },
    {
      "restaurantId": "583cd68844587f3c63bc9706",
      "name": "Taprock Beer Bar & Refuge",
      "distance": 6535,
      "lat": 41.75495683879838,
      "long": -72.88660668844965,
      "categoryId": "4bf58dd8d48988d157941735",
      "categoryShortName": "New American",
      "price": 2,
      "rating": 4.6
    },
    {
      "restaurantId": "554a620c498ec595b67cbe32",
      "name": "Dom's Coffee",
      "distance": 7236,
      "lat": 41.810382422557076,
      "long": -72.83232758345521,
      "categoryId": "4bf58dd8d48988d1e0931735",
      "categoryShortName": "Coffee Shop",
      "price": 1,
      "rating": 3
    },
    {
      "restaurantId": "4b69c225f964a52069b22be3",
      "name": "First & Last Tavern",
      "distance": 7241,
      "lat": 41.810954207165935,
      "long": -72.83229191353077,
      "categoryId": "4bf58dd8d48988d110941735",
      "categoryShortName": "Italian",
      "price": 1,
      "rating": 4.5
    },
    {
      "restaurantId": "4b1ad027f964a5205cf223e3",
      "name": "Bruegger's Bagel Bakery",
      "distance": 7642,
      "lat": 41.807357068484286,
      "long": -72.82739818096167,
      "categoryId": "4bf58dd8d48988d179941735",
      "categoryShortName": "Bagels",
      "price": 4,
      "rating": 2.8
    },
    {
      "restaurantId": "4e4029c7b0fb875af884fe12",
      "name": "Lyme Bar & Grill",
      "distance": 7646,
      "lat": 41.81897466496236,
      "long": -72.82845288505375,
      "categoryId": "4bf58dd8d48988d116941735",
      "categoryShortName": "Bar",
      "price": 2,
      "rating": 2.4
    },
    {
      "restaurantId": "5215097f11d218c2cc6f4b15",
      "name": "Little City Pizza",
      "distance": 7669,
      "lat": 41.820148514076074,
      "long": -72.82844291758127,
      "categoryId": "4bf58dd8d48988d14e941735",
      "categoryShortName": "American",
      "price": 2,
      "rating": 6.4
    },
    {
      "restaurantId": "4c2bcc8e2219c928832fa548",
      "name": "Max a Mia",
      "distance": 7891,
      "lat": 41.80784549697253,
      "long": -72.82439679926341,
      "categoryId": "4bf58dd8d48988d110941735",
      "categoryShortName": "Italian",
      "price": 1,
      "rating": 6.8
    },
    {
      "restaurantId": "56da3a6c498e07b1224ba5b0",
      "name": "The North House",
      "distance": 8507,
      "lat": 41.80533005893501,
      "long": -72.81705425793044,
      "categoryId": "4bf58dd8d48988d14e941735",
      "categoryShortName": "American",
      "price": 2,
      "rating": 1.3
    },
    {
      "restaurantId": "4e0c663552b1289d1186f7ef",
      "name": "Dunkin' Donuts",
      "distance": 8768,
      "lat": 41.83248386264508,
      "long": -72.81890473429702,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 4,
      "rating": 1
    },
    {
      "restaurantId": "4b8aedbff964a520b88932e3",
      "name": "Wood-n-Tap",
      "distance": 9355,
      "lat": 41.740848308465104,
      "long": -72.85227356744811,
      "categoryId": "4bf58dd8d48988d14e941735",
      "categoryShortName": "American",
      "price": 2,
      "rating": 8.3
    },
    {
      "restaurantId": "4bf0628f6f8aa59302d6c13c",
      "name": "Twigs at the Simsbury Inn",
      "distance": 9984,
      "lat": 41.85221043815193,
      "long": -72.81453503923899,
      "categoryId": "4bf58dd8d48988d1d5941735",
      "categoryShortName": "Hotel Bar",
      "price": 2,
      "rating": 5.1
    },
    {
      "restaurantId": "4b4f341ff964a52028fd26e3",
      "name": "Abigail's Grille and Wine Bar",
      "distance": 9990,
      "lat": 41.846793454052936,
      "long": -72.81070042805653,
      "categoryId": "4bf58dd8d48988d157941735",
      "categoryShortName": "New American",
      "price": 1,
      "rating": 8.2
    },
    {
      "restaurantId": "4bb7532eef159c74a10577f7",
      "name": "Dunkin Donuts",
      "distance": 10779,
      "lat": 41.7338786194022,
      "long": -72.83643933921836,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 4,
      "rating": 6.5
    },
    {
      "restaurantId": "4b87d7b8f964a520bece31e3",
      "name": "Brookside Bagels",
      "distance": 10966,
      "lat": 41.86319365155949,
      "long": -72.80970724054166,
      "categoryId": "4bf58dd8d48988d179941735",
      "categoryShortName": "Bagels",
      "price": 1,
      "rating": 3.5
    },
    {
      "restaurantId": "500f36d4e4b0dbaf8f4bc806",
      "name": "Millwright's Restaurant & Tavern",
      "distance": 11301,
      "lat": 41.870058592869015,
      "long": -72.81134092816636,
      "categoryId": "4bf58dd8d48988d14e941735",
      "categoryShortName": "American",
      "price": 1,
      "rating": 5.8
    },
    {
      "restaurantId": "4b78bfb5f964a520afe02ee3",
      "name": "Five Guys",
      "distance": 11770,
      "lat": 41.70684769564571,
      "long": -72.87956105901037,
      "categoryId": "4bf58dd8d48988d16c941735",
      "categoryShortName": "Burgers",
      "price": 3,
      "rating": 9.9
    },
    {
      "restaurantId": "4b34dbfef964a520da2825e3",
      "name": "Starbucks",
      "distance": 11812,
      "lat": 41.72785569,
      "long": -72.82671629,
      "categoryId": "4bf58dd8d48988d1e0931735",
      "categoryShortName": "Coffee Shop",
      "price": 1,
      "rating": 9.8
    },
    {
      "restaurantId": "4b91b247f964a5209ad033e3",
      "name": "Naples Pizza",
      "distance": 11835,
      "lat": 41.727626802199495,
      "long": -72.82665106523649,
      "categoryId": "4bf58dd8d48988d1ca941735",
      "categoryShortName": "Pizza",
      "price": 3,
      "rating": 7
    },
    {
      "restaurantId": "4bdb3d913904a593e56c499e",
      "name": "Cumberland Farms",
      "distance": 11999,
      "lat": 41.70313327307127,
      "long": -72.88780152797699,
      "categoryId": "4d954b0ea243a5684a65b473",
      "categoryShortName": "Convenience Store",
      "price": 3,
      "rating": 3.7
    },
    {
      "restaurantId": "4b773ce4f964a520958a2ee3",
      "name": "Mama Luke's",
      "distance": 12162,
      "lat": 41.70134109627959,
      "long": -72.88958265321216,
      "categoryId": "4bf58dd8d48988d1ca941735",
      "categoryShortName": "Pizza",
      "price": 1,
      "rating": 1.4
    },
    {
      "restaurantId": "4b3f863bf964a52065a825e3",
      "name": "Truffles",
      "distance": 12243,
      "lat": 41.72533551542136,
      "long": -72.82269448851297,
      "categoryId": "4bf58dd8d48988d16a941735",
      "categoryShortName": "Bakery",
      "price": 2,
      "rating": 1.5
    },
    {
      "restaurantId": "4bb50502310276b0f8afcf90",
      "name": "Chili's Grill & Bar",
      "distance": 12277,
      "lat": 41.69937176553537,
      "long": -72.89629844023796,
      "categoryId": "56aa371ae4b08b9a8d5734ba",
      "categoryShortName": "Tex-Mex",
      "price": 3,
      "rating": 7
    },
    {
      "restaurantId": "4bada6cbf964a52031613be3",
      "name": "Taco Bell",
      "distance": 12405,
      "lat": 41.69767041769628,
      "long": -72.9014602088177,
      "categoryId": "4bf58dd8d48988d16e941735",
      "categoryShortName": "Fast Food",
      "price": 1,
      "rating": 2.1
    },
    {
      "restaurantId": "4b55ce8ff964a520ecf027e3",
      "name": "Panera Bread",
      "distance": 12507,
      "lat": 41.6965696,
      "long": -72.9036149,
      "categoryId": "4bf58dd8d48988d16a941735",
      "categoryShortName": "Bakery",
      "price": 2,
      "rating": 5.9
    },
    {
      "restaurantId": "4bbbddbc2d9ea5935e0aa0ce",
      "name": "Dunkin' Donuts",
      "distance": 12546,
      "lat": 41.69589234651251,
      "long": -72.90850043846653,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 3,
      "rating": 6.9
    },
    {
      "restaurantId": "4c39148293db0f47fcdf2292",
      "name": "Dunkin Donuts",
      "distance": 12783,
      "lat": 41.69350767146082,
      "long": -72.91524616239441,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 3,
      "rating": 7
    },
    {
      "restaurantId": "4baa5ad4f964a5204f623ae3",
      "name": "Dunkin Donuts",
      "distance": 14667,
      "lat": 41.68643988583815,
      "long": -72.85233931225811,
      "categoryId": "4bf58dd8d48988d148941735",
      "categoryShortName": "Donuts",
      "price": 2,
      "rating": 4.5
    }
  ]  

const dummyUserData = {
    weights: {
        categories: 0.5,
        priceRange: 0.2,
        rating:     0.3,
        range:      0.1,
    },
    categories: {
        '4bf58dd8d48988d146941735': 0.5, //deli
        '4bf58dd8d48988d1e0931735': 0.5, //coffee shop
    },
    priceTier: 2,
    rating: 2,
    distance: 500,
}

const calcCategoryWeighted = (venue, userData) => {
    if (userData.categories[venue.categoryId]) {
        const preferedOutOfTen = userData.categories[venue.categoryId] * 10;
        const weightedTotal = preferedOutOfTen * userData.weights.categories;
        return weightedTotal;
    } else {
        return 0;
    }
}
const calcPriceWeighted = (venue, userData) => {
    const venuePriceOutOfTen = 10 - (venue.price * 2.5);
    const preferedPriceOutOfTen = 10 - (userData.priceTier * 2.5);
    const diffrence = Math.abs(venuePriceOutOfTen - preferedPriceOutOfTen);
    const diffrenceOutOfTen = 10 - diffrence;
    const weightedTotal = diffrenceOutOfTen * userData.weights.priceRange;
    return weightedTotal;
}
const calcRangeWeighted = (venue, userData, searchRange) => {
    const tensInt = 10 / searchRange;
    const rangeOutOfTen = 10 - (venue.distance * tensInt);
    const weightedTotal = Math.ceil(rangeOutOfTen) * userData.weights.range;
    return weightedTotal;
}
const calcRatingWeighted = (venue, userData) => {
    const diffrence = Math.abs(venue.rating - userData.rating);
    const diffrenceOutOfTen = 10 - diffrence;
    const weightedTotal = diffrenceOutOfTen * userData.weights.rating;
    return weightedTotal;
}
const calcSavor = (venue, userData) => {
    const cat = calcCategoryWeighted(venue, userData);
    const prc = calcPriceWeighted(venue, userData);
    const rng = calcRangeWeighted(venue, userData, 5000);
    const rtg = calcRatingWeighted(venue, userData);
    return (cat + prc + rng + rtg);
}
const rateVenu = (venues, userData) => {
    const keyedVenues = {}
    const ratings = [];
    venues.forEach(venue => {
        keyedVenues[venue.restaurantId] = venue;
        keyedVenues[venue.restaurantId].savor = calcSavor(venue, userData);
        ratings.push(calcSavor(venue, userData))
    });;
    console.log(ratings.sort());
}
const adjustCatWeights = (catSelected, userData) => {

}
rateVenu(dummyData, dummyUserData);