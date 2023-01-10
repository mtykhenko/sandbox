import secrets

def private_key(p):
    return secrets.choice(range(2, p))


def public_key(p, g, private):
    if not 1 < private < p:
        raise ValueError('{key} out of range, expected to be >1 and <{prime}'.format(private, p));

    return pow(g, private, p)


def secret(p, public, private):
    return pow(public, private, p)