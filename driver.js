function canDrive(hasLicence, isDrunk, age) {
    if (hasLicence && !isDrunk && age > 18) {
        return "может";
    } else {
        return "не может";
    }
}