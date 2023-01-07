def is_armstrong_number(number):
    number_as_string = str(number)
    return number == sum(int(d)**len(number_as_string) for d in number_as_string)
