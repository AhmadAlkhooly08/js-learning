import random

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return 'It\'s a tie!'
    elif (
        (user_choice == 'rock' and computer_choice == 'scissors') or
        (user_choice == 'paper' and computer_choice == 'rock') or
        (user_choice == 'scissors' and computer_choice == 'paper')
    ):
        return 'You win!'
    else:
        return 'Computer wins!'

def play_round():
    computer_choice = random.choice(['rock', 'paper', 'scissors'])
    user_choice = input('The computer has made its choice. Now it\'s your turn (rock/paper/scissors): ')

    print(f'Computer chose: {computer_choice}')
    print(f'You chose: {user_choice}')

    result = determine_winner(user_choice.lower(), computer_choice)
    print(result)

    return result

def rock_paper_scissors_game():
    score = {'user': 0, 'computer': 0}

    for round_num in range(3):
        print(f'\nRound {round_num + 1}:')
        result = play_round()

        if result == 'You win!':
            score['user'] += 1
        elif result == 'Computer wins!':
            score['computer'] += 1

        print(f'Score - You: {score["user"]} | Computer: {score["computer"]}')

    if score['user'] > score['computer']:
        print('Congratulations! You win the game!')
    elif score['user'] < score['computer']:
        print('Computer wins the game!')
    else:
        print('It\'s a tie! The game ended with a draw.')

if __name__ == "__main__":
    rock_paper_scissors_game()
