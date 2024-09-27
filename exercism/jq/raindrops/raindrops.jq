.number as $num | 
{Pling: 3, Plang: 5, Plong: 7} | 
to_entries | 
map(select($num % .value == 0) | .key) | 
add // $num