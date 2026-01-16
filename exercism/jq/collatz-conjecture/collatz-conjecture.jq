def steps:
  if . <= 0 then
    "Only positive integers are allowed" | halt_error
  elif . == 1 then
    0
  else
    (if . % 2 == 0 then . / 2 else . * 3 + 1 end) | steps + 1
  end;
