var arr = [], n = 4;
function Backtrack (k) {
  if (k > N) {
    console.log (arr);
  } else {for
    (var i = 1;i <= n; i++) {arr[k-1] = i;
      if (Check2 (arr, k-1)) {
        Backtrack (k + 1);
      }

}} Backtrack (1);

