class Animal:
    def __init__(self, name, age, owner):
        self.name = name
        self.age = age
        self.owner = owner

    def sleep(self):
        return f"{self.name} is sleeping"

    def make_sound(self):
        return "Some sound"

    def __str__(self):
        return f"Animal: {self.name}, Age: {self.age}, Owner: {self.owner}"


class Dog(Animal):
    def __init__(self, name, age, owner, toy):
        super().__init__(name, age, owner)
        self.toy = toy

    def make_sound(self):  # override
        return f"{self.name} says Woof"

    def play(self):
        return f"{self.name} plays with {self.toy}"


class Cat(Animal):
    def __init__(self, name, age, owner, food):
        super().__init__(name, age, owner)
        self.food = food

    def make_sound(self):  # override
        return f"{self.name} says Meow"

    def eat(self):
        return f"{self.name} eats {self.food}"