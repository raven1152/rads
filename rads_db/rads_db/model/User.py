from django.db import models


class User(models.Model):
    """
    User Profile Master Table
        contains extended information about a user,
        their usage of the site, and preferences
    """

    # Fields
    userId = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    firstName = models.CharField(max_length=30)

    # Metadata
    class Meta:
        db_table = "rdb_user"

    # Methods
    def __str__(self):
        return self.userId
