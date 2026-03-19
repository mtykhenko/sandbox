"""Calculate square root of a number using binary search."""


def square_root(number):
    """Calculate the square root of a positive integer.
    
    Args:
        number: A positive integer to find the square root of.
        
    Returns:
        The integer square root of the number.
    """
    if number == 0:
        return 0
    if number == 1:
        return 1
    
    left = 1
    right = number // 2 + 1
    
    while left <= right:
        mid = (left + right) // 2
        square = mid * mid
        
        if square == number:
            return mid
        if square < number:
            left = mid + 1
        else:
            right = mid - 1
    
    return right
