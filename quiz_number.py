import random

number = random.randint(1, 7)
attempts = 0

while True:
    choice = int(input('Choose a random number from 1 to 7: '))
    attempts += 1

    if choice == number:
        print('Congratulations! You chose the correct number:'+ str(number))
        break  

    print('Incorrect! Try again.')

    if attempts >= 3:
        print('Sorry, you have exceeded three attempts. The correct number was:'+ str(number))
        break  




