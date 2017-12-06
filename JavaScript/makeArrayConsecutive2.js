function makeArrayConsecutive2(statues) {
    if (statues.length  <= 1) {
        return 0;
    } else {
        let smallest = statues[0];
        let largest = statues[1];
        statues.forEach(statue => {
            if (statue < smallest) {
                smallest = statue;
            } else if (statue > largest) {
                largest = statue;
            }
        });
        return( (largest-smallest+1) - statues.length );
    }
}

statues = [6, 2, 3, 8];

makeArrayConsecutive2(statues);