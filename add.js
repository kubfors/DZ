let addressLat;
let addressLong;
let positionLat;
let positionLong;

function distanseToObject (addressLat,addressLong,positionLat,positionLong) {
 return sqrt ( (positionLat-addressLat) ** 2 + (positionLong-addressLong) ** 2 );
}