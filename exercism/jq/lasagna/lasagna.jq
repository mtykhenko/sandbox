# The input will be null or an object that _may_ contain keys
#   actual_minutes_in_oven,
#   number_of_layers
#
# If the needed key is missing, use a default value:
#   zero minutes in oven,
#   one layer.
#
# Task: output a JSON object with keys:

# Extract inputs with defaults
(.actual_minutes_in_oven // 0) as $actual_minutes_in_oven |
(.number_of_layers // 1) as $number_of_layers |

# Define constants
40 as $expected_minutes_in_oven |
2 as $minutes_per_layer |

# Calculate values
($number_of_layers * $minutes_per_layer) as $preparation_time |
($expected_minutes_in_oven - $actual_minutes_in_oven) as $remaining_minutes_in_oven |
($preparation_time + $actual_minutes_in_oven) as $total_time |

# Output object
{
  $expected_minutes_in_oven,
  $remaining_minutes_in_oven,
  $preparation_time,
  $total_time
}
