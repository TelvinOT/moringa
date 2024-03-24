function speedDetector (speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const maxDemerit = 12;

    if (speed < speedLimit +  kmPerDemerit) {
        console.log("ok");
        return "ok";
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit)

    if (demeritPoints > maxDemerit) {
        console.log('license suspended');
    }else {
        console.log('points' + demeritPoints);
    }


}

speedDetector(60);
speedDetector(70);
speedDetector(80);
speedDetector(100);
speedDetector(110);
speedDetector(130);
speedDetector(140);