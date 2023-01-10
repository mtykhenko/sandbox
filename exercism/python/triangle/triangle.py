def equilateral(sides: list):
    return isValid(sides) and len(set(sides)) == 1


def isosceles(sides: list):
    return isValid(sides) and len(set(sides)) <= 2


def scalene(sides: list):
    return isValid(sides) and len(set(sides)) == 3

def isValid(sides: list):
    return all(sides) and sum(sides) >= max(sides) * 2
