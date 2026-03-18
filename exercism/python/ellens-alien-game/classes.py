"""Solution to Ellen's Alien Game exercise."""


class Alien:
    """Create an Alien object with location x_coordinate and y_coordinate.

    Attributes
    ----------
    (class)total_aliens_created: int
    x_coordinate: int - Position on the x-axis.
    y_coordinate: int - Position on the y-axis.
    health: int - Number of health points.

    Methods
    -------
    hit(): Decrement Alien health by one point.
    is_alive(): Return a boolean for if Alien is alive (if health is > 0).
    teleport(new_x_coordinate, new_y_coordinate): Move Alien object to new coordinates.
    collision_detection(other): Implementation TBD.
    """

    total_aliens_created = 0

    def __init__(self, x_coordinate, y_coordinate):
        """Initialize an Alien with coordinates and health.
        
        Parameters
        ----------
        x_coordinate: int - Initial x position
        y_coordinate: int - Initial y position
        """
        self.x_coordinate = x_coordinate
        self.y_coordinate = y_coordinate
        self.health = 3
        Alien.total_aliens_created += 1

    def hit(self):
        """Decrement the alien's health by 1 point."""
        self.health -= 1

    def is_alive(self):
        """Check if the alien is alive.
        
        Returns
        -------
        bool: True if health > 0, False otherwise
        """
        return self.health > 0

    def teleport(self, new_x_coordinate, new_y_coordinate):
        """Move the alien to new coordinates.
        
        Parameters
        ----------
        new_x_coordinate: int - New x position
        new_y_coordinate: int - New y position
        """
        self.x_coordinate = new_x_coordinate
        self.y_coordinate = new_y_coordinate

    def collision_detection(self, other):
        """Detect collision with another object.
        
        Parameters
        ----------
        other: object - Another object to check collision with
        
        Returns
        -------
        None: Placeholder implementation
        """
        pass


def new_aliens_collection(alien_start_positions):
    """Create a list of Alien objects from a list of coordinate tuples.
    
    Parameters
    ----------
    alien_start_positions: list of tuples - List of (x, y) coordinate tuples
    
    Returns
    -------
    list: List of Alien objects initialized at the given positions
    """
    return [Alien(x_pos, y_pos) for x_pos, y_pos in alien_start_positions]