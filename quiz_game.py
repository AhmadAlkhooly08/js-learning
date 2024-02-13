answer1 = 25
answer2 = 5
answer3 = 1000000000

question1 = int(input('How many prophets are mentioned in the Quran? '))
question2 = int(input('How many pillars of Islam are there? '))
question3 = int(input('How many people are there in the world? '))

score = 0

if question1 == answer1:
    score += 1

if question2 == answer2:
    score += 1

if question3 == answer3:
    score += 1

print('Your total score is'+ str(score) +'of 3')
