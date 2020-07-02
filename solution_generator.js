const fs = require("fs");
const path = require("path");

// Для нахождения простых чисел используем классический
// алгоритм - Решето Эратосфена
const eratosthenesSieve = function(upperBound) {
    const sieve = [];
    const result = [];

    for (let i = 0; i < upperBound; i++) {
        sieve.push(true);
    }

    for (let i = 2; i <= Math.sqrt(upperBound); i++) {
        if (sieve[i]) {
            for (var j = i * i; j < upperBound; j += i) {
                sieve[j] = false;
            }
        }
    }

    for (let i = 2; i < upperBound; i++) {
        if(sieve[i]) {
            result.push(i);
        }
    }

    return result;
};

const primes = eratosthenesSieve(1000000);

const solutionSourceCode = `
const primes = [${primes.join(", ")}];
const enteredNumber = parseInt(process.argv[2], 10);

if (primes.includes(enteredNumber)) {
  console.log(enteredNumber + " is prime");
} else {
  console.log(enteredNumber + " is not prime");
}
`;

fs.writeFileSync(path.join(__dirname, "solution.js"), solutionSourceCode, { flag: "w" });