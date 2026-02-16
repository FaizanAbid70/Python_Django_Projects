import random
import os
def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def startGame():
    clear_screen()
    while(True):
        lower=int(input("Enter the lower bound\n"))
        upper = int(input("Enter the upper bound\n"))
        if(lower>=upper):
            print("Lower bound must be smaller than from upper bound,Please enter again")
        else:
            break
    random_integer = random.randint(lower,upper)
    start = lower
    end = upper
    counter = 0
    # Binary Search:
    while(start<=end):
        counter=counter+1
        mid = (start+end)//2
        if(random_integer==mid):
            break
        elif(random_integer<mid):
            end=mid-1
        else:
            start = mid+1
    flag = False
    print("You have only ",counter," chances to guess the integer!")
    chances = 0
    # Take user guesses:
    for i in range(counter):
        chances=chances+1
        guess=int(input(f"Guess a number between {lower} and {upper}: "))
        if(guess>random_integer):
            print("Try Again! You guessed too high.")
        elif(guess<random_integer):
            print("Try Again! You guessed too small.")
        else:
            print("Congratulations you did it in ",chances," try")
            flag=True
            break
    if(flag==False):
        print("The correct number is:",random_integer)
        print("Better Luck Next Time!")
    

def menu():
    while(True):        
        print("===Main Menu===")
        print("(A)Start Game")
        print("(B)Exit Game")
        choice=input("Enter choice").upper()
        if(choice=='A'):
            startGame()
        elif(choice=='B'):
            clear_screen()
            print("Goodbye!")
            break
        else:
            clear_screen()
            print("Invalid choice.Enter again!")
menu()  