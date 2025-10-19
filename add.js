function distanseToObject (addressLat,addressLong,positionLat,positionLong) {
 return Math.sqrt ( (positionLat-addressLat) ** 2 + (positionLong-addressLong) ** 2 );
}