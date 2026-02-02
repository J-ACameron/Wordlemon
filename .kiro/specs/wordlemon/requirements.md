# Requirements Document: Wordlemon

## Introduction

Wordlemon is a web-based Pokemon-themed Wordle game where players guess Pokemon names and receive feedback on letter correctness. The game runs entirely in the browser with no backend or persistent storage, providing an engaging single-session gameplay experience with immediate visual feedback and a celebratory win modal.

## Glossary

- **Game_Session**: A single instance of gameplay from start to win or loss
- **Pokemon_Name**: A valid Pokemon species name (5 letters for MVP)
- **Guess**: A player's attempt to enter a Pokemon name
- **Feedback**: Visual indication of letter correctness (correct position, wrong position, not in word)
- **Win_Condition**: Player successfully guesses the target Pokemon name
- **UI**: User interface displayed in the web browser
- **Local_Storage**: Browser-based storage (not used in MVP)

## Requirements

### Requirement 1: Initialize Game Session

**User Story:** As a player, I want the game to start with a random Pokemon name selected, so that I can begin playing immediately when I load the page.

#### Acceptance Criteria

1. WHEN the page loads, THE Game_Session SHALL fetch Pokemon names from the PokeAPI (https://pokeapi.co/)
2. WHEN fetching Pokemon names, THE Game_Session SHALL filter for Pokemon names that are exactly 5 letters long
3. WHEN Pokemon names are fetched, THE Game_Session SHALL select a random Pokemon_Name from the filtered list
4. WHEN the page loads, THE UI SHALL display an empty guess input field ready for player input
5. WHEN the page loads, THE UI SHALL display a visual representation of the target word length (e.g., blank tiles)
6. WHEN the page loads, THE UI SHALL display the game title and instructions

### Requirement 2: Accept Player Guesses

**User Story:** As a player, I want to enter my guesses by typing Pokemon names, so that I can attempt to solve the puzzle.

#### Acceptance Criteria

1. WHEN a player types in the input field, THE UI SHALL accept alphabetic characters only
2. WHEN a player types a complete Pokemon_Name (5 letters), THE UI SHALL enable a submit button or allow Enter key submission
3. WHEN a player submits a Guess, THE Game_Session SHALL validate that the Guess is exactly 5 letters
4. WHEN a player submits an invalid Guess (not 5 letters), THE UI SHALL display an error message and reject the submission
5. WHEN a player submits a Guess, THE UI SHALL clear the input field for the next attempt

### Requirement 3: Provide Letter Feedback

**User Story:** As a player, I want to receive visual feedback on each letter of my guess, so that I can learn which letters are correct and adjust my strategy.

#### Acceptance Criteria

1. WHEN a Guess is submitted, THE Game_Session SHALL compare each letter to the target Pokemon_Name
2. WHEN a letter is in the correct position, THE UI SHALL display it with a "correct" visual style (e.g., green background)
3. WHEN a letter is in the target Pokemon_Name but wrong position, THE UI SHALL display it with a "wrong position" visual style (e.g., yellow background)
4. WHEN a letter is not in the target Pokemon_Name, THE UI SHALL display it with a "not in word" visual style (e.g., gray background)
5. WHEN Feedback is displayed, THE UI SHALL show the Guess in a row with all letter feedback visible simultaneously

### Requirement 4: Track Game Progress

**User Story:** As a player, I want to see all my previous guesses and their feedback, so that I can track my progress and remember what I've already tried.

#### Acceptance Criteria

1. WHEN a Guess is submitted, THE UI SHALL add it to a visible history of all previous guesses
2. WHEN the UI displays guess history, THE UI SHALL maintain the Feedback styling for each letter in each previous Guess
3. WHEN multiple Guesses are submitted, THE UI SHALL display them in chronological order (oldest first)
4. WHEN the game is in progress, THE UI SHALL display a counter showing the number of Guesses made

### Requirement 5: Detect Win Condition

**User Story:** As a player, I want the game to recognize when I've successfully guessed the Pokemon name, so that I know I've won.

#### Acceptance Criteria

1. WHEN a Guess matches the target Pokemon_Name exactly, THE Game_Session SHALL detect the Win_Condition
2. WHEN the Win_Condition is detected, THE UI SHALL display a success modal with celebratory messaging
3. WHEN the success modal is displayed, THE UI SHALL show the target Pokemon_Name
4. WHEN the success modal is displayed, THE UI SHALL show the number of Guesses it took to win
5. WHEN the success modal is displayed, THE UI SHALL provide a button to play again (restart the Game_Session)

### Requirement 6: Manage Game State

**User Story:** As a player, I want the game to maintain consistent state throughout my session, so that my progress is preserved and the game behaves predictably.

#### Acceptance Criteria

1. WHEN a Guess is submitted, THE Game_Session SHALL update internal state to record the Guess
2. WHEN the game is in progress, THE Game_Session SHALL prevent duplicate Guesses (same Pokemon_Name guessed twice)
3. WHEN a duplicate Guess is attempted, THE UI SHALL display an error message indicating the Pokemon was already guessed
4. WHEN the play again button is clicked, THE Game_Session SHALL reset all state and select a new random Pokemon_Name
5. WHEN the game is reset, THE UI SHALL clear all previous Guesses and Feedback from display

### Requirement 7: Display Polished User Interface

**User Story:** As a player, I want the game to have an attractive, responsive design, so that the experience is enjoyable and works well on different screen sizes.

#### Acceptance Criteria

1. WHEN the page loads, THE UI SHALL display a well-organized layout with title, game board, input area, and guess history
2. WHEN the page is viewed, THE UI SHALL use Pokemon-themed colors and styling (e.g., Pokemon red, yellow, blue)
3. WHEN the page is resized, THE UI SHALL remain responsive and readable on mobile and desktop screens
4. WHEN letters are displayed, THE UI SHALL use clear, readable fonts and appropriate sizing
5. WHEN Feedback is displayed, THE UI SHALL use distinct colors for correct, wrong position, and not in word states

### Requirement 8: Provide Clear Instructions

**User Story:** As a player, I want clear instructions on how to play, so that I understand the game mechanics without confusion.

#### Acceptance Criteria

1. WHEN the page loads, THE UI SHALL display game instructions explaining the objective
2. WHEN the page displays instructions, THE UI SHALL explain what the color feedback means (correct, wrong position, not in word)
3. WHEN the page displays instructions, THE UI SHALL indicate that the target is a Pokemon name
4. WHEN the page displays instructions, THE UI SHALL specify that guesses must be 5-letter Pokemon names
