// this program prints out numbers from 1 to 100 to see what numbers are odd and even.

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}