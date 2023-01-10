factorMap = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong'
}

def convert(number: int) -> str:
    return ''.join(drop for factor, drop in factorMap.items() if number % factor == 0) or str(number)
