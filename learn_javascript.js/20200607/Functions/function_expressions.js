const plantNeedsWater =
    function water(day, plantNeedsWater) {
        if (day === 'Wednesday') {
            return true;
        } else {
            return false;
        }
    };
console.log(plantNeedsWater('Tuesday'));