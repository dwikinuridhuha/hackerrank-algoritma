const masukanN = 7;

function staircase(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (j === i) {
                for (let k = 0; k <= (n - j); k++) {
                    if (k === (n - j)) {
                        process.stdout.write("#" + "\n");
                    }
                    else {
                        process.stdout.write("#");
                    }
                }
            } else {
                process.stdout.write(" ");
            }
        }
    }
}

staircase(masukanN);