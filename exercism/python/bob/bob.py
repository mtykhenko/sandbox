def response(hey_bob: str):
    is_question = hey_bob.strip().endswith('?')

    if len(hey_bob.strip()) == 0:
        return 'Fine. Be that way!'
    elif hey_bob.upper() == hey_bob and any(char.isalpha() for char in hey_bob):
        return 'Calm down, I know what I\'m doing!' if is_question else 'Whoa, chill out!'
    else:
        return 'Sure.' if is_question else 'Whatever.'
