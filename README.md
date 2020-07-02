# raif-prime-challenge

Эффективная проверка чисел от одного до миллиона на простоту.

Так как ограничения в задаче были очень скромны (до миллиона), мы можем найти все простые числа до миллиона заранее, а затем просто искать соответствие в массиве.
В этом и заключается суть приведенного решения.

Файл `solution_generator.js` содержит код, генерирующий программу решения задачи - `solution.js`. Решение получает число на проверку из аргументов входной строки, например

```bash
% node solution.js 999959
999959 is prime

% node solution.js 1000000
1000000 is not prime
```