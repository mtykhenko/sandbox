"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(elapsed_bake_time):
    """
    Return remaining baking time.

    This function takes the number of elapsed baking minutes and return the remaining
    baking time based on assuption that total baking time is 40 minutes (defined by EXPECTED_BAKE_TIME)

    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time

def preparation_time_in_minutes(number_of_layers):
    """
    Return preparation time.

    This function takes the number of layers as the parameter and calculates the total
    preparation time required assuming it takes 2 minutes to prepare a single layer.
    (2 min defined by constant PREPARATION_TIME)

    """
    return PREPARATION_TIME * number_of_layers

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """
    Return elapsed cooking time.

    This function takes two numbers representing the number of layers & the time already spent
    baking and calculates the total elapsed minutes spent cooking the lasagna.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
