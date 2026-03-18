from models import Animal, Dog, Cat


def main():
    dog = Dog("Rex", 3, "Alex", "Ball")
    cat = Cat("Barsik", 2, "Ali", "Whiskas")
    animal = Animal("Unknown", 1, "No owner")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)  # __str__
        print(a.make_sound())  # polymorphism
        print(a.sleep())
        print("-" * 20)


if __name__ == "__main__":
    main()