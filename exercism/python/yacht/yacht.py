# Score categories.
# Change the values as you see fit.
YACHT = lambda dice: 50 if len(set(dice)) == 1 else 0
ONES = lambda dice: countNumberPresence(1, dice) 
TWOS = lambda dice: countNumberPresence(2, dice) * 2
THREES = lambda dice: countNumberPresence(3, dice) * 3
FOURS = lambda dice: countNumberPresence(4, dice) * 4
FIVES = lambda dice: countNumberPresence(5, dice) * 5
SIXES = lambda dice: countNumberPresence(6, dice) * 6
FULL_HOUSE = lambda dice: sum(dice) if len(set(dice)) == 2 and any(dice.count(die) == 3 for die in set(dice)) else 0
FOUR_OF_A_KIND = lambda dice: sum(die * 4 for die in set(dice) if dice.count(die) > 3)
LITTLE_STRAIGHT = lambda dice: 30 if sorted(dice) == list(range(1, 6)) else 0
BIG_STRAIGHT = lambda dice: 30 if sorted(dice) == list(range(2, 7)) else 0
CHOICE = sum

def score(dice: list, category):
   return category(dice)

def countNumberPresence(number: int, dice: list):
    return len(list(filter(lambda item: item == number, dice)))