# Color code mapping
def color_code:
  {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
  };

# Get the unit name and divisor based on the value in ohms
def get_unit_and_divisor:
  if . < 1000 then {unit: "ohms", divisor: 1}
  elif . < 1000000 then {unit: "kiloohms", divisor: 1000}
  elif . < 1000000000 then {unit: "megaohms", divisor: 1000000}
  else {unit: "gigaohms", divisor: 1000000000}
  end;

# Main logic
.colors[0:3] as $colors |
color_code as $codes |
(($codes[$colors[0]] * 10) + $codes[$colors[1]]) as $base |
$codes[$colors[2]] as $exponent |
($base * pow(10; $exponent)) as $raw_value |
($raw_value | get_unit_and_divisor) as $unit_info |
{
  "value": ($raw_value / $unit_info.divisor | floor),
  "unit": $unit_info.unit
}
